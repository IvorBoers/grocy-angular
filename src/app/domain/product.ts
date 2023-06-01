import {Entity, Named} from "./entity";
import {ProductUserfields} from "./product-userfields";

export class Product implements Entity, Named {
  static entityName = 'products'
  id= 0
  name= ''
  description= ''
  product_group_id= 0
  active= 0
  location_id= 0
  shopping_location_id= 0
  qu_id_purchase= 0
  qu_id_stock= 0
  qu_factor_purchase_to_stock= 0
  min_stock_amount= 0 // minimum: 0,  default: 0
  default_best_before_days= 0 // minimum: 0,  default: 0
  default_best_before_days_after_open= 0 // minimum: 0,  default: 0
  default_best_before_days_after_freezing= 0 // minimum: 0,  default: 0
  default_best_before_days_after_thawing= 0 // minimum: 0,  default: 0
  picture_file_name= ''
  enable_tare_weight_handling= 0
  tare_weight= 0
  not_check_stock_fulfillment_for_recipes= 0
  parent_product_id= 0
  calories= 0
  cumulative_min_stock_amount_of_sub_products= 0
  due_type= 0
  quick_consume_amount= 0
  "hide_on_stock_overview"= 0
  "default_stock_label_type"= 0
  "should_not_be_frozen"= 0
  "row_created_timestamp"= ''
  "treat_opened_as_out_of_stock"= 0
  "no_own_stock"= 0
  "default_consume_location_id"= 0
  "move_on_open"= 0
  userfields?: ProductUserfields;

  // barcode= '' // Can contain multiple barcodes separated by comma
}
