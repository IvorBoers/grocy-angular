import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ShoppingListModel} from '../shopping-list-model';
import {ProductForm} from '../../masterdata/product/product-form';
import {ProductService} from '../../masterdata/product/product.service';
import {QuantityunitService} from '../../masterdata/quantityunit/quantityunit.service';
import {QuantityunitConversionService} from '../../masterdata/quantityunit-conversion/quantityunit-conversion.service';
import {forkJoin} from 'rxjs';
import {Product} from '../../domain/product';
import {Quantityunit} from '../../domain/quantityunit';
import {QuantityunitConversion} from '../../domain/quantityunit-conversion';

@Component({
  selector: 'app-shopping-list-item',
  templateUrl: './shopping-list-item.component.html',
  styleUrls: ['./shopping-list-item.component.scss']
})
export class ShoppingListItemComponent implements OnInit {

  @Input()
  item!: ShoppingListModel;

  @Input()
  editable = false;

  @Output()
  saveEvent = new EventEmitter<ShoppingListModel>();
  @Output()
  cancelEvent = new EventEmitter<ShoppingListModel>();
  @Output()
  deleteEvent = new EventEmitter<ShoppingListModel>();

  productForm = new ProductForm();

  constructor(protected productService: ProductService,
              protected quService: QuantityunitService, protected qucService: QuantityunitConversionService) {
  }

  ngOnInit() {
    if (this.editable) {
      this.createProductForm();
    }
  }

  toggleDone() {
    this.item.item.done = !this.item.item.done;
    this.saveItem();
  }

  toggleEdit() {
    this.editable = !this.editable;
    if (this.editable) {
      this.createProductForm();
    }
  }

  private createProductForm() {
    let pf = new ProductForm();

    const obs = [
      this.productService.getAll(),
      this.quService.getAll(),
      this.qucService.getAll()
    ];
    forkJoin(obs).subscribe(([p, q, c]) => {
      pf.products = p as Product[];
      pf.allQuantityunits = q as Quantityunit[];
      pf.quantityunitConversions = c as QuantityunitConversion[];
      pf.init();
      pf.productsControl.setValue(this.item.product)
      pf.quControl.setValue(this.item.qu)
      pf.amountControl.setValue(this.item.item.amount)
      pf.noteControl.setValue(this.item.item.note ?? '')
      this.productForm = pf;
    });
  }

  cancelEdit() {
    this.cancelEvent.emit(this.item);
    this.editable = false;
  }
  saveItem() {
    if (this.productForm.productsControl.value && this.productForm.quControl.value) {
      const itemToSave = this.item;
      itemToSave.product = this.productForm.productsControl.value;
      itemToSave.item.product_id = this.productForm.productsControl.value.id;
      itemToSave.qu = this.productForm.quControl.value
      itemToSave.item.qu_id = this.productForm.quControl.value.id
      itemToSave.item.note = this.productForm.noteControl.value ?? ''
      itemToSave.item.amount = this.productForm.amountControl.value ?? 1
      console.log("sending saveEvent")
      this.saveEvent.emit(this.item)
    } else {
      console.log("item is missing required fields")
    }
    this.toggleEdit();
  }

  deleteItem() {
    this.deleteEvent.emit(this.item);
  }
}
