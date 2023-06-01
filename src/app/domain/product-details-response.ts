import {Product} from "./product";
import {Location} from "./location";
import {ProductBarcode} from "./product-barcode";
import {Quantityunit} from "./quantityunit";

export class ProductDetailsResponse {
  product = new Product();
  product_barcodes: ProductBarcode[] = [];
  last_purchased= ''
  last_used= ''
  stock_amount= 0
  stock_amount_opened= 0
  default_quantity_unit_purchase = new Quantityunit();
  quantity_unit_stock = new Quantityunit();
  last_price= 0
  avg_price= 0
  oldest_price= 0
  last_shopping_location_id= 0
  next_due_date= ''
  location = new Location();
  average_shelf_life_days = -1;
  spoil_rate_percent = 0;
  error_message= ''
}
