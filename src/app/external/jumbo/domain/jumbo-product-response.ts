import {ProductData} from "./product-data";

export interface JumboProductResponse {
  product: ProductHolder;
}

export interface ProductHolder {
  data: ProductData;
}
