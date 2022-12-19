import {UserfieldsService} from "./userfields-service";
import {HttpClient} from "@angular/common/http";
import {Recipe} from "../domain/recipe";
import {RecipeUserfields} from "../domain/recipe-userfields";
import {Injectable} from "@angular/core";
import {AlertService} from "./alert-service";

@Injectable({
  providedIn: 'root'
})
export class RecipeUserfieldsService extends UserfieldsService<RecipeUserfields> {

  protected constructor(http: HttpClient, alertService: AlertService) {
    super(http, Recipe.entityName, alertService)
  }
}
