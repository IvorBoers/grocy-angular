import {Component, Input, OnInit} from '@angular/core';
import {RecipeData} from "../domain/jumbo-recipe-response";
import {RecipeService} from "../../../masterdata/recipe/recipe.service";
import {Recipe} from "../../../domain/recipe";
import {ProductService} from "../../../masterdata/product/product.service";
import {Product} from "../../../domain/product";
import {QuantityunitService} from "../../../masterdata/quantityunit/quantityunit.service";
import {Quantityunit} from "../../../domain/quantityunit";
import {RecipeUserfieldsService} from "../../../shared/recipe-userfields-service";
import {RecipeUserfields} from "../../../domain/recipe-userfields";
import {RecipeIngredient} from "../../../domain/recipe-ingredient";
import {RecipeIngredientService} from "../../../shared/recipe-ingredient.service";
import {AlertService} from "../../../shared/alert-service";
import {QuantityunitConversion} from "../../../domain/quantityunit-conversion";
import {QuantityunitConversionService} from "../../../masterdata/quantityunit-conversion/quantityunit-conversion.service";

@Component({
  selector: 'app-jumbo-recipe-detail',
  templateUrl: './jumbo-recipe-detail.component.html',
  styleUrls: ['./jumbo-recipe-detail.component.scss']
})
export class JumboRecipeDetailComponent implements OnInit {
  displayedColumns: string[] = ['image', 'name', 'quantity', 'productinfo', 'grocy']
  @Input()
  item: RecipeData;

  @Input()
  grocyProductsByJumboId = new Map()

  allGrocyProducts: Product[] = [];
  allGrocyQuantityunits: Quantityunit[] = [];
  quantityunitConversions: QuantityunitConversion[] = [];


  private created_grocy_id: number;

  constructor(protected recipeService: RecipeService,
              protected recipeUserfieldsService: RecipeUserfieldsService,
              protected productService: ProductService,
              protected quService: QuantityunitService,
              protected qucService: QuantityunitConversionService,
              protected recipeIngredientService: RecipeIngredientService,
              protected alertService: AlertService) {
  }

  ngOnInit(): void {
    this.productService.getAll()
      .subscribe(r => {
        this.allGrocyProducts = r
      })
    this.quService.getAll()
      .subscribe(u => {
        this.allGrocyQuantityunits = u
      })
    this.qucService.getAll()
      .subscribe(quc => {
        console.log("retrieved quc " + quc.length)
        this.quantityunitConversions = quc;
      })
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
        this.alertService.error("Error: " + response.error_message);
      } else {
        this.created_grocy_id = response.created_object_id;
        this.alertService.success("Saved");
        let uf = new RecipeUserfields();
        uf.jumboId = this.item.id;
        this.recipeUserfieldsService.update(this.created_grocy_id, uf).subscribe(response => {
          if (response != null && response.error_message !== undefined) {
            this.alertService.error("Error: " + response.error_message);
          } else {
            this.alertService.success("Saved recipe userfields");
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

}
