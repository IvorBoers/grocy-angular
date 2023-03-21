import {Component, Input, OnInit} from '@angular/core';
import {RecipePos} from "../../../../../domain/recipe-pos";
import {ProductService} from "../../../../product/product.service";
import {Product} from "../../../../../domain/product";
import {QuantityunitService} from "../../../../quantityunit/quantityunit.service";
import {Quantityunit} from "../../../../../domain/quantityunit";

@Component({
  selector: 'app-ingredient-item-view',
  templateUrl: './ingredient-item-view.component.html',
  styleUrls: ['./ingredient-item-view.component.scss']
})
export class IngredientItemViewComponent implements OnInit {

  @Input() ingredient: RecipePos;
  @Input() factor: number;
  product: Product;
  quantityunit: Quantityunit;

  constructor(protected productService: ProductService, protected quantityunitService: QuantityunitService) {
  }

  ngOnInit(): void {
    if (this.ingredient) {
      this.productService.getOne(this.ingredient.product_id).subscribe(result => this.product = result);
      this.quantityunitService.getOne(this.ingredient.qu_id).subscribe(result => this.quantityunit = result);
    }
  }
}
