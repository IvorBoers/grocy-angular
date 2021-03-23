import {Component} from '@angular/core';
import {AbstractDetailComponent} from "../../../shared/abstract-detail-component";
import {StockLocation} from "../../../domain/stock-location";
import {ActivatedRoute} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {StockLocationService} from "../stock-location.service";

@Component({
  selector: 'app-stock-location-detail',
  templateUrl: './stock-location-detail.component.html',
  styleUrls: ['./stock-location-detail.component.scss']
})
export class StockLocationDetailComponent extends AbstractDetailComponent<StockLocation>{

  constructor(route: ActivatedRoute, _snackBar: MatSnackBar, service: StockLocationService) {
    super(route, _snackBar, service)
  }

  getEntityName(): string {
    return "stocklocation";
  }

}
