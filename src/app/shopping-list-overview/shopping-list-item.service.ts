import {Injectable} from '@angular/core';
import {EntityService} from "../shared/entity-service";
import {HttpClient} from "@angular/common/http";
import {AlertService} from "../shared/alert-service";
import {ShoppingListItem} from '../domain/shopping-list-item';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListItemService extends EntityService<ShoppingListItem>{

  constructor(http: HttpClient, alertService: AlertService) {
    super(http, "shopping_list", alertService);
  }

}
