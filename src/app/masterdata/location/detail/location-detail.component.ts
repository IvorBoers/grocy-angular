import { Component } from '@angular/core';
import {Location} from "../../../domain/location";
import {ActivatedRoute} from "@angular/router";
import {LocationService} from "../location.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {AbstractDetailComponent} from "../../../shared/abstract-detail-component";

@Component({
  selector: 'app-location-detail',
  templateUrl: './location-detail.component.html',
  styleUrls: ['./location-detail.component.scss']
})
export class LocationDetailComponent extends AbstractDetailComponent<Location> {

  constructor(route: ActivatedRoute, _snackBar: MatSnackBar, service: LocationService) {
    super(route, _snackBar, service)
  }

  getEntityName(): string {
    return "location";
  }

}
