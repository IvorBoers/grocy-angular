import {Component, ViewChild} from '@angular/core';
import {AbstractMealplanItemComponent} from "../abstract-mealplan-item.component";
import {RecipeService} from "../../../../recipe/recipe.service";
import {MealplanService} from "../../../mealplan.service";
import {AlertService} from "../../../../../shared/alert-service";
import {Recipe} from "../../../../../domain/recipe";
import {Observable} from "rxjs";
import {FormControl} from "@angular/forms";
import {map, startWith} from "rxjs/operators";
import {FilesService} from "../../../../files/files-service";
import {Named} from "../../../../../domain/entity";
import {GrocyImagePipe} from "../../../../../shared/grocy-image-pipe.pipe";
import {Router} from "@angular/router";
import {RecipeProvider} from '../../../../../recipes-overview/recipe-provider';
import {GrocyRecipeProvider} from '../../../../../recipes-overview/grocy-recipe-provider';
import {JumboRecipeProvider} from '../../../../../recipes-overview/jumbo-recipe-provider';
import {AhRecipeProvider} from '../../../../../recipes-overview/ah-recipe-provider';
import {RecipeSummary} from '../../../../../domain/recipe-summary';
import {MatPaginator} from '@angular/material/paginator';

@Component({
  selector: 'app-multi-recipe-mealplan-item',
  templateUrl: './multi-recipe-mealplan-item.component.html',
  styleUrls: ['./multi-recipe-mealplan-item.component.scss']
})
export class MultiRecipeMealplanItemComponent extends AbstractMealplanItemComponent {

  selectedProvider: RecipeProvider;
  providers: RecipeProvider[] = []
  pageIndex = 0;
  pageSize = 5
  query = '';
  results: RecipeSummary[] = [];
  @ViewChild(MatPaginator) paginator?: MatPaginator;

  recipe?: Recipe
  allRecipes: Recipe[] = []
  filteredRecipes?: Observable<Recipe[]>
  recipesControl = new FormControl<Recipe | undefined>(undefined)
  servingsControl = new FormControl<number>(1)
  busyAddingItemsToShoppingList = false

  constructor(protected grocyRecipeProvider: GrocyRecipeProvider, protected jumboRecipeProvider: JumboRecipeProvider,
              protected ahRecipeProvider: AhRecipeProvider, protected override mealplanService: MealplanService, protected override alertService: AlertService,
              protected recipeService: RecipeService,
              protected grocyImagePipe: GrocyImagePipe, protected router: Router) {
    super(mealplanService, alertService);
    this.providers.push(grocyRecipeProvider);
    this.providers.push(jumboRecipeProvider);
    this.providers.push(ahRecipeProvider);
    this.selectedProvider = grocyRecipeProvider;

  }

  override ngOnInit() {
    super.ngOnInit();
    if (this.mealplan && this.mealplan.recipe_id) {
      this.recipeService.getOne(this.mealplan.recipe_id).subscribe(response => {
        this.recipe = response
        this.recipesControl.setValue(response)
      })
    }
    this.filteredRecipes = this.recipesControl.valueChanges.pipe(
        startWith(''),
        map(value => {
          return value ? this._filterRecipes(value as string) : this.allRecipes.slice();
        }),
    )

  }

  override setEditMode(mode: boolean) {
    if (this.allRecipes.length == 0 && mode) {
      this.recipeService.getAllWhere("type", "normal").subscribe(response => {
        this.allRecipes = response
        super.setEditMode(mode);
      })
    } else {
      super.setEditMode(mode);
    }

  }

  private _filterRecipes(name: string): Recipe[] {
    const filterValue = name && name.length > 0 ? name.toLowerCase() : '';

    return this.allRecipes.filter(option => option.name.toLowerCase().includes(filterValue));
  }

  updateMealplanFields() {
    if (this.recipesControl.value) {
      this.mealplan.recipe_id = this.recipesControl.value.id
      if (this.servingsControl.value) {
        this.mealplan.recipe_servings = this.servingsControl.value
      } else {
        this.mealplan.recipe_servings = 1;
      }
    }
  }

  getFileUrl(picture_file_name: string | undefined | null) {
    if (picture_file_name)
      return this.grocyImagePipe.transform(picture_file_name, FilesService.group_recipepictures);
    return "";
  }

  displayFn(named: Named) {
    if (named) {
      return named.name;
    }
    return '';
  }

  showRecipe() {
    if (this.recipe)
      this.router.navigate(['/recipes/' + this.recipe.id])
  }

  addShoppingListItems() {
    if (this.recipe && this.recipe.id) {
      this.busyAddingItemsToShoppingList = true;
      this.recipeService.addMissingItemsToShoppingList(this.recipe.id)
        .subscribe(() => {
          this.alertService.success("Added items to shopping list")
          this.busyAddingItemsToShoppingList = false;
        });
    }
  }


  changeSource() {
    // clean results or search in other source
    this.searchRecipe();
  }

  searchRecipe() {
    this.pageIndex = 0;
    this.results = [];
    if (this.paginator) {
      this.paginator.length = 0;
      this.paginator.pageIndex = 0;
    }
    this.performSearch();
  }

  private performSearch() {
    this.selectedProvider.searchRecipes(this.query, this.pageIndex, this.pageSize)
      .subscribe(page => {
        this.results = page.items;
        if (this.paginator) {
          this.paginator.length = page.total
        }
      });
  }

  select(item: RecipeSummary) {
    console.log("selected recipe " + item.name);
  }
}
