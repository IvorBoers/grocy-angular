import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductlistComponent } from './masterdata/product/productlist/productlist.component';
import { ProductdetailComponent } from './masterdata/product/productdetail/productdetail.component';
import { LocationlistComponent } from './masterdata/location/locationlist/locationlist.component';
import { LocationdetailComponent } from './masterdata/location/locationdetail/locationdetail.component';
import { ShoplistComponent } from './masterdata/shop/shoplist/shoplist.component';
import { ShopdetailComponent } from './masterdata/shop/shopdetail/shopdetail.component';
import { QuantityunitlistComponent } from './masterdata/quantityunit/quantityunitlist/quantityunitlist.component';
import { QuantityunitdetailComponent } from './masterdata/quantityunit/quantityunitdetail/quantityunitdetail.component';
import { ProductgrouplistComponent } from './masterdata/productgroup/productgrouplist/productgrouplist.component';
import { ProductgroupdetailComponent } from './masterdata/productgroup/productgroupdetail/productgroupdetail.component';
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

@NgModule({
  declarations: [
    AppComponent,
    ProductlistComponent,
    ProductdetailComponent,
    LocationlistComponent,
    LocationdetailComponent,
    ShoplistComponent,
    ShopdetailComponent,
    QuantityunitlistComponent,
    QuantityunitdetailComponent,
    ProductgrouplistComponent,
    ProductgroupdetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
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
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
