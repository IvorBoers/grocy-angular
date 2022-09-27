import {Advertisements} from "./advertisements";
import {ProductData} from "./product-data";

export interface JumboSearchResponse {
  products:          Products;
  filters:           Advertisements;
  horizontalFilters: Advertisements;
  sortOptions:       SortOptions;
  productLists:      Advertisements;
  advertisements:    Advertisements;
}

export interface Products {
  data:   ProductData[];
  total:  number;
  offset: number;
}

export interface SortOptions {
  data: SortOptionsDatum[];
}

export interface SortOptionsDatum {
  title: string;
  sort:  string;
}
