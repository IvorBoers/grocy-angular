import {Product} from "../domain/product";
import {Quantityunit} from "../domain/quantityunit";

export class ProductQuantityunitAmount {
    product: Product
    quantityunit: Quantityunit
    amount: number
}
