import {Component} from '@angular/core';
import {AbstractDetailComponent} from "../../../shared/abstract-detail-component";
import {StockLocation} from "../../../domain/stock-location";
import {ActivatedRoute} from "@angular/router";
import {StockLocationService} from "../stock-location.service";
import {AlertService} from "../../../shared/alert-service";

@Component({
  selector: 'app-stock-location-detail',
  templateUrl: './stock-location-detail.component.html',
  styleUrls: ['./stock-location-detail.component.scss']
})
export class StockLocationDetailComponent extends AbstractDetailComponent<StockLocation>{

  constructor(route: ActivatedRoute, service: StockLocationService, alertService: AlertService) {
    super(route, service, alertService)
  }

  getEntityName(): string {
    return "stocklocation";
  }

  createNewEntity(): StockLocation {
    return new StockLocation();
  }

}
