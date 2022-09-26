import {Injectable} from '@angular/core';
import {EntityService} from "../../shared/entity-service";
import {HttpClient} from "@angular/common/http";
import {Productgroup} from "../../domain/productgroup";

@Injectable({
  providedIn: 'root'
})
export class ProductgroupService extends EntityService<Productgroup>{

  constructor(http: HttpClient) {
    super(http, "product_groups");
  }

}
