export interface Prices {
  price: Price;
  unitPrice: UnitPrice;
}

export interface Price {
  currency: string;
  amount: number;
}

export interface UnitPrice {
  unit: string;
  price: Price;
}
