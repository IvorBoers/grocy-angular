import {UserfieldsService} from "./userfields-service";
import {ProductUserfields} from "../domain/product-userfields";
import {HttpClient} from "@angular/common/http";
import {Product} from "../domain/product";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class ProductUserfieldsService extends UserfieldsService<ProductUserfields> {

  protected constructor(http: HttpClient) {
    super(http, Product.entityName)
  }
}
