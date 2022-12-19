import {Injectable} from '@angular/core';
import {EntityService} from "../../shared/entity-service";
import {HttpClient} from "@angular/common/http";
import {StockLocation} from "../../domain/stock-location";
import {AlertService} from "../../shared/alert-service";

@Injectable({
  providedIn: 'root'
})
export class StockLocationService extends EntityService<StockLocation>{

  constructor(http: HttpClient, alertService: AlertService) {
    super(http, "stock_current_locations", alertService);
  }

}
