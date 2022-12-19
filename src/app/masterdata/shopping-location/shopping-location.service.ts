import {Injectable} from '@angular/core';
import {ShoppingLocation} from "../../domain/shopping-location";
import {EntityService} from "../../shared/entity-service"
import {HttpClient} from "@angular/common/http";
import {AlertService} from "../../shared/alert-service";

@Injectable({
  providedIn: 'root'
})
export class ShoppingLocationService extends EntityService<ShoppingLocation> {

  constructor(http: HttpClient, alertService: AlertService) {
    super(http, "shopping_locations", alertService);
  }

}
