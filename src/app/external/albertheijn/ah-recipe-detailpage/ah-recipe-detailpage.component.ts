import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AhRecipeService} from '../ah-recipe-service';
import {AhRecipe, Ingredient} from '../domain/ah-recipe';
import {RecipeService} from '../../../masterdata/recipe/recipe.service';
import {RecipeUserfieldsService} from '../../../shared/recipe-userfields-service';
import {ProductService} from '../../../masterdata/product/product.service';
import {QuantityunitService} from '../../../masterdata/quantityunit/quantityunit.service';
import {
  QuantityunitConversionService
} from '../../../masterdata/quantityunit-conversion/quantityunit-conversion.service';
import {RecipeIngredientService} from '../../../shared/recipe-ingredient.service';
import {AlertService} from '../../../shared/alert-service';
import {Product} from '../../../domain/product';
import {Quantityunit} from '../../../domain/quantityunit';
import {QuantityunitConversion} from '../../../domain/quantityunit-conversion';
import {Recipe} from '../../../domain/recipe';
import {RecipeUserfields} from '../../../domain/recipe-userfields';
import {RecipeIngredient} from '../../../domain/recipe-ingredient';
import {IngredientWrapper} from '../../ingredient-wrapper';

@Component({
  selector: 'app-ah-recipe-detailpage',
  templateUrl: './ah-recipe-detailpage.component.html',
  styleUrls: ['./ah-recipe-detailpage.component.scss']
})
export class AhRecipeDetailpageComponent implements OnInit {
  displayedColumns: string[] = ['image', 'name', 'quantity', 'productinfo', 'grocy']
  item?: AhRecipe

  grocyProductsByAhId = new Map()

  ingredientWrappers: IngredientWrapper<Ingredient>[] = []
  allGrocyProducts: Product[] = [];
  allGrocyQuantityunits: Quantityunit[] = [];
  quantityunitConversions: QuantityunitConversion[] = [];
  private created_grocy_id: number | undefined;

  constructor(private route: ActivatedRoute, protected service: AhRecipeService, protected recipeService: RecipeService,
              protected recipeUserfieldsService: RecipeUserfieldsService,
              protected productService: ProductService,
              protected quService: QuantityunitService,
              protected qucService: QuantityunitConversionService,
              protected recipeIngredientService: RecipeIngredientService,
              protected alertService: AlertService) {
  }

  ngOnInit(): void {
    const id = parseInt(this.route.snapshot.params['id']);
    this.service.getRecipe(id).subscribe(response => {
      this.item = response.data.recipe;
      this.item?.ingredients.forEach(it =>
        this.ingredientWrappers.push(new IngredientWrapper(it)))
    });

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

  getImage(rendition: string) {
    const renditionItem = this.item?.images.filter(it => it.rendition === rendition).at(0);
    if (renditionItem) {
      return renditionItem.url;
    }
    return "";
  }


  importInGrocy() {
    if (this.item) {
      // TODO check if a recipe with name already exists
      let recipe = new Recipe();
      recipe.base_servings = this.item.servings.number;
      recipe.desired_servings = this.item.servings.number;
      recipe.name = this.item.title;
      recipe.description = '<p>' + this.item.description + '</p>';
      recipe.description += '<ol>';
      this.item.preparation.steps.forEach(instr => recipe.description += '<li>' + instr + '</li>')
      recipe.description += '</ol>'
      recipe.description += '<p>Bron: <a href="' + this.item.href + '">Albert Heijn</a></p>';

      console.log("ingredients")
      this.ingredientWrappers
        .filter(i => i.grocyIngredient.product)
        .forEach(i=> console.log("ingresient: " + i.grocyIngredient.product?.name))

      this.recipeService.add(recipe).subscribe(response => {
        if (response != null && response.error_message !== undefined) {
          this.alertService.error("Error: " + response.error_message);
        } else {
          this.created_grocy_id = response.created_object_id;
          this.alertService.success("Saved");
          let uf = new RecipeUserfields();
          uf.ahId = '' + this.item?.id;
          if (this.created_grocy_id) {
            this.recipeUserfieldsService.update(this.created_grocy_id, uf).subscribe(response => {
              if (response != null && response.error_message !== undefined) {
                this.alertService.error("Error: " + response.error_message);
              } else {
                this.alertService.success("Saved recipe userfields");
              }
            });
            this.ingredientWrappers
              .filter(i => i.grocyIngredient.product)
              .map(iw => iw.grocyIngredient)
              .forEach(ingredient => {
              if (ingredient.product && ingredient.quantityUnit && ingredient.amount) {
                let pos = new RecipeIngredient();
                pos.recipe_id = this.created_grocy_id || 0;
                pos.amount = ingredient.amount;
                pos.product_id = ingredient.product.id;
                pos.ingredient_group = 'imported'
                pos.price_factor = 1.0
                console.log("Importing " + JSON.stringify(pos));
                this.recipeIngredientService.add(pos).subscribe(response => {
                  if (response != null && response.error_message == undefined) {
                    ingredient.recipeIngredientId = response.created_object_id || 0
                  }
                });
              }
            })
          }
        }
      });
    }
  }

}
