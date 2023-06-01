import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Mealplan} from "../../../../domain/mealplan";
import {RecipeService} from "../../../recipe/recipe.service";
import {ProductService} from "../../../product/product.service";
import {Recipe} from "../../../../domain/recipe";
import {Product} from "../../../../domain/product";
import {FilesService} from "../../../files/files-service";
import {catchError} from 'rxjs/operators';

@Component({
  selector: 'app-mealplan-item',
  templateUrl: './mealplan-item.component.html',
  styleUrls: ['./mealplan-item.component.scss']
})
export class MealplanItemComponent implements OnInit {

  @Input()
  mealplan!: Mealplan;

  @Output()
  refreshEvent = new EventEmitter();


  constructor(protected recipeService: RecipeService, protected productService: ProductService, protected filesService: FilesService) {
  }

  ngOnInit() {
  }

  triggerRefreshEvent() {
    this.refreshEvent.emit(null)
  }
}
