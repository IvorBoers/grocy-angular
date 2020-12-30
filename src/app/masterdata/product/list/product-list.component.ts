import {Component} from '@angular/core';
import {Product} from "../../../domain/product";
import {ProductService} from "../product.service";
import {AbstractEntityTableComponent} from "../../../shared/abstract-entity-table.component";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent extends AbstractEntityTableComponent<Product> {

  constructor(productService: ProductService) {
    super(productService);
    this.setDisplayedColumns(['name', 'description']);
  }
}
