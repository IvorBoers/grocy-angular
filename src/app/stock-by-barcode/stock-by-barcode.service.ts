import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {ProductDetailsResponse} from "../domain/product-details-response";
import {AbstractGrocyService} from "../shared/abstract-grocy-service";
import {catchError} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class StockByBarcodeService extends AbstractGrocyService {

  constructor(http: HttpClient) {
    super(http, 'stock/products/by-barcode');
  }

  getStock(barcode: string): Observable<ProductDetailsResponse> {
    return this.http.get<ProductDetailsResponse>(this.getUrl("/" + barcode)).pipe(
      catchError(this.handleError)
    );
  }
}
