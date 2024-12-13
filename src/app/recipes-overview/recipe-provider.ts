import {Observable} from 'rxjs';
import {RecipeSummaryPage} from '../domain/recipe-summary-page';
import {RecipeSummary} from '../domain/recipe-summary';

export interface RecipeProvider {

  findById(id: any): Observable<RecipeSummary>;

  searchRecipes(query: string, pageIndex: number, pageSize: number): Observable<RecipeSummaryPage>;

  getName(): string;

  // maybe later add link to logo

}
