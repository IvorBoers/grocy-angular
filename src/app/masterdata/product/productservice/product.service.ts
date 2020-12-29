import {Injectable} from '@angular/core';
import {Product} from "../../../domain/product";
import {EntityService} from "../../../shared/entity-service";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductService extends EntityService<Product>{

  constructor(http: HttpClient) {
    super(http);
  }

  entityApiName(): string {
    return "products";
  }
}
