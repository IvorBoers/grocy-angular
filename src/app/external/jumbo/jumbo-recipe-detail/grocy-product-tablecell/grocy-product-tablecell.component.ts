import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Ingredient} from "../../domain/jumbo-recipe-response";
import {Product} from "../../../../domain/product";
import {Observable} from "rxjs";
import {UntypedFormControl} from "@angular/forms";
import {map, startWith} from 'rxjs/operators';
import {Quantityunit} from "../../../../domain/quantityunit";
import {Named} from "../../../../domain/entity";
import {QuantityunitConversionService} from "../../../../masterdata/quantityunit-conversion/quantityunit-conversion.service";
import {ProductService} from "../../../../masterdata/product/product.service";

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
  @Input()
  grocyProductsByJumboId = new Map()

  filteredProducts: Observable<Product[]>;
  filteredQuantityunits: Observable<Quantityunit[]>;

  productsControl = new UntypedFormControl('')
  quControl = new UntypedFormControl('')
  amountControl = new UntypedFormControl('')

  constructor(protected quConversionService: QuantityunitConversionService, protected productService: ProductService) {
  }

  ngOnInit(): void {
    this.filteredProducts = this.productsControl.valueChanges.pipe(
      startWith(''),
      map(value => {
        return value ? this._filterProducts(value as string) : this.products.slice();
      }),
    )
    this.productsControl.valueChanges.subscribe(p => this.ingredient.grocyProduct = p)
    this.findGrocyProduct()

    this.filteredQuantityunits = this.quControl.valueChanges.pipe(
      startWith(''),
      map(value => {
        return value ? this._filterQuantityunits(value as string) : this.quantityunits.slice();
      }),
    )

    this.productsControl.valueChanges.subscribe(p => {
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

    this.quConversionService.getAllWhere('to_qu_id', this.productsControl.value.qu_id_stock).subscribe(res => {

    })

    return this.quantityunits.filter(option => option.name.toLowerCase().includes(filterValue));
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.productsControl.setValue(this.ingredient.grocyProduct)
  }

  private findGrocyProduct(): void {
    if (this.ingredient.productInformation && this.ingredient.productInformation.product) {
      if (this.grocyProductsByJumboId.has(this.ingredient.productInformation.product.id)) {
        let result = this.grocyProductsByJumboId.get(this.ingredient.productInformation.product.id);
        console.log("Found a product in the map: " + result)
        this.productsControl.setValue(result)
      } else {
        let cleanedName = this.getCleanedName(this.ingredient.productInformation.product.title);
        this.productService.getAllLike('name', cleanedName).subscribe(products => {
          if (products.length > 0) {
            console.log("Found product by name " + cleanedName)
            this.productsControl.setValue(products[0])
          } else {
            this.getGrocyProductByIngredientName()
          }
        })
      }
    } else {
      this.getGrocyProductByIngredientName()
    }
  }

  private getGrocyProductByIngredientName(): void {
    let cleanedName = this.getCleanedName(this.ingredient.name);
    this.productService.getAllLike('name', cleanedName).subscribe(products => {
      if (products) {
        if (products && products.length > 0) {
          console.log("Found by ingredient name: " + this.ingredient.name)
          this.productsControl.setValue(products[0]);
        }
      }
    })
  }

  private getCleanedName(name: string) {
    return name.replace('Jumbo', '').replace('biologisch ', '');
  }
}
