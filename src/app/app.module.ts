import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductListComponent } from './masterdata/product/list/product-list.component';
import { ProductDetailComponent } from './masterdata/product/detail/product-detail.component';
import { LocationListComponent } from './masterdata/location/list/location-list.component';
import { LocationDetailComponent } from './masterdata/location/detail/location-detail.component';
import { QuantityunitListComponent } from './masterdata/quantityunit/list/quantityunit-list.component';
import { QuantityunitDetailComponent } from './masterdata/quantityunit/detail/quantityunit-detail.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatListModule} from "@angular/material/list";
import {HttpClientModule} from "@angular/common/http";
import {MatIconModule} from "@angular/material/icon";
import {FormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSortModule} from "@angular/material/sort";
import {StockLocationDetailComponent} from "./masterdata/stock-location/detail/stock-location-detail.component";
import {StockLocationListComponent} from "./masterdata/stock-location/list/stock-location-list.component";
import {ShoppingLocationListComponent} from "./masterdata/shopping-location/list/shopping-location-list.component";
import {ShoppingLocationDetailComponent} from "./masterdata/shopping-location/detail/shopping-location-detail.component";
import {BarcodeScannerLivestreamModule} from "ngx-barcode-scanner";
import { BarcodescannerComponent } from './barcodescanner/barcodescanner.component';
import {MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule} from "@angular/material/dialog";
import { BarcodedialogComponent } from './barcodedialog/barcodedialog.component';
import {MatMenuModule} from "@angular/material/menu";

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductDetailComponent,
    LocationListComponent,
    LocationDetailComponent,
    ShoppingLocationListComponent,
    ShoppingLocationDetailComponent,
    QuantityunitListComponent,
    QuantityunitDetailComponent,
    StockLocationDetailComponent,
    StockLocationListComponent,
    BarcodescannerComponent,
    BarcodedialogComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BarcodeScannerLivestreamModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    MatMenuModule
  ],
  providers: [
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
