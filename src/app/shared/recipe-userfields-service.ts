import {UserfieldsService} from "./userfields-service";
import {HttpClient} from "@angular/common/http";
import {Recipe} from "../domain/recipe";
import {RecipeUserfields} from "../domain/recipe-userfields";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class RecipeUserfieldsService extends UserfieldsService<RecipeUserfields> {

  protected constructor(http: HttpClient) {
    super(http, Recipe.entityName)
  }
}
