import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Mealplan} from "../../../../domain/mealplan";
import {RecipeService} from "../../../recipe/recipe.service";
import {ProductService} from "../../../product/product.service";
import {Recipe} from "../../../../domain/recipe";
import {Product} from "../../../../domain/product";
import {FilesService} from "../../../files/files-service";

@Component({
  selector: 'app-mealplan-item',
  templateUrl: './mealplan-item.component.html',
  styleUrls: ['./mealplan-item.component.scss']
})
export class MealplanItemComponent implements OnInit {

  @Input()
  mealplan: Mealplan;

  recipe: Recipe;
  product: Product;
  @Output()
  refreshEvent = new EventEmitter();


  constructor(protected recipeService: RecipeService, protected productService: ProductService, protected filesService: FilesService) {
  }

  ngOnInit() {
  if (this.mealplan) {
    if (this.mealplan.recipe_id) {
      this.recipeService.getOne(this.mealplan.recipe_id).subscribe(r => this.recipe = r);
    }
    if (this.mealplan.product_id) {
      this.productService.getOne(this.mealplan.product_id).subscribe(p => this.product = p)
    }
  }
  }

  triggerRefreshEvent() {
    this.refreshEvent.emit(null)
  }
}
