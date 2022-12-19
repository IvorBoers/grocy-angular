import {UserfieldsService} from "./userfields-service";
import {ProductUserfields} from "../domain/product-userfields";
import {HttpClient} from "@angular/common/http";
import {Product} from "../domain/product";
import {Injectable} from "@angular/core";
import {AlertService} from "./alert-service";

@Injectable({
  providedIn: 'root'
})
export class ProductUserfieldsService extends UserfieldsService<ProductUserfields> {

  protected constructor(http: HttpClient, alertService: AlertService) {
    super(http, Product.entityName, alertService)
  }
}
