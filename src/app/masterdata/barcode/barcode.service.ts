import {Injectable} from '@angular/core';
import {EntityService} from "../../shared/entity-service";
import {HttpClient} from "@angular/common/http";
import {Location} from "../../domain/location";
import {ProductBarcode} from "../../domain/product-barcode";
import {Observable} from "rxjs";
import {AlertService} from "../../shared/alert-service";

@Injectable({
  providedIn: 'root'
})
export class BarcodeService extends EntityService<ProductBarcode>{

  constructor(http: HttpClient, alertService: AlertService) {
    super(http, "product_barcodes", alertService);
  }

  getByProductId(productId: number): Observable<ProductBarcode[]> {
    return this.http.get<ProductBarcode[]>(this.getUrl() + "&query[]=product_id%3D" + productId);
  }
}
