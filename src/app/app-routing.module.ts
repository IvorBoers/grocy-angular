import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductListComponent} from "./masterdata/product/list/product-list.component";
import {ProductDetailComponent} from "./masterdata/product/detail/product-detail.component";
import {QuantityunitListComponent} from "./masterdata/quantityunit/list/quantityunit-list.component";
import {QuantityunitDetailComponent} from "./masterdata/quantityunit/detail/quantityunit-detail.component";
import {LocationListComponent} from "./masterdata/location/list/location-list.component";
import {LocationDetailComponent} from "./masterdata/location/detail/location-detail.component";
import {StockLocationDetailComponent} from "./masterdata/stock-location/detail/stock-location-detail.component";
import {StockLocationListComponent} from "./masterdata/stock-location/list/stock-location-list.component";
import {ShoppingLocationListComponent} from "./masterdata/shopping-location/list/shopping-location-list.component";
import {ShoppingLocationDetailComponent} from "./masterdata/shopping-location/detail/shopping-location-detail.component";


const routes: Routes = [
  {path: 'masterdata/locations', component: LocationListComponent },
  {path: 'masterdata/location/:id', component: LocationDetailComponent },
  {path: 'masterdata/stocklocations', component: StockLocationListComponent },
  {path: 'masterdata/stocklocation/:id', component: StockLocationDetailComponent },
  {path: 'masterdata/shoppinglocations', component: ShoppingLocationListComponent },
  {path: 'masterdata/shoppinglocation/:id', component: ShoppingLocationDetailComponent },
  {path: 'masterdata/quantityunits', component: QuantityunitListComponent },
  {path: 'masterdata/quantityunit/:id', component: QuantityunitDetailComponent },
  {path: 'masterdata/products', component: ProductListComponent },
  {path: 'masterdata/product/:id', component: ProductDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
