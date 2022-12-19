import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {ProductDetailsResponse} from "../domain/product-details-response";
import {AbstractGrocyService} from "../shared/abstract-grocy-service";
import {catchError} from "rxjs/operators";
import {AlertService} from "../shared/alert-service";

@Injectable({
  providedIn: 'root'
})
export class StockByBarcodeService extends AbstractGrocyService {

  constructor(http: HttpClient, alertService: AlertService) {
    super(http, 'stock/products/by-barcode', alertService);
  }

  getStock(barcode: string): Observable<ProductDetailsResponse> {
    return this.http.get<ProductDetailsResponse>(this.getUrl("/" + barcode)).pipe(
      catchError(this.handleError)
    );
  }
}
