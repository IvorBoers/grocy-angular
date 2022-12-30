import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
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
import {ProductgroupDetailComponent} from "./masterdata/productgroup/detail/productgroup-detail.component";
import {ProductgroupListComponent} from "./masterdata/productgroup/list/productgroup-list.component";
import {MasterDataComponent} from "./masterdata/master-data.component";
import {HomePageComponent} from "./home-page/home-page.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {JumboRecipesComponent} from "./external/jumbo/jumbo-recipes/jumbo-recipes.component";
import {MealplanComponent} from "./masterdata/mealplan/mealplan.component";
import {JumboidSetterComponent} from "./external/jumbo/jumboid-setter/jumboid-setter.component";


const routes: Routes = [
  {path: 'masterdata', component: MasterDataComponent },
  {path: 'masterdata/locations', component: LocationListComponent },
  {path: 'masterdata/location/:id', component: LocationDetailComponent },
  {path: 'masterdata/stocklocations', component: StockLocationListComponent },
  {path: 'masterdata/stocklocation/:id', component: StockLocationDetailComponent },
  {path: 'masterdata/shoppinglocations', component: ShoppingLocationListComponent },
  {path: 'masterdata/shoppinglocation/:id', component: ShoppingLocationDetailComponent },
  {path: 'masterdata/quantityunits', component: QuantityunitListComponent },
  {path: 'masterdata/quantityunit/:id', component: QuantityunitDetailComponent },
  {path: 'masterdata/products', component: ProductListComponent },
  {path: 'masterdata/products/:id', component: ProductDetailComponent},
  {path: 'masterdata/productgroups', component: ProductgroupListComponent },
  {path: 'masterdata/productgroups/:id', component: ProductgroupDetailComponent},
  {path: 'mealplan', component: MealplanComponent},
  {path: 'jumbo/maintenance', component: JumboidSetterComponent},
  {path: 'jumbo/recipes', component: JumboRecipesComponent},
  {path: '', component: HomePageComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
