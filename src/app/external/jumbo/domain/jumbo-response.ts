export interface JumboResponse {
  products:          Products;
  filters:           Advertisements;
  horizontalFilters: Advertisements;
  sortOptions:       SortOptions;
  productLists:      Advertisements;
  advertisements:    Advertisements;
}

export interface Advertisements {
  data: AdvertisementsDatum[];
}

export interface AdvertisementsDatum {
  position:        number;
  adUnitIdAndroid: string;
  adUnitIdiPhone:  string;
  adUnitIdiPad:    string;
}

export interface Products {
  data:   ProductsDatum[];
  total:  number;
  offset: number;
}

export interface ProductsDatum {
  id:               string;
  title:            string;
  quantityOptions:  QuantityOption[];
  prices:           Prices;
  available:        boolean;
  productType:      string;
  crossSellSKUList: any[];
  nixProduct:       boolean;
  quantity:         string;
  imageInfo:        ImageInfo;
  badgesToDisplay:  BadgesToDisplay;
  sample:           boolean;
  availability:     Availability;
}

export interface Availability {
  sku:          string;
  availability: string;
}

export interface BadgesToDisplay {
}

export interface ImageInfo {
  primaryView: PrimaryView[];
}

export interface PrimaryView {
  url:    string;
  height: number;
  width:  number;
}

export interface Prices {
  price:     Price;
  unitPrice: UnitPrice;
}

export interface Price {
  currency: string;
  amount:   number;
}

export interface UnitPrice {
  unit:  string;
  price: Price;
}

export interface QuantityOption {
  defaultAmount: number;
  minimumAmount: number;
  amountStep:    number;
  unit:          string;
  maximumAmount: number;
}

export interface SortOptions {
  data: SortOptionsDatum[];
}

export interface SortOptionsDatum {
  title: string;
  sort:  string;
}
