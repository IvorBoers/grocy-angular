import { Component } from '@angular/core';
import {AbstractMealplanItemComponent} from "../abstract-mealplan-item.component";
import {Product} from "../../../../../domain/product";
import {FilesService} from "../../../../files/files-service";
import {GrocyImagePipe} from "../../../../../shared/grocy-image-pipe.pipe";
import {MealplanService} from "../../../mealplan.service";
import {AlertService} from "../../../../../shared/alert-service";
import {ProductService} from "../../../../product/product.service";
import {QuantityunitService} from "../../../../quantityunit/quantityunit.service";
import {Quantityunit} from "../../../../../domain/quantityunit";
import {QuantityunitConversionService} from "../../../../quantityunit-conversion/quantityunit-conversion.service";
import {ProductForm} from "../../../../product/product-form";
import {forkJoin, Observable} from "rxjs";

@Component({
  selector: 'app-product-mealplan-item',
  templateUrl: './product-mealplan-item.component.html',
  styleUrls: ['./product-mealplan-item.component.scss']
})
export class ProductMealplanItemComponent extends AbstractMealplanItemComponent {

  product: Product;
  productQuantityUnit: Quantityunit;

  productForm: ProductForm;

  constructor(protected mealplanService: MealplanService, protected alertService: AlertService,
              protected grocyImagePipe: GrocyImagePipe, protected productService: ProductService,
              protected quService: QuantityunitService, protected qucService: QuantityunitConversionService,) {
    super(mealplanService, alertService);
  }

  ngOnInit() {
    super.ngOnInit();
    let productForm = new ProductForm();
    productForm.amountControl.setValue(this.mealplan.product_amount);


    if (this.mealplan && this.mealplan.product_id) {
      this.productService.getOne(this.mealplan.product_id).subscribe(response => {
        this.product = response

      })
      this.quService.getOne(this.mealplan.product_qu_id).subscribe(result => {
        this.productQuantityUnit = result
        productForm.quControl.setValue(this.productQuantityUnit)
      });
    }
    const obs : Observable<any>[] = [];
    obs.push(this.productService.getAll());
    obs.push(this.quService.getAll());
    obs.push(this.qucService.getAll());
    forkJoin(obs).subscribe(([p, q, c]) => {
      productForm.products = p;
      productForm.allQuantityunits = q;
      productForm.quantityunitConversions = c;
      productForm.init();
      productForm.productsControl.setValue(p.find(p => p.id === this.mealplan.product_id));
      this.productForm = productForm;
    });
  }

  updateMealplanFields() {
    if (this.productForm) {
      this.mealplan.product_id = this.productForm.productsControl.value.id;
      this.mealplan.product_amount = this.productForm.amountControl.value;
      this.mealplan.product_qu_id = this.productForm.quControl.value.id;
    }
  }

  getFileUrl(picture_file_name: string) {
    return this.grocyImagePipe.transform(picture_file_name, FilesService.group_productpictures)
  }
}
