import {Entity} from "./entity";

export class ShoppingList implements Entity {
  id?: number
  name!: string
  description?: string

}
