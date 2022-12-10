import {Injectable} from '@angular/core';
import {EntityService} from "../../shared/entity-service";
import {HttpClient} from "@angular/common/http";
import {Quantityunit} from "../../domain/quantityunit";
import {QuantityunitConversion} from "../../domain/quantityunit-conversion";

@Injectable({
  providedIn: 'root'
})
export class QuantityunitConversionService extends EntityService<QuantityunitConversion>{

  constructor(http: HttpClient) {
    super(http, "quantity_unit_conversions");
  }

}
