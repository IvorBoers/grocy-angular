import {Injectable} from '@angular/core';
import {Product} from "../../domain/product";
import {EntityService} from "../../shared/entity-service";
import {HttpClient} from "@angular/common/http";
import {Recipe} from "../../domain/recipe";
import {AlertService} from "../../shared/alert-service";
import {RecipePos} from "../../domain/recipe-pos";

@Injectable({
  providedIn: 'root'
})
export class RecipePosService extends EntityService<RecipePos>{

  constructor(http: HttpClient, alertService: AlertService) {
    super(http, "recipes_pos", alertService);
  }

}
