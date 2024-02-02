import {Injectable} from '@angular/core';
import {RecipeProvider} from './recipe-provider';
import {Observable} from 'rxjs';
import {RecipeSummaryPage} from '../domain/recipe-summary-page';
import {RecipeSummary} from '../domain/recipe-summary';
import {MealplanSection} from '../domain/mealplan-section';
import {Mealplan} from '../domain/mealplan';
import {AhRecipeSearchParams} from '../external/albertheijn/domain/ah-recipe-search-params';
import {map} from 'rxjs/operators';
import {AhRecipeSummary} from '../external/albertheijn/domain/ah-recipe-summary';
import {ApolloQueryResult} from '@apollo/client/core';
import {AhRecipeService} from '../external/albertheijn/ah-recipe-service';


class AlbertHeijnRecipeSummary implements RecipeSummary {
  id: any;
  imageUrl = "";
  name = "";
  source = "AH";
  viewUrl = "";

  getRouterCommand(): string {
    return '/recipes/ah/' + this.id;
  }

  getMealplan(day: string, mealplanSection: MealplanSection, mealplanServings: number): Mealplan {
    const mealplan = new Mealplan();
    mealplan.type = 'note';
    mealplan.day = day;
    mealplan.note = '<a target="_blank" href="' + this.viewUrl + '">' + this.name + '</a>';
    mealplan.done = false;
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
export class AhRecipeProvider implements RecipeProvider {

  constructor(private ahRecipeService: AhRecipeService) {
  }

  searchRecipes(query: string, pageIndex: number, pageSize: number): Observable<RecipeSummaryPage> {
    const queryParams = new AhRecipeSearchParams();
    queryParams.searchText = query;
    queryParams.start = pageIndex * pageSize;

    return this.ahRecipeService.getRecipes(query, pageSize * pageIndex)
      .pipe(map((items) => {
        return this.fromAh(items);
      }));
  }

  getName(): string {
    return 'Albert Heijn';
  }

  private fromAh(queryResult: ApolloQueryResult<any>): RecipeSummaryPage {
    const page = new RecipeSummaryPage();
    const queryItems: AhRecipeSummary[] = queryResult.data.recipeSearch.result;

    page.items = queryItems.map(it => {
      let summary = new AlbertHeijnRecipeSummary();
      summary.id = it.id;
      summary.name = it.title;
      summary.source = 'Albert Heijn';
      const at = it.images.filter(i => i.rendition === 'D612X450').at(0);
      if (at) {
        summary.imageUrl = at.url
      }

      return summary;
    });
    return page;
  }
}
