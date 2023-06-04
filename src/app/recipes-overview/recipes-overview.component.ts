import {Component, OnInit, ViewChild} from '@angular/core';
import {RecipeSummary} from '../domain/recipe-summary';
import {GrocyRecipeProvider} from './grocy-recipe-provider';
import {JumboRecipeProvider} from './jumbo-recipe-provider';
import {RecipeProvider} from './recipe-provider';
import {MatPaginator, PageEvent} from '@angular/material/paginator';
import {MealplanService} from '../masterdata/mealplan/mealplan.service';
import {Mealplan} from '../domain/mealplan';
import {Router} from '@angular/router';

@Component({
  selector: 'app-recipes-overview',
  templateUrl: './recipes-overview.component.html',
  styleUrls: ['./recipes-overview.component.scss']
})
export class RecipesOverviewComponent implements OnInit {

  query = '';
  pageSize = 10
  pageSizeOptions = [10, 20, 50, 100];
  pageIndex = 0;
  results: RecipeSummary[] = [];
  selectedProvider: RecipeProvider;
  providers: RecipeProvider[] = []
  @ViewChild(MatPaginator) paginator?: MatPaginator;
  futureMealplans: Mealplan[] = [];

  constructor(protected grocyRecipeProvider: GrocyRecipeProvider, protected jumboRecipeProvider: JumboRecipeProvider, private mealplanService: MealplanService, protected router: Router) {
    this.providers.push(grocyRecipeProvider);
    this.providers.push(jumboRecipeProvider);
    this.selectedProvider = grocyRecipeProvider;
  }

  ngOnInit() {
    this.mealplanService.getAllFuture().subscribe(result => this.futureMealplans = result);
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

  navigateTo(recipe: RecipeSummary) {
   this.router.navigate([ recipe.getRouterCommand() ]);
  }

  handlePageEvent($event: PageEvent) {
    this.pageIndex = $event.pageIndex;
    this.performSearch();
  }

  getNextScheduleDay(recipe: RecipeSummary): string {
    let mealplan = this.futureMealplans.find(mp => mp.recipe_id === Number(recipe.id));
    if (mealplan) {
      return mealplan.day;
    }
    return '';
  }
}
