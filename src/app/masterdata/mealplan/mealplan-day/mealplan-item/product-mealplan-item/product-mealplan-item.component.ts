import { Component } from '@angular/core';
import {AbstractMealplanItemComponent} from "../abstract-mealplan-item.component";

@Component({
  selector: 'app-product-mealplan-item',
  templateUrl: './product-mealplan-item.component.html',
  styleUrls: ['./product-mealplan-item.component.scss']
})
export class ProductMealplanItemComponent extends AbstractMealplanItemComponent {

  updateMealplanFields() {
  }

}
