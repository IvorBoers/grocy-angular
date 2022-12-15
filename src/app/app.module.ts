import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ProductListComponent} from './masterdata/product/list/product-list.component';
import {ProductDetailComponent} from './masterdata/product/detail/product-detail.component';
import {LocationListComponent} from './masterdata/location/list/location-list.component';
import {LocationDetailComponent} from './masterdata/location/detail/location-detail.component';
import {QuantityunitListComponent} from './masterdata/quantityunit/list/quantityunit-list.component';
import {QuantityunitDetailComponent} from './masterdata/quantityunit/detail/quantityunit-detail.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatLegacyButtonModule as MatButtonModule} from "@angular/material/legacy-button";
import {MatLegacyListModule as MatListModule} from "@angular/material/legacy-list";
import {HttpClientModule} from "@angular/common/http";
import {MatIconModule} from "@angular/material/icon";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatLegacyFormFieldModule as MatFormFieldModule} from "@angular/material/legacy-form-field";
import {MatLegacyInputModule as MatInputModule} from "@angular/material/legacy-input";
import {MatLegacySnackBarModule as MatSnackBarModule} from "@angular/material/legacy-snack-bar";
import {MatLegacyTableModule as MatTableModule} from "@angular/material/legacy-table";
import {MatLegacyPaginatorModule as MatPaginatorModule} from "@angular/material/legacy-paginator";
import {MatSortModule} from "@angular/material/sort";
import {StockLocationDetailComponent} from "./masterdata/stock-location/detail/stock-location-detail.component";
import {StockLocationListComponent} from "./masterdata/stock-location/list/stock-location-list.component";
import {ShoppingLocationListComponent} from "./masterdata/shopping-location/list/shopping-location-list.component";
import {ShoppingLocationDetailComponent} from "./masterdata/shopping-location/detail/shopping-location-detail.component";
import {BarcodeScannerLivestreamModule} from "ngx-barcode-scanner";
import {BarcodescannerComponent} from './barcodescanner/barcodescanner.component';
import {MAT_LEGACY_DIALOG_DEFAULT_OPTIONS as MAT_DIALOG_DEFAULT_OPTIONS, MatLegacyDialogModule as MatDialogModule} from "@angular/material/legacy-dialog";
import {BarcodedialogComponent} from './barcodedialog/barcodedialog.component';
import {MatLegacyMenuModule as MatMenuModule} from "@angular/material/legacy-menu";
import {MatLegacySelectModule as MatSelectModule} from "@angular/material/legacy-select";
import {ProductgroupDetailComponent} from "./masterdata/productgroup/detail/productgroup-detail.component";
import {ProductgroupListComponent} from "./masterdata/productgroup/list/productgroup-list.component";
import {JumboProductComponent} from './external/jumbo/jumbo-product/jumbo-product.component';
import {MatLegacyTabsModule as MatTabsModule} from "@angular/material/legacy-tabs";
import {MasterDataComponent} from './masterdata/master-data.component';
import {HomePageComponent} from './home-page/home-page.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {JumboRecipesComponent} from './external/jumbo/jumbo-recipes/jumbo-recipes.component';
import {JumboRecipeSummaryComponent} from './external/jumbo/jumbo-recipe-summary/jumbo-recipe-summary.component';
import {MatGridListModule} from "@angular/material/grid-list";
import {JumboRecipeDetailComponent} from './external/jumbo/jumbo-recipe-detail/jumbo-recipe-detail.component';
import {JumboRecipeProductComponent} from './external/jumbo/jumbo-recipe-product/jumbo-recipe-product.component';
import {JumboidSetterComponent} from './home-page/jumboid-setter/jumboid-setter.component';
import {
  GrocyProductTablecellComponent
} from './external/jumbo/jumbo-recipe-detail/grocy-product-tablecell/grocy-product-tablecell.component';
import {MatLegacyAutocompleteModule as MatAutocompleteModule} from "@angular/material/legacy-autocomplete";
import {MatLegacyProgressSpinnerModule as MatProgressSpinnerModule} from "@angular/material/legacy-progress-spinner";

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductDetailComponent,
    ProductgroupListComponent,
    ProductgroupDetailComponent,
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
    JumboProductComponent,
    MasterDataComponent,
    HomePageComponent,
    PageNotFoundComponent,
    JumboRecipesComponent,
    JumboRecipeSummaryComponent,
    JumboRecipeDetailComponent,
    JumboRecipeProductComponent,
    JumboidSetterComponent,
    GrocyProductTablecellComponent,

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
    MatMenuModule,
    MatSelectModule,
    MatTabsModule,
    MatGridListModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule
  ],
  providers: [
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
