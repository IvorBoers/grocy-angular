import {Observable} from 'rxjs';
import {RecipeSummaryPage} from '../domain/recipe-summary-page';

export interface RecipeProvider {

  searchRecipes(query: string, pageIndex: number, pageSize: number): Observable<RecipeSummaryPage>;

  getName(): string;

  // maybe later add link to logo

}
