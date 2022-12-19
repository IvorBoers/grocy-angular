import {Injectable} from '@angular/core';
import {Product} from "../../domain/product";
import {EntityService} from "../../shared/entity-service";
import {HttpClient} from "@angular/common/http";
import {AlertService} from "../../shared/alert-service";

@Injectable({
  providedIn: 'root'
})
export class ProductService extends EntityService<Product>{

  constructor(http: HttpClient, alertService: AlertService) {
    super(http, Product.entityName, alertService);
  }

}
