import {RecipeProvider} from './recipe-provider';
import {RecipeSummary} from '../domain/recipe-summary';
import {Observable} from 'rxjs';
import {JumboService} from '../external/jumbo/jumbo-service';
import {map} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {RecipeSummaryPage} from '../domain/recipe-summary-page';
import {JumboRecipesSearchResponse} from '../external/jumbo/domain/jumbo-recipe-searchresponse';
import {MealplanSection} from '../domain/mealplan-section';
import {Mealplan} from '../domain/mealplan';

class JumboRecipeSummary implements RecipeSummary {
  id: any;
  imageUrl= "";
  name= "";
  source= "JUMBO";
  viewUrl= "";

  getRouterCommand(): string {
    return '/recipes/jumbo/' + this.id;
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
export class JumboRecipeProvider implements RecipeProvider {

  constructor(protected jumboService: JumboService) {
  }
  getName(): string {
    return 'Jumbo';
  }

  searchRecipes(query: string, pageIndex: number, pageSize: number): Observable<RecipeSummaryPage> {
    return this.jumboService.searchRecipes(pageIndex*pageSize, pageSize, query)
      .pipe(map((items) => {
      return this.fromJumbo(items);
    }));
  }

  private fromJumbo(response: JumboRecipesSearchResponse): RecipeSummaryPage {
    const summaries: RecipeSummary[] = [];
    response.recipes.data.map(it => {
      let summary = new JumboRecipeSummary();
      summary.id = it.id;
      summary.name = it.name;
      summary.viewUrl = it.webUrl;
      if (it.imageInfo && it.imageInfo.primaryView.length > 0 && it.imageInfo.primaryView[0].url) {
        summary.imageUrl = it.imageInfo.primaryView[0].url;
      }
      return summary;
    }).forEach(summary => summaries.push(summary));

    let page = new RecipeSummaryPage();
    page.items = summaries;
    page.offset = response.recipes.offset;
    page.total = response.recipes.total;
    return page;
  }

  findById(id: any): Observable<JumboRecipeSummary> {
    return this.jumboService.getRecipe(id).pipe(map(item =>  {
      const data = item.recipe.data;
      let summary = new JumboRecipeSummary();
      summary.id = data.id;
      summary.name = data.name;
      summary.viewUrl = data.webUrl;
      if (data.imageInfo && data.imageInfo.primaryView.length > 0 && data.imageInfo.primaryView[0].url) {
        summary.imageUrl = data.imageInfo.primaryView[0].url;
      }
      return summary;
    }));
  }

}
