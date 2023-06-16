import {Entity} from "./entity";

export class ShoppingListItem implements Entity {
  id?: number
  product_id?: number
  shopping_list_id?: number
  note?: string
  amount = 1
  done = false
  qu_id?: number

}
