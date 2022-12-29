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
import {MatButtonModule} from "@angular/material/button";
import {MatListModule} from "@angular/material/list";
import {HttpClientModule} from "@angular/common/http";
import {MatIconModule} from "@angular/material/icon";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
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
import {BarcodescannerComponent} from './barcodescanner/barcodescanner.component';
import {MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule} from "@angular/material/dialog";
import {BarcodeDialogComponent} from './barcodedialog/barcode-dialog.component';
import {MatMenuModule} from "@angular/material/menu";
import {MatSelectModule} from "@angular/material/select";
import {ProductgroupDetailComponent} from "./masterdata/productgroup/detail/productgroup-detail.component";
import {ProductgroupListComponent} from "./masterdata/productgroup/list/productgroup-list.component";
import {JumboProductComponent} from './external/jumbo/jumbo-product/jumbo-product.component';
import {MatTabsModule} from "@angular/material/tabs";
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
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import { ApiSettingsDialogComponent } from './api-settings-dialog/api-settings-dialog.component';
import { AlertComponent } from './shared/alert/alert.component';
import { SystemStatusComponent } from './system/system-info/system-status.component';
import {MatTooltipModule} from "@angular/material/tooltip";
import { MealplanComponent } from './masterdata/mealplan/mealplan.component';
import {MatCardModule} from "@angular/material/card";
import { MealplanDayComponent } from './masterdata/mealplan/mealplan-day/mealplan-day.component';
import { MealplanItemComponent } from './masterdata/mealplan/mealplan-day/mealplan-item/mealplan-item.component';
import {DatePipe} from "@angular/common";
import { ProductPickerFormComponent } from './product-picker-form/product-picker-form.component';
import { NoteMealplanItemComponent } from './masterdata/mealplan/mealplan-day/mealplan-item/note-mealplan-item/note-mealplan-item.component';

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
    BarcodeDialogComponent,
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
    ApiSettingsDialogComponent,
    AlertComponent,
    SystemStatusComponent,
    MealplanComponent,
    MealplanDayComponent,
    MealplanItemComponent,
    ProductPickerFormComponent,
    NoteMealplanItemComponent,

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
        MatProgressSpinnerModule,
        MatTooltipModule,
        MatCardModule
    ],
  providers: [
      DatePipe,
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
