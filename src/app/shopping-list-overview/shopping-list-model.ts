import {Product} from '../domain/product';
import {Quantityunit} from '../domain/quantityunit';
import {ShoppingListItem} from '../domain/shopping-list-item';
import {Productgroup} from '../domain/productgroup';
import {ShoppingList} from '../domain/shopping-list';

export class ShoppingListModel {
  constructor(it: ShoppingListItem) {
    this.item = it
  }

  list!: ShoppingList;
  item!: ShoppingListItem;
  group?: Productgroup;
  product?: Product;
  qu?: Quantityunit;
  checked = false;

}
