import { Component } from '@angular/core';
import {Location} from "../../../domain/location";
import {ActivatedRoute} from "@angular/router";
import {LocationService} from "../location.service";
import {AbstractDetailComponent} from "../../../shared/abstract-detail-component";
import {AlertService} from "../../../shared/alert-service";

@Component({
  selector: 'app-location-detail',
  templateUrl: './location-detail.component.html',
  styleUrls: ['./location-detail.component.scss']
})
export class LocationDetailComponent extends AbstractDetailComponent<Location> {

  constructor(route: ActivatedRoute, service: LocationService, alertService: AlertService) {
    super(route, service, alertService)
  }

  getEntityName(): string {
    return "location";
  }

}
