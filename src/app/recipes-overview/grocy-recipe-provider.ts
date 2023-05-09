import {RecipeProvider} from './recipe-provider';
import {RecipeSummary} from '../domain/recipe-summary';
import {Observable} from 'rxjs';
import {RecipeService} from '../masterdata/recipe/recipe.service';
import {Router} from '@angular/router';
import {Recipe} from '../domain/recipe';
import {map} from 'rxjs/operators';
import {FilesService} from '../masterdata/files/files-service';
import {Injectable} from '@angular/core';
import {RecipeSummaryPage} from '../domain/recipe-summary-page';

@Injectable({
  providedIn: 'root'
})
export class GrocyRecipeProvider implements RecipeProvider {
  constructor(protected recipeService: RecipeService, protected filesService: FilesService, protected router: Router) {
  }

  getName(): string {
    return 'Grocy';
  }

  navigateTo(recipe: RecipeSummary): void {
    this.router.navigate(['/recipe/' + recipe.id]);
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
      let summary = new RecipeSummary();
      summary.source = 'GROCY';
      summary.id = it.id;
      summary.name = it.name;
      if (it.picture_file_name) {
        summary.imageUrl = this.filesService.toFileUrl('recipepictures', it.picture_file_name);
      }
      return summary;
    }).forEach(summary => summaries.push(summary));

    let result = new RecipeSummaryPage();
    result.items = summaries;
    result.total = 10000;
    // TODO offset and total
    return result;
  }

}
