import {Product} from "./product";
import {Location} from "./location";
import {ProductBarcode} from "./product-barcode";
import {Quantityunit} from "./quantityunit";

export class ProductDetailsResponse {
  product: Product;
  product_barcodes: ProductBarcode[] = [];
  last_purchased: string;
  last_used: string;
  stock_amount: number;
  stock_amount_opened: number;
  default_quantity_unit_purchase: Quantityunit;
  quantity_unit_stock: Quantityunit;
  last_price: number;
  avg_price: number;
  oldest_price: number;
  last_shopping_location_id: number;
  next_due_date: string;
  location: Location;
  average_shelf_life_days: -1;
  spoil_rate_percent: 0;
  error_message: string;
}
