import {Injectable} from '@angular/core';
import {EntityService} from "../../shared/entity-service";
import {HttpClient} from "@angular/common/http";
import {StockLocation} from "../../domain/stock-location";

@Injectable({
  providedIn: 'root'
})
export class StockLocationService extends EntityService<StockLocation>{

  constructor(http: HttpClient) {
    super(http);
  }

  entityApiName(): string {
    return "stock_current_locations";
  }
}
