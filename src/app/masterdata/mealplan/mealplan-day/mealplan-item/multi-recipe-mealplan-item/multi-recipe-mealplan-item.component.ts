import {Component, ViewChild} from '@angular/core';
import {AbstractMealplanItemComponent} from "../abstract-mealplan-item.component";
import {RecipeService} from "../../../../recipe/recipe.service";
import {MealplanService} from "../../../mealplan.service";
import {AlertService} from "../../../../../shared/alert-service";
import {FormControl} from "@angular/forms";
import {FilesService} from "../../../../files/files-service";
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
  selectedRecipeSummary?: RecipeSummary;
  editRecipeMode = true;
  @ViewChild(MatPaginator) paginator?: MatPaginator;

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
        console.log("grocy recipe_id", this.mealplan.recipe_id);
        // this is a grocy recipe
        this.selectedProvider = this.grocyRecipeProvider;
        this.selectedProvider.findById(this.mealplan.recipe_id).subscribe(response => {
            this.selectedRecipeSummary = response;
        });
    }
    if (this.mealplan && !this.mealplan.recipe_id && this.mealplan.note) {
        console.log("external recipe");
        var splittedNote = this.mealplan.note.split(":");
        if (splittedNote.length > 1) {
            if (splittedNote[0] == 'Albert Heijn') {
                this.selectedProvider = this.ahRecipeProvider;
            } else if (splittedNote[0] == 'Jumbo') {
                this.selectedProvider = this.jumboRecipeProvider;
            }
            this.selectedProvider.findById(splittedNote[1]).subscribe(response => {
                this.selectedRecipeSummary = response;
            });
        }
    }

  }

  updateMealplanFields() {
      if (this.selectedRecipeSummary) {
          if (this.selectedProvider.getName() === 'Grocy') {
              this.mealplan.type = 'recipe';
              this.mealplan.recipe_id = this.selectedRecipeSummary.id;
              if (this.servingsControl.value) {
                  this.mealplan.recipe_servings = this.servingsControl.value;
              } else {
                  this.mealplan.recipe_servings = 1;
              }
          }
          else {
              this.mealplan.type = 'external_recipe';
              this.mealplan.note = this.selectedProvider.getName() + ':' + this.selectedRecipeSummary.id; //'<a href="' + this.selectedRecipeSummary.viewUrl + ' target="_blank">' + this.selectedRecipeSummary.name + '</a>';
              if (this.servingsControl.value) {
                  this.mealplan.recipe_servings = this.servingsControl.value;
              } else {
                  this.mealplan.recipe_servings = 1;
              }
          }
      }
  }

  showRecipe() {
    if (this.selectedRecipeSummary)
            this.router.navigate([this.selectedRecipeSummary.getRouterCommand()])
  }

  addShoppingListItems() {
    if (this.selectedRecipeSummary && this.selectedRecipeSummary.id && this.mealplan.recipe_id) {
      this.busyAddingItemsToShoppingList = true;
      this.recipeService.addMissingItemsToShoppingList(this.selectedRecipeSummary.id)
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
      console.log("Searching for '"+ this.query + "' in " + this.selectedProvider.getName());
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
    this.selectedRecipeSummary = item;
    this.toggleEditRecipeMode();
  }

  toggleEditRecipeMode() {
    this.editRecipeMode = !this.editRecipeMode;
  }
}
