import {Component} from '@angular/core';
import {Product} from "../../../domain/product";
import {ProductService} from "../productservice/product.service";
import {AbstractEntityTableComponent} from "../../../shared/abstract-entity-table.component";

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.scss']
})
export class ProductlistComponent extends AbstractEntityTableComponent<Product> {

  constructor(productService: ProductService) {
    super(productService);
    this.setDisplayedColumns(['name', 'description']);
  }
}
