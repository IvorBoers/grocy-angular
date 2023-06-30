import {AbstractGrocyService} from '../shared/abstract-grocy-service';
import {HttpClient} from '@angular/common/http';
import {AlertService} from '../shared/alert-service';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';

class ListId {
  list_id!: number;

  constructor(list_id: number) {
    this.list_id = list_id;
  }
}

@Injectable({
  providedIn: 'root'
})
export class ShoppinglistStockService extends AbstractGrocyService {

  constructor(http: HttpClient, alertService: AlertService) {
    super(http, 'stock/shoppinglist/add-missing-products', alertService);
  }

  addMissingStockToShoppingList(shoppingListId: number):Observable<any> {

    return this.http.post(this.getUrl(), new ListId(shoppingListId));
  }


}
