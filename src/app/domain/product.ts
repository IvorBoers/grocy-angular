import {Entity} from "./entity";

export class Product implements Entity {
  id: number
  name: string
  description: string
  location_id: number
  qu_id_purchase: number
  qu_id_stock: number
  enable_tare_weight_handling: number
  not_check_stock_fulfillment_for_recipes: number
  product_group_id: number
  qu_factor_purchase_to_stock: number
  tare_weight: number
  barcode: string // Can contain multiple barcodes separated by comma
  min_stock_amount: number // minimum: 0,  default: 0
  default_best_before_days: number // minimum: 0,  default: 0
  default_best_before_days_after_open: number // minimum: 0,  default: 0
  picture_file_name: string
  row_created_timestamp: string
  shopping_location_id: number
  // userfields:	[];
}
