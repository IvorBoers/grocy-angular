import {Component} from '@angular/core';
import {AbstractEntityTableComponent} from "../../../shared/abstract-entity-table.component";
import {StockLocation} from "../../../domain/stock-location";
import {StockLocationService} from "../stock-location.service";

@Component({
  selector: 'app-stock-location-list',
  templateUrl: './stock-location-list.component.html',
  styleUrls: ['./stock-location-list.component.scss']
})
export class StockLocationListComponent extends AbstractEntityTableComponent<StockLocation> {

  constructor(locationService: StockLocationService) {
    super(locationService);
    this.setDisplayedColumns(['location_name', 'amount']);
  }
}
