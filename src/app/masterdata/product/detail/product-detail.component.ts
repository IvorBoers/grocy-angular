import { Component } from '@angular/core';
import {AbstractDetailComponent} from "../../../shared/abstract-detail-component";
import {Location} from "../../../domain/location";
import {Product} from "../../../domain/product";
import {ProductService} from "../product.service";
import {ActivatedRoute} from "@angular/router";
import {LocationService} from "../../location/location.service";
import {QuantityunitService} from "../../quantityunit/quantityunit.service";
import {Quantityunit} from "../../../domain/quantityunit";
import {Productgroup} from "../../../domain/productgroup";
import {ProductgroupService} from "../../productgroup/productgroup.service";
import {BarcodeService} from "../../barcode/barcode.service";
import {ProductBarcode} from "../../../domain/product-barcode";
import {JumboService} from "../../../external/jumbo/jumbo-service";
import {ProductData} from "../../../external/jumbo/domain/product-data";
import {FilesService} from "../../files/files-service";
import {ProductUserfieldsService} from "../../../shared/product-userfields-service";
import {AlertService} from "../../../shared/alert-service";
import {ProductForm} from '../product-form';

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
  possibleParents: Product[] = [];
  imageContent?: string;
  productForm = new ProductForm();

  constructor(route: ActivatedRoute, service: ProductService, alertService: AlertService,
              private locationService: LocationService,
              private quService: QuantityunitService,
              private productgroupService: ProductgroupService,
              private barcodeService: BarcodeService,
              private filesService: FilesService,
              private jumboService: JumboService,
              private productUserFieldsService: ProductUserfieldsService
  ) {
    super(route, service, alertService)
    this.productForm.productsControl.valueChanges.subscribe(change => {
      console.log("change on parent")
      if (this.item) {
        if (change?.id) {
          this.item.parent_product_id = change?.id
        } else {
          this.item.parent_product_id = undefined;
        }
      }

    })
  }

  override ngOnInit() {
    super.ngOnInit();
    this.locationService.getAll().subscribe(result => this.locations = result)
    this.quService.getAll().subscribe(result => this.quantityUnits = result)
    this.productgroupService.getAll().subscribe(result => this.productgroups = result)
    this.barcodeService.getByProductId(Number(this.id)).subscribe(result => {
      this.barcodes = result;
      this.barcodes.forEach(barcode => {
        this.jumboService.searchProducts(barcode.barcode).subscribe(result => {
          // console.log(result);
          result.products.data.forEach(product => this.products.push(product))
        })
      })
    })
    this.service.getAllWhere('parent_product_id', "null").subscribe(possibleParents => {
      this.productForm.products = possibleParents;
      this.productForm.init();
    });
  }

  override createNewEntity(): Product {
    return new Product();
  }

  override setItem(one: Product): Product {
    let item = super.setItem(one);
    if (item.picture_file_name) {
      this.filesService.getFile(FilesService.group_productpictures, item.picture_file_name).subscribe(result => this.imageContent = result);
    }
    return item;
  }

  getEntityName(): string {
    return "product";
  }

  getFileUrl(picture_file_name: string) {
    return this.filesService.toFileUrl(FilesService.group_productpictures, picture_file_name);
  }

  updateGrocyProduct() {
    if (this.item?.userfields) {
      this.item.userfields.jumboId = Array.prototype.map.call(this.products, function (item) {
        return item.id;
      }).join(",");
      console.log("Saving " + JSON.stringify(this.item))
      this.productUserFieldsService.update(this.item.id, this.item.userfields).subscribe(response => {
        if (response != null && response.error_message !== undefined) {
          this.alertService.error("Error updating product userfields: " + response.error_message);
        } else {
          this.alertService.success("Saved updating product userfields");
        }
      });
    }
  }
}
