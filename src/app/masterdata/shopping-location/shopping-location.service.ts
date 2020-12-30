import {Injectable} from '@angular/core';
import {ShoppingLocation} from "../../domain/shopping-location";
import {EntityService} from "../../shared/entity-service"
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ShoppingLocationService extends EntityService<ShoppingLocation> {

  constructor(http: HttpClient) {
    super(http);
  }

  entityApiName(): string {
    return "shopping_locations";
  }
}
