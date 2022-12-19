import {EntityService} from "./entity-service";
import {RecipeIngredient} from "../domain/recipe-ingredient";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {AlertService} from "./alert-service";

@Injectable({
  providedIn: 'root'
})
export class RecipeIngredientService extends EntityService<RecipeIngredient> {

  constructor(http: HttpClient, alertService: AlertService) {
    super(http, RecipeIngredient.entityName, alertService);
  }
}
