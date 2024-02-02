import {gql} from 'apollo-angular';
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import * as http from 'http';
import {BasketResponse} from './domain/basket/basket-response';

const ADD_BASKET = gql`
  mutation basketItemsAdd($items: [BasketMutation!]!) {
  basketItemsAdd(items: $items) {
    result {
      ...basket
      __typename
    }
    status
    errorMessage
    __typename
  }
}

fragment basket on Basket {
  summary {
    orderId
    quantity
    isCancellable
    price {
      totalPrice {
        ...priceBasket
        __typename
      }
      discount {
        ...priceBasket
        __typename
      }
      priceBeforeDiscount {
        ...priceBasket
        __typename
      }
      priceAfterDiscount {
        ...priceBasket
        __typename
      }
      __typename
    }
    __typename
  }
  __typename
}

fragment priceBasket on Money {
  amount
  formatted
  __typename
}`;

const BASKET = gql`
query basket {
  basket {
    ...Basket
    __typename
  }
}

fragment Basket on Basket {
  summary {
    ...BasketSummary
    __typename
  }
  products {
    id
    __typename
  }
  itemsInOrder {
    id
    __typename
  }
  notes {
    description
    __typename
  }
  __typename
}

fragment BasketSummary on BasketSummary {
  price {
    priceBeforeDiscount {
      amount
      formatted
      __typename
    }
    priceAfterDiscount {
      amount
      formatted
      __typename
    }
    totalPrice {
      amount
      formatted
      __typename
    }
    discount {
      amount
      formatted
      __typename
    }
    __typename
  }
  quantity
  isCancellable
  shoppingType
  deliveryDate
  __typename
}`;

const baseUrl = 'https://www.ah.nl/common/api/basket/v2/';

class BasketItem {
  public productId!: number;
  public quantity!: number;
}
@Injectable({
  providedIn: 'root'
})
export class AhBasketService {

  constructor(private http: HttpClient) {
  }

  public addToBasket(items: BasketItem[]) {
    return this.http.post<BasketResponse>(baseUrl + "add", items)
  }


}
