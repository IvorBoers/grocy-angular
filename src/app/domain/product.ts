import {Entity} from "./entity";

export class Product implements Entity {
  id: number
  name: string
  description: string
  product_group_id: number
  active: number
  location_id: number
  shopping_location_id: number
  qu_id_purchase: number
  qu_id_stock: number
  qu_factor_purchase_to_stock: number
  min_stock_amount: number // minimum: 0,  default: 0
  default_best_before_days: number // minimum: 0,  default: 0
  default_best_before_days_after_open: number // minimum: 0,  default: 0
  default_best_before_days_after_freezing: number // minimum: 0,  default: 0
  default_best_before_days_after_thawing: number // minimum: 0,  default: 0
  picture_file_name: string
  enable_tare_weight_handling: number
  tare_weight: number
  not_check_stock_fulfillment_for_recipes: number
  parent_product_id: number
  calories: number
  cumulative_min_stock_amount_of_sub_products: number
  due_type: number
  quick_consume_amount: number
  "hide_on_stock_overview": number
  "default_stock_label_type": number
  "should_not_be_frozen": number
  "row_created_timestamp": string
  "treat_opened_as_out_of_stock": number
  "no_own_stock": number
  "default_consume_location_id": number
  "move_on_open": number
  "userfields": []

  // barcode: string // Can contain multiple barcodes separated by comma
}
