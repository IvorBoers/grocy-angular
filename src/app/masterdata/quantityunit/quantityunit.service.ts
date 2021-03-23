import {Injectable} from '@angular/core';
import {EntityService} from "../../shared/entity-service";
import {HttpClient} from "@angular/common/http";
import {Quantityunit} from "../../domain/quantityunit";

@Injectable({
  providedIn: 'root'
})
export class QuantityunitService extends EntityService<Quantityunit>{

  constructor(http: HttpClient) {
    super(http, "quantity_units");
  }

}
