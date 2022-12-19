import {Injectable} from '@angular/core';
import {EntityService} from "../../shared/entity-service";
import {HttpClient} from "@angular/common/http";
import {Productgroup} from "../../domain/productgroup";
import {AlertService} from "../../shared/alert-service";

@Injectable({
  providedIn: 'root'
})
export class ProductgroupService extends EntityService<Productgroup>{

  constructor(http: HttpClient, alertService: AlertService) {
    super(http, "product_groups", alertService);
  }

}
