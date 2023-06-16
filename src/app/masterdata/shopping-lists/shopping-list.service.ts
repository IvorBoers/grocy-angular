import {Injectable} from '@angular/core';
import {Product} from "../../domain/product";
import {EntityService} from "../../shared/entity-service";
import {HttpClient} from "@angular/common/http";
import {Recipe} from "../../domain/recipe";
import {AlertService} from "../../shared/alert-service";
import {ShoppingList} from '../../domain/shopping-list';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService extends EntityService<ShoppingList>{

  constructor(http: HttpClient, alertService: AlertService) {
    super(http, "shopping_lists", alertService);
  }

}
