import {Injectable} from '@angular/core';
import {EntityService} from "../../shared/entity-service";
import {HttpClient} from "@angular/common/http";
import {Recipe} from "../../domain/recipe";
import {AlertService} from "../../shared/alert-service";
import {Observable} from 'rxjs';


class ExcludedProductIds {
  excludedProductIds: number[] = []
}
@Injectable({
  providedIn: 'root'
})
export class RecipeService extends EntityService<Recipe>{

  constructor(http: HttpClient, alertService: AlertService) {
    super(http, "recipes", alertService);
  }

  addMissingItemsToShoppingList(recipeId: number):Observable<any> {
    const url = localStorage.getItem('grocy_url') + '/api/recipes/' + recipeId +
      '/add-not-fulfilled-products-to-shoppinglist' + this.getApiKeyPostfix();
    return this.http.post(url, new ExcludedProductIds());
  }

}
