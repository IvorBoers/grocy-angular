import {RecipeProvider} from './recipe-provider';
import {RecipeSummary} from '../domain/recipe-summary';
import {Observable} from 'rxjs';
import {RecipeService} from '../masterdata/recipe/recipe.service';
import {Recipe} from '../domain/recipe';
import {map} from 'rxjs/operators';
import {FilesService} from '../masterdata/files/files-service';
import {Injectable} from '@angular/core';
import {RecipeSummaryPage} from '../domain/recipe-summary-page';
import {Mealplan} from '../domain/mealplan';
import {MealplanSection} from '../domain/mealplan-section';

export class GrocySummary implements RecipeSummary {
  id: any;
  imageUrl= "";
  name= "";
  source= "GROCY";
  viewUrl= "";

  getRouterCommand(): string {
    return '/recipes/' + this.id;
  }

  getMealplan(day: string, mealplanSection: MealplanSection, mealplanServings: number): Mealplan {
    const mealplan = new Mealplan();
    mealplan.type = 'recipe';
    mealplan.day = day
    mealplan.note = ""
    mealplan.done = false
    mealplan.recipe_servings = mealplanServings;
    mealplan.recipe_id = this.id;
    if (mealplanSection) {
      mealplan.section_id = mealplanSection.id;
    }

    return mealplan;
  }

}

@Injectable({
  providedIn: 'root'
})
export class GrocyRecipeProvider implements RecipeProvider {

  constructor(protected recipeService: RecipeService, protected filesService: FilesService) {
  }

  getName(): string {
    return 'Grocy';
  }

  findById(id: any): Observable<GrocySummary> {
    return this.recipeService.getOne(id).pipe(map((item) => this.fromGrocyRecipe(item)))
  }

  searchRecipes(query: string, pageIndex: number, pageSize: number): Observable<RecipeSummaryPage> {
    console.log('searching grocy recipe query=' + query + ', pageIndex=' + pageIndex);
    let queryItems = ['type=normal'];
    if (query) {
      queryItems.push('description~' + query);
    }
    return this.recipeService.query(queryItems, pageSize, pageIndex * pageSize).pipe(map((items) => {
      return this.fromGrocy(items)
    }))
  }

  private fromGrocy(items: Recipe[]): RecipeSummaryPage {
    const summaries: RecipeSummary[] = [];
    items.map(it => {
      return this.fromGrocyRecipe(it);
    }).forEach(summary => summaries.push(summary));

    let result = new RecipeSummaryPage();
    result.items = summaries;
    result.total = 10000;
    // TODO offset and total
    return result;
  }

  private fromGrocyRecipe(it: Recipe) {
    let summary = new GrocySummary();
    summary.id = it.id;
    summary.name = it.name;
    if (it.picture_file_name) {
      summary.imageUrl = this.filesService.toFileUrl('recipepictures', it.picture_file_name);
    }
    return summary;
  }
}
