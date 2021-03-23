import { Component } from '@angular/core';
import {AbstractDetailComponent} from "../../../shared/abstract-detail-component";import {Product} from "../../../domain/product";
import {ProductService} from "../product.service";
import {ActivatedRoute} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent extends AbstractDetailComponent<Product> {

  constructor(route: ActivatedRoute, _snackBar: MatSnackBar, service: ProductService) {
    super(route, _snackBar, service)
  }

  getEntityName(): string {
    return "product";
  }

}
