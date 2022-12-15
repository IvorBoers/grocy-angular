import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Ingredient, RecipeData} from "../domain/jumbo-recipe-response";
import {RecipeService} from "../../../masterdata/recipe/recipe.service";
import {Recipe} from "../../../domain/recipe";
import {MatSnackBar} from "@angular/material/snack-bar";
import {ProductService} from "../../../masterdata/product/product.service";
import {Product} from "../../../domain/product";
import {QuantityunitService} from "../../../masterdata/quantityunit/quantityunit.service";
import {Quantityunit} from "../../../domain/quantityunit";
import {RecipeUserfieldsService} from "../../../shared/recipe-userfields-service";
import {RecipeUserfields} from "../../../domain/recipe-userfields";
import {RecipeIngredient} from "../../../domain/recipe-ingredient";
import {RecipeIngredientService} from "../../../shared/recipe-ingredient.service";

@Component({
  selector: 'app-jumbo-recipe-detail',
  templateUrl: './jumbo-recipe-detail.component.html',
  styleUrls: ['./jumbo-recipe-detail.component.scss']
})
export class JumboRecipeDetailComponent implements OnInit, OnChanges {
  displayedColumns: string[] = ['image', 'name', 'quantity', 'productinfo', 'grocy']
  @Input()
  item: RecipeData;

  @Input()
  grocyProductsByJumboId = new Map()

  allGrocyProducts: Product[] = [];
  allGrocyQuantityunits: Quantityunit[] = [];
  private created_grocy_id: number;

  constructor(protected recipeService: RecipeService,
              protected recipeUserfieldsService: RecipeUserfieldsService,
              protected productService: ProductService,
              protected quService: QuantityunitService,
              protected recipeIngredientService: RecipeIngredientService,
              private _snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.productService.getAll().subscribe(r => {
      this.allGrocyProducts = r
    })
    this.quService.getAll().subscribe(u => this.allGrocyQuantityunits = u)

  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.item) {
      this.item.ingredients.forEach(i => {
        console.log("---------- " + i.name + " ----------------")
        this.findGrocyProduct(i).then(p => i.grocyProduct = p)
      })
      console.log("READY")
    }
  }

  private async findGrocyProduct(i: Ingredient) {
    if (i.productInformation && i.productInformation.product) {
      if (this.grocyProductsByJumboId.has(i.productInformation.product.id)) {
        return this.grocyProductsByJumboId.get(i.productInformation.product.id)
      } else {
        this.getGrocyProductByIngredientNameOrProductTitle(i).then(p => {
            if (p) {
              return p
            }
          }
        );
      }
    }
    if (!i.grocyProduct) {
      this.getGrocyProductByIngredientName(i).then (p => {
        return p
      })
    }
  }

  private async getGrocyProductByIngredientNameOrProductTitle(i: Ingredient) {

    let cleanedName = this.getCleanedName(i.productInformation.product.title);
    console.log("looking for a product with a name like " + cleanedName)
    let products = await this.productService.getAllLike('name', cleanedName).toPromise();
    if (products) {
      console.log("Results when looking for " + cleanedName + " are: " + products);

      if (products.length > 0) {
        console.log("Found by product title: " + i.name)
        return products[0];
      }
    }
    return;


    // forkJoin({
    //   productCall: this.productService.getAllLike('name', cleanedName)
    // }).subscribe({
    //   next: value => {
    //     //this  will run once both observables are completed.
    //     console.log("Results when looking for " + cleanedName + " are: " + value[0]);
    //
    //     if (value[0] && value[0].length > 0) {
    //       console.log("Found by product title: " + i.name)
    //       i.grocyProduct = value[0][0];
    //     } else {
    //       this.setGrocyProductByIngredientName(i);
    //     }
    //   }
    //   })
  }

  private async getGrocyProductByIngredientName(i: Ingredient) {
    let cleanedName = this.getCleanedName(i.name);
    console.log("Looking for a product with an ingredient name like " + cleanedName)
    let products = await this.productService.getAllLike('name', cleanedName).toPromise();
    if (products) {
        console.log("Results when looking for " + cleanedName + " are: " + products);
        if (products && products.length > 0) {
          console.log("Found by ingredient name: " + i.name)
          return products[0];
        }
    }
    return
    // forkJoin({
    //   call: this.productService.getAllLike('name', cleanedName)
    // })
    // .subscribe(result => {
    //   console.log("Results when looking for " + cleanedName + " are: " + result[0]);
    //   if (result[0] && result[0].length > 0) {
    //     console.log("Found by ingredient name: " + i.name)
    //     i.grocyProduct = result[0][0];
    //   }
    // });
  }

  private getCleanedName(name: string) {
    return name.replace('Jumbo', '').replace('biologisch ','');
  }

  importInGrocy() {
    // TODO check if a recipe with name already exists
    let recipe = new Recipe();
    recipe.base_servings = this.item.numberOfPortions;
    recipe.desired_servings = this.item.numberOfPortions;
    recipe.name = this.item.name;
    recipe.description = '<p>' + this.item.description + '</p>';
    recipe.description += '<ol>';
    this.item.instructions.forEach(instr => recipe.description += '<li>' + instr + '</li>')
    recipe.description += '</ol>'
    recipe.description += '<p>Bron: <a href="' + this.item.webUrl + '">Jumbo</a></p>';


    this.recipeService.add(recipe).subscribe(response => {
      if (response != null && response.error_message !== undefined) {
        this.openSnackBar("Error: " + response.error_message, "Ugh");
      } else {
        this.created_grocy_id = response.created_object_id;
        this.openSnackBar("Saved", "Great");
        let uf = new RecipeUserfields();
        uf.jumboId = this.item.id;
        this.recipeUserfieldsService.update(this.created_grocy_id, uf).subscribe(response => {
          if (response != null && response.error_message !== undefined) {
            this.openSnackBar("Error: " + response.error_message, "Ugh");
          } else {
            this.openSnackBar("Saved userfields", "Great");
          }
        });
        this.item.ingredients.forEach(ingredient => {
          if (ingredient.grocyProduct && ingredient.grocyQuantityUnit && ingredient.grocyAmount) {
            let pos = new RecipeIngredient();
            pos.recipe_id = this.created_grocy_id;
            pos.amount = ingredient.grocyAmount;
            pos.product_id = ingredient.grocyProduct.id;
            pos.ingredient_group = 'imported'
            pos.price_factor = 1.0
            console.log("Importing " + JSON.stringify(pos));
            this.recipeIngredientService.add(pos).subscribe(response => {
              if (response != null && response.error_message == undefined) {
                ingredient.grocyRecipeIngredientId = response.created_object_id
              }
            });
          }
        })
      }
    });
  }

  openSnackBar(message: string, entity: string) {
    this._snackBar.open(message, entity, {
      duration: 2000,
    });
  }
}
