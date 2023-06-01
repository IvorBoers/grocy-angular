import {Product} from "../domain/product";
import {Quantityunit} from "../domain/quantityunit";

export interface ProductQuantityunitAmount {
    product: Product
    quantityunit: Quantityunit
    amount: number
}
