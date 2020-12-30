import {Component} from '@angular/core';
import {AbstractEntityTableComponent} from "../../../shared/abstract-entity-table.component";
import {Location} from "../../../domain/location";
import {LocationService} from "../location.service";

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.scss']
})
export class LocationListComponent extends AbstractEntityTableComponent<Location> {

  constructor(locationService: LocationService) {
    super(locationService);
    this.setDisplayedColumns(['name', 'description']);
  }
}
