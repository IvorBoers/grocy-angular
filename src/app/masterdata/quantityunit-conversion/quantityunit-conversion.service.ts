import {Injectable} from '@angular/core';
import {EntityService} from "../../shared/entity-service";
import {HttpClient} from "@angular/common/http";
import {Quantityunit} from "../../domain/quantityunit";
import {QuantityunitConversion} from "../../domain/quantityunit-conversion";
import {AlertService} from "../../shared/alert-service";

@Injectable({
  providedIn: 'root'
})
export class QuantityunitConversionService extends EntityService<QuantityunitConversion>{

  constructor(http: HttpClient, alertService: AlertService) {
    super(http, "quantity_unit_conversions", alertService);
  }

}
