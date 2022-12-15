import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Ingredient} from "../../domain/jumbo-recipe-response";
import {Product} from "../../../../domain/product";
import {Observable} from "rxjs";
import {UntypedFormControl} from "@angular/forms";
import {map, startWith} from 'rxjs/operators';
import {Quantityunit} from "../../../../domain/quantityunit";
import {Named} from "../../../../domain/entity";
import {QuantityunitConversionService} from "../../../../masterdata/quantityunit-conversion/quantityunit-conversion.service";

@Component({
  selector: 'app-grocy-product-tablecell',
  templateUrl: './grocy-product-tablecell.component.html',
  styleUrls: ['./grocy-product-tablecell.component.scss']
})
export class GrocyProductTablecellComponent implements OnInit, OnChanges {


  @Input()
  ingredient: Ingredient;
  @Input()
  products: Product[] = [];

  @Input()
  quantityunits: Quantityunit[] = [];

  filteredProducts: Observable<Product[]>;
  filteredQuantityunits: Observable<Quantityunit[]>;

  projectsControl = new UntypedFormControl('')
  quControl = new UntypedFormControl('')
  amountControl = new UntypedFormControl('')

  constructor(protected quConversionService: QuantityunitConversionService) {
  }

  ngOnInit(): void {
    this.filteredProducts = this.projectsControl.valueChanges.pipe(
      startWith(''),
      map(value => {
        return value ? this._filterProducts(value as string) : this.products.slice();
      }),
    )
    this.projectsControl.valueChanges.subscribe(p => this.ingredient.grocyProduct = p)

    this.filteredQuantityunits = this.quControl.valueChanges.pipe(
      startWith(''),
      map(value => {
        return value ? this._filterQuantityunits(value as string) : this.quantityunits.slice();
      }),
    )


    this.projectsControl.valueChanges.subscribe(p => {
      this.ingredient.grocyProduct = p;
      if (p) {
        // set to stock unit by default
        this.quantityunits
          .filter(u => u.id == this.ingredient.grocyProduct.qu_id_stock)
          .forEach(qu => this.quControl.setValue(qu))
        if (this.ingredient && this.ingredient.productInformation && this.ingredient.productInformation.quantity) {
          this.amountControl.setValue(this.ingredient.productInformation.quantity.amount)
        }
      } else {
        this.quControl.setValue(null);
      }
    })
    this.quControl.valueChanges.subscribe(c => this.ingredient.grocyQuantityUnit = c)
    this.amountControl.valueChanges.subscribe(c => this.ingredient.grocyAmount = c)

  }

  displayFn(named: Named) {
    if (named) {
      return named.name;
    }
    return '';
  }

  private _filterProducts(name: string): Product[] {
    const filterValue = name && name.length > 0 ? name.toLowerCase() : '';

    return this.products.filter(option => option.name.toLowerCase().includes(filterValue));
  }

  private _filterQuantityunits(name: string): Quantityunit[] {
    if (!this.quControl.value) {
      return [];
    }
    const filterValue = name && name.length > 0 ? name.toLowerCase() : '';

    this.quConversionService.getAllWhere('to_qu_id', this.projectsControl.value.qu_id_stock).subscribe(res => {

    })

    return this.quantityunits.filter(option => option.name.toLowerCase().includes(filterValue));
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.projectsControl.setValue(this.ingredient.grocyProduct)
  }
}
