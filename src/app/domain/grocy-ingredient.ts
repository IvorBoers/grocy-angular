import {Product} from './product';
import {Quantityunit} from './quantityunit';

export class GrocyIngredient {
  product?: Product;
  quantityUnit?: Quantityunit;
  amount?: number;
  recipeIngredientId?: number
}
