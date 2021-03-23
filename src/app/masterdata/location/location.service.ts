import {Injectable} from '@angular/core';
import {EntityService} from "../../shared/entity-service";
import {HttpClient} from "@angular/common/http";
import {Location} from "../../domain/location";

@Injectable({
  providedIn: 'root'
})
export class LocationService extends EntityService<Location>{

  constructor(http: HttpClient) {
    super(http, "locations");
  }

}
