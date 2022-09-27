import { Component } from '@angular/core';
import {AbstractDetailComponent} from "../../../shared/abstract-detail-component";
import {Location} from "../../../domain/location";
import {Product} from "../../../domain/product";
import {ProductService} from "../product.service";
import {ActivatedRoute} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {LocationService} from "../../location/location.service";
import {QuantityunitService} from "../../quantityunit/quantityunit.service";
import {Quantityunit} from "../../../domain/quantityunit";
import {Productgroup} from "../../../domain/productgroup";
import {ProductgroupService} from "../../productgroup/productgroup.service";
import {BarcodeService} from "../../barcode/barcode.service";
import {ProductBarcode} from "../../../domain/product-barcode";
import {JumboService} from "../../../external/jumbo-service";
import {ProductData} from "../../../external/jumbo/domain/product-data";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent extends AbstractDetailComponent<Product> {
  locations: Location[] = [];
  quantityUnits: Quantityunit[] = [];
  productgroups: Productgroup[] = [];
  barcodes: ProductBarcode[] = [];
  products: ProductData[] = [];

  constructor(route: ActivatedRoute, _snackBar: MatSnackBar, service: ProductService,
              private locationService: LocationService,
              private quService: QuantityunitService,
              private productgroupService: ProductgroupService,
              private barcodeService: BarcodeService,
              private jumboService: JumboService
  ) {
    super(route, _snackBar, service)
  }

  ngOnInit() {
    super.ngOnInit();
    this.locationService.getAll().subscribe(result => this.locations = result)
    this.quService.getAll().subscribe(result => this.quantityUnits = result)
    this.productgroupService.getAll().subscribe(result => this.productgroups = result)
    this.barcodeService.getByProductId(this.id).subscribe(result => {
      this.barcodes = result;
      this.barcodes.forEach(barcode => {
        this.jumboService.searchProducts(barcode.barcode).subscribe(result => {
          // console.log(result);
          result.products.data.forEach(product => this.products.push(product))
        })
      })
    })
  }

  getEntityName(): string {
    return "product";
  }

}
