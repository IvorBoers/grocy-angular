import {BrowserModule} from '@angular/platform-browser';
import {NgModule, isDevMode} from '@angular/core';

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
import {DatePipe, NgOptimizedImage} from "@angular/common";
import { ProductPickerFormComponent } from './product-picker-form/product-picker-form.component';
import { NoteMealplanItemComponent } from './masterdata/mealplan/mealplan-day/mealplan-item/note-mealplan-item/note-mealplan-item.component';
import {JumboidSetterComponent} from "./external/jumbo/jumboid-setter/jumboid-setter.component";
import { RecipeMealplanItemComponent } from './masterdata/mealplan/mealplan-day/mealplan-item/recipe-mealplan-item/recipe-mealplan-item.component';
import { ProductMealplanItemComponent } from './masterdata/mealplan/mealplan-day/mealplan-item/product-mealplan-item/product-mealplan-item.component';
import { RecipeDetailViewComponent } from './masterdata/recipe/recipe-detail-view/recipe-detail-view.component';
import { RecipeDetailEditComponent } from './masterdata/recipe/recipe-detail-edit/recipe-detail-edit.component';
import { GrocyImagePipe } from './shared/grocy-image-pipe.pipe';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {DragDropModule} from "@angular/cdk/drag-drop";
import {MealplanSectionListComponent} from "./masterdata/mealplan-section/list/mealplan-section-list.component";
import {MealplanSectionDetailComponent} from "./masterdata/mealplan-section/detail/mealplan-section-detail.component";
import {
  IngredientViewListComponent
} from "./masterdata/recipe/recipe-detail-view/ingredient-view-list/ingredient-view-list.component";
import {
  IngredientItemViewComponent
} from "./masterdata/recipe/recipe-detail-view/ingredient-view-list/ingredient-item-view/ingredient-item-view.component";
import { RecipesOverviewComponent } from './recipes-overview/recipes-overview.component';
import { JumboRecipeDetailpageComponent } from './external/jumbo/jumbo-recipe-detailpage/jumbo-recipe-detailpage.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { RecipeOverviewItemComponent } from './recipes-overview/recipe-overview-item/recipe-overview-item.component';
import { ShoppingListOverviewComponent } from './shopping-list-overview/shopping-list-overview.component';
import { ShoppingListsComponent } from './masterdata/shopping-lists/shopping-lists.component';
import { ShoppingListsItemComponent } from './masterdata/shopping-lists/shopping-lists-item/shopping-lists-item.component';
import { ShoppingListItemComponent } from './shopping-list-overview/shopping-list-item/shopping-list-item.component';
import { MealplanTodayComponent } from './home-page/mealplan-today/mealplan-today.component';
import { ServiceWorkerModule } from '@angular/service-worker';

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
    RecipeMealplanItemComponent,
    ProductMealplanItemComponent,
    RecipeDetailViewComponent,
    RecipeDetailEditComponent,
    GrocyImagePipe,
    MealplanSectionListComponent,
    MealplanSectionDetailComponent,
    IngredientViewListComponent,
    IngredientItemViewComponent,
    RecipesOverviewComponent,
    JumboRecipeDetailpageComponent,
    RecipeOverviewItemComponent,
    ShoppingListOverviewComponent,
    ShoppingListsComponent,
    ShoppingListsItemComponent,
    ShoppingListItemComponent,
    MealplanTodayComponent,

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
    MatCardModule,
    MatSidenavModule,
    MatCheckboxModule,
    DragDropModule,
    NgOptimizedImage,
    MatDatepickerModule,
    MatNativeDateModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [
      DatePipe,
      GrocyImagePipe,
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
