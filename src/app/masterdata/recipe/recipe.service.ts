import {Injectable} from '@angular/core';
import {Product} from "../../domain/product";
import {EntityService} from "../../shared/entity-service";
import {HttpClient} from "@angular/common/http";
import {Recipe} from "../../domain/recipe";

@Injectable({
  providedIn: 'root'
})
export class RecipeService extends EntityService<Recipe>{

  constructor(http: HttpClient) {
    super(http, "recipes");
  }

}
