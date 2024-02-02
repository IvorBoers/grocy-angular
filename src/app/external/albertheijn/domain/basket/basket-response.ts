export interface BasketResponse {
  products: Product[]
  list: List[]
  order: any
  isClosed: boolean
  summary: Summary
  failed: any[]
}

export interface Product {
  quantity: number
  id: number
}

export interface List {
  id: number
  quantity: number
  originCode: string
}

export interface Summary {
  quantity: number
  totalPrice: TotalPrice
}

export interface TotalPrice {
  discount: number
  priceBeforeDiscount: number
  totalPrice: number
}
