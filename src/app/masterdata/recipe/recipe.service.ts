import {Injectable} from '@angular/core';
import {Product} from "../../domain/product";
import {EntityService} from "../../shared/entity-service";
import {HttpClient} from "@angular/common/http";
import {Recipe} from "../../domain/recipe";
import {AlertService} from "../../shared/alert-service";

@Injectable({
  providedIn: 'root'
})
export class RecipeService extends EntityService<Recipe>{

  constructor(http: HttpClient, alertService: AlertService) {
    super(http, "recipes", alertService);
  }

}
