import {Product} from "../../domain/product";
import {Quantityunit} from "../../domain/quantityunit";
import {Observable} from "rxjs";
import {FormControl} from "@angular/forms";
import {map, startWith} from "rxjs/operators";
import {QuantityunitConversion} from "../../domain/quantityunit-conversion";
import {Named} from "../../domain/entity";

export class ProductForm {
  filteredProducts: Observable<Product[]>;
  filteredQuantityunits: Observable<Quantityunit[]>;

  productsControl = new FormControl<Product>(undefined)
  quControl = new FormControl<Quantityunit>(undefined)
  amountControl = new FormControl<number>(0)

  products: Product[] = []
  allQuantityunits: Quantityunit[] = [];
  productQuantityunits: Quantityunit[] = [];
  quantityunitConversions: QuantityunitConversion[] = [];

  constructor() {
  }


  init(): void {
    console.log("init productform "+ this.productsControl.value?.name + ", p=" + this.products.length + ", q=" + this.allQuantityunits.length + ", c=" + this.quantityunitConversions.length)
    this.filteredProducts = this.productsControl.valueChanges.pipe(
      startWith(''),
      map(value => {
        return value ? this._filterProducts(value as string) : this.products.slice();
      }),
    )

    this.filteredQuantityunits = this.quControl.valueChanges.pipe(
      startWith(''),
      map(value => {
        return value ? this._filterQuantityunits(value as string) : this.productQuantityunits.slice();
      }),
    )

    this.productsControl.valueChanges.subscribe(p => {
      this.quControl.reset()
      this.productQuantityunits = []
      if (p) {
        // set to stock unit by default
        let convertableQuantityunits = this.getConvertableQuantityunits(p);
        this.productQuantityunits = this.allQuantityunits
          .filter(u => convertableQuantityunits.includes(u.id))

        this.quControl.setValue(this.productQuantityunits.filter(qu => qu.id === p.qu_id_stock)[0])
        // TODO: set amount ?
      }
    })
    // this.quControl.valueChanges.subscribe(c => this.ingredient.grocyQuantityUnit = c)
    // this.amountControl.valueChanges.subscribe(c => this.ingredient.grocyAmount = c)
  }

  private getConvertableQuantityunits(product: Product):number[] {
    let fromQus = this.quantityunitConversions
      .filter(quc => quc.from_qu_id === product.qu_id_stock)
    let result:number[] = []
    result.push(product.qu_id_stock)
    result.push(product.qu_id_purchase)
    fromQus.map(quc => quc.to_qu_id).forEach(id => result.push(id))
    return result;
  }

  private _filterProducts(name: string): Product[] {
    const filterValue = name && name.length > 0 ? name.toLowerCase() : '';

    return this.products.filter(option => option.name.toLowerCase().includes(filterValue));
  }

  private _filterQuantityunits(name: string): Quantityunit[] {
    console.log("Filter QU " + this.quControl.value?.name)
    if (!this.quControl.value) {
      return [];
    }
    const filterValue = name && name.length > 0 ? name.toLowerCase() : '';
    console.log("pqu: " + this.productQuantityunits.length)
    return this.productQuantityunits
      .filter(option => option.name.toLowerCase().includes(filterValue));
  }

  displayFn(named: Named) {
    if (named) {
      return named.name;
    }
    return '';
  }
}
