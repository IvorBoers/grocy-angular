import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {BarcodeScannerLivestreamComponent} from "ngx-barcode-scanner";
import {QuaggaJSResultObject} from "@ericblade/quagga2";
import {BarcodeScan} from "../domain/BarcodeScan";
import {StockByBarcodeService} from "../stock-by-barcode/stock-by-barcode.service";
import {ProductDetailsResponse} from "../domain/product-details-response";
import {catchError} from "rxjs/operators";
import {Observable, of} from "rxjs";

@Component({
  selector: 'app-barcodescanner',
  templateUrl: './barcodescanner.component.html',
  styleUrls: ['./barcodescanner.component.scss']
})
export class BarcodescannerComponent implements OnInit, AfterViewInit {
  @ViewChild(BarcodeScannerLivestreamComponent) barcodeScanner: BarcodeScannerLivestreamComponent;

  barcodeScan = new BarcodeScan();
  productDetailsResponse: ProductDetailsResponse;
  errorMessage: string;
  stock$: Observable<ProductDetailsResponse>;

  constructor(private stockByBarcodeService: StockByBarcodeService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.barcodeScanner.start().then(r => {
      console.log("Started " + r)
    });
  }

  onValueChanges(result: QuaggaJSResultObject) {
    console.log("Value changes to " + result.codeResult.code)
    if (this.barcodeScan.add(result.codeResult.code)) {
      this.stock$ = this.stockByBarcodeService
        .getStock(this.barcodeScan.currentCode)
        .pipe(
          catchError(error => {
            this.errorMessage = error;
            return of(null);
          })
        );
    }

  }

  onStarted(started) {
    console.log(started);
  }
}
