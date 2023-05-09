import {RecipeProvider} from './recipe-provider';
import {RecipeSummary} from '../domain/recipe-summary';
import {Observable} from 'rxjs';
import {JumboService} from '../external/jumbo/jumbo-service';
import {Router} from '@angular/router';
import {map} from 'rxjs/operators';
import {JumboRecipeSummary} from '../external/jumbo/domain/jumbo-recipe-summary';
import {Injectable} from '@angular/core';
import {RecipeSummaryPage} from '../domain/recipe-summary-page';
import {JumboRecipesSearchResponse} from '../external/jumbo/domain/jumbo-recipe-searchresponse';

@Injectable({
  providedIn: 'root'
})
export class JumboRecipeProvider implements RecipeProvider {

  constructor(protected jumboService: JumboService, protected router: Router) {
  }
  getName(): string {
    return 'Jumbo';
  }

  navigateTo(recipe: RecipeSummary): void {
    this.router.navigate(['/recipe/jumbo/' + recipe.id]);
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
      let summary = new RecipeSummary();
      summary.source = 'GROCY';
      summary.id = it.id;
      summary.name = it.name;
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
}
