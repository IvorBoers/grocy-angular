import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {RecipeData} from "../domain/jumbo-recipe-response";
import {RecipeService} from "../../../masterdata/recipe/recipe.service";
import {Recipe} from "../../../domain/recipe";
import {MatSnackBar} from "@angular/material/snack-bar";
import {ProductService} from "../../../masterdata/product/product.service";

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

  constructor(protected recipeService: RecipeService, protected productService: ProductService, private _snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.item) {
      this.item.ingredients.forEach(i => {
        if (i.productInformation && i.productInformation.product) {
          if (this.grocyProductsByJumboId.has(i.productInformation.product.id)) {
            console.log("found grocy product by ID")
            i.grocyProduct = this.grocyProductsByJumboId.get(i.productInformation.product.id)
          } else {
            console.log("looking for grocy product, first by productinformation. " + i.productInformation.product.title)
            this.productService.getAllLike('name', this.getCleanedName(i.productInformation.product.title)).subscribe(result => {
              if (result.length > 0) {
                i.grocyProduct = result[0];
              } else {
                console.log("Nothing found by productinformation, try ingredient name")
                this.productService.getAllLike('name', this.getCleanedName(i.name)).subscribe(result => {
                  if (result) {
                    i.grocyProduct = result[0];
                  }
                });
              }
            })
          }
        } else {
          console.log("looking for grocy product, by ingredient name because there is no productinformation. " + i.name)
          this.productService.getAllLike('name', this.getCleanedName(i.name)).subscribe(result => {
            if (result.length > 0) {
              console.log("Found " + result[0].name)
              i.grocyProduct = result[0];
            }
          });
        }
      })
    }
  }

  private getCleanedName(name: string) {
    return name.replace('Jumbo', '').replace('biologisch ','');
  }

  importInGrocy() {
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
        this.openSnackBar("Saved", "Great");
      }
    });
  }

  openSnackBar(message: string, entity: string) {
    this._snackBar.open(message, entity, {
      duration: 2000,
    });
  }
}
