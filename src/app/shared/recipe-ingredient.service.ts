import {EntityService} from "./entity-service";
import {RecipeIngredient} from "../domain/recipe-ingredient";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RecipeIngredientService extends EntityService<RecipeIngredient> {

  constructor(http: HttpClient) {
    super(http, RecipeIngredient.entityName);
  }
}
