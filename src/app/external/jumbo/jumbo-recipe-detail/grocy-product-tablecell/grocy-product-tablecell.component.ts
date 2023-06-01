import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Ingredient} from "../../domain/jumbo-recipe-response";
import {Product} from "../../../../domain/product";
import {Observable} from "rxjs";
import {FormControl} from "@angular/forms";
import {map, startWith} from 'rxjs/operators';
import {Quantityunit} from "../../../../domain/quantityunit";
import {Named} from "../../../../domain/entity";
import {ProductService} from "../../../../masterdata/product/product.service";
import {ProductUserfieldsService} from "../../../../shared/product-userfields-service";
import {QuantityunitConversion} from "../../../../domain/quantityunit-conversion";

@Component({
  selector: 'app-grocy-product-tablecell',
  templateUrl: './grocy-product-tablecell.component.html',
  styleUrls: ['./grocy-product-tablecell.component.scss']
})
export class GrocyProductTablecellComponent implements OnInit, OnChanges {


  @Input()
  ingredient?: Ingredient;
  @Input()
  products: Product[] = [];

  @Input()
  allQuantityunits: Quantityunit[] = [];
  productQuantityunits: Quantityunit[] = [];
  @Input()
  quantityunitConversions: QuantityunitConversion[] = [];
  @Input()
  grocyProductsByJumboId = new Map()

  filteredProducts?: Observable<Product[]>;
  filteredQuantityunits?: Observable<Quantityunit[]>;

  productsControl = new FormControl<Product | undefined>(undefined)
  quControl = new FormControl<Quantityunit | undefined>(undefined)
  amountControl = new FormControl<number>(0)

  constructor(protected productService: ProductService,
              protected productUserfieldsService: ProductUserfieldsService) {
  }

  ngOnInit(): void {
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
      if (this.ingredient) {
        if (p == null) {
          this.ingredient.grocyProduct = undefined;
        } else {
          this.ingredient.grocyProduct = p;
        }
        this.quControl.reset()
        this.productQuantityunits = []
        if (p) {
          // set to stock unit by default
          let convertableQuantityunits = this.getConvertableQuantityunits(p);
          this.productQuantityunits = this.allQuantityunits
            .filter(u => convertableQuantityunits.includes(u.id))

          this.quControl.setValue(this.productQuantityunits.filter(qu => qu.id === p.qu_id_stock)[0])

          if (this.ingredient) {
            this.amountControl.setValue(parseInt(this.ingredient.quantity))
          }
        }
      }
    })
    this.quControl.valueChanges.subscribe(value => {
        if (this.ingredient) {
          if (value === undefined || value === null) {
            this.ingredient.grocyQuantityUnit = undefined;
          } else {
            this.ingredient.grocyQuantityUnit = value
          }
        }
      }
    )
    this.amountControl.valueChanges.subscribe(value => {
      if (this.ingredient) {
        if (value === undefined || value === null) {
          this.ingredient.grocyAmount = undefined;
        } else {
          this.ingredient.grocyAmount = value
        }
      }
    })

    this.findGrocyProduct()
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

    return this.productQuantityunits
      .filter(option => option.name.toLowerCase().includes(filterValue));
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.ingredient) {
      this.productsControl.setValue(this.ingredient.grocyProduct)
    }
  }

  private findGrocyProduct(): void {
    if (this.ingredient && this.ingredient.productInformation && this.ingredient.productInformation.product) {
      if (this.grocyProductsByJumboId.has(this.ingredient.productInformation.product.id)) {
        let result = this.grocyProductsByJumboId.get(this.ingredient.productInformation.product.id);
        console.log("Found a product in the map: " + result.name)
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
    if (this.ingredient) {
      let cleanedName = this.getCleanedName(this.ingredient.name);
      this.productService.getAllLike('name', cleanedName).subscribe(products => {
        if (products) {
          if (products && products.length > 0) {
            console.log("Found by ingredient name: " + (this.ingredient ? this.ingredient.name : "---"))
            this.productsControl.setValue(products[0]);
          }
        }
      })
    }
  }

  private getCleanedName(name: string) {
    return name.replace('Jumbo', '').replace('biologisch ', '');
  }

  bindGrocyProduct() {
    //TODO copy paste from jumboid-setter
    if (this.ingredient && this.ingredient.grocyProduct) {
      this.productUserfieldsService.getOne(this.ingredient.grocyProduct.id).subscribe(u => {
        if (this.ingredient) {
          let jumboIdArray: string[] = []
          if (u.jumboId) {
            jumboIdArray = u.jumboId.split(',')
          }
          let jumboId = this.ingredient.productInformation.product.id;
          if (!jumboIdArray.includes(jumboId)) {
            if (u.jumboId) {
              u.jumboId = u.jumboId + ',' + jumboId;
            } else {
              u.jumboId = jumboId;
            }
            if (this.ingredient.grocyProduct) {
              this.productUserfieldsService.update(this.ingredient.grocyProduct.id, u).subscribe(() => {
                if (this.ingredient) {
                  this.grocyProductsByJumboId.set(jumboId, this.ingredient.grocyProduct)
                }
              });
            }
          }
        }
      })
    }
  }

  isCoupledInGrocy() {
    if (this.ingredient) {
      return this.ingredient.grocyProduct && this.grocyProductsByJumboId.has(this.ingredient.productInformation.product.id);
    }
    return false;
  }

  private getConvertableQuantityunits(product: Product): number[] {
    let fromQus = this.quantityunitConversions
      .filter(quc => quc.from_qu_id === product.qu_id_stock)
    let result: number[] = []
    result.push(product.qu_id_stock)
    result.push(product.qu_id_purchase)
    fromQus.map(quc => quc.to_qu_id).forEach(id => result.push(id))
    return result;
  }
}
