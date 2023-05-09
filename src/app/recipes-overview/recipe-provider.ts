import {Observable} from 'rxjs';
import {RecipeSummary} from '../domain/recipe-summary';
import {RecipeSummaryPage} from '../domain/recipe-summary-page';

export interface RecipeProvider {

  searchRecipes(query: string, pageIndex: number, pageSize: number): Observable<RecipeSummaryPage>;

  navigateTo(recipe: RecipeSummary): void;

  getName(): string;

  // maybe later add link to logo
  // maybe later add function to add to mealplan
}
