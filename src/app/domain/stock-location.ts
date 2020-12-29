import {Entity} from "./entity";

export class StockLocation implements Entity {
  id: number
  product_id: number
  amount: number
  location_id: number
  location_name: string
  location_is_freezer: number
}
