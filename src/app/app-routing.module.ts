import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ShoplistComponent} from "./masterdata/shop/shoplist/shoplist.component";
import {ShopdetailComponent} from "./masterdata/shop/shopdetail/shopdetail.component";
import {ProductlistComponent} from "./masterdata/product/productlist/productlist.component";
import {ProductdetailComponent} from "./masterdata/product/productdetail/productdetail.component";
import {QuantityunitlistComponent} from "./masterdata/quantityunit/quantityunitlist/quantityunitlist.component";
import {QuantityunitdetailComponent} from "./masterdata/quantityunit/quantityunitdetail/quantityunitdetail.component";


const routes: Routes = [
  {path: 'masterdata/shoppinglocations', component: ShoplistComponent },
  {path: 'masterdata/shoppinglocation/:id', component: ShopdetailComponent },
  {path: 'masterdata/quantityunits', component: QuantityunitlistComponent },
  {path: 'masterdata/quantityunit/:id', component: QuantityunitdetailComponent },
  {path: 'masterdata/products', component: ProductlistComponent },
  {path: 'masterdata/product/:id', component: ProductdetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
