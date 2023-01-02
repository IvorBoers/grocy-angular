import {Component} from '@angular/core';
import {AbstractDetailComponent} from "../../../shared/abstract-detail-component";
import {Recipe} from "../../../domain/recipe";
import {ActivatedRoute} from "@angular/router";
import {AlertService} from "../../../shared/alert-service";
import {RecipeService} from "../recipe.service";

@Component({
  selector: 'app-recipe-detail-view',
  templateUrl: './recipe-detail-view.component.html',
  styleUrls: ['./recipe-detail-view.component.scss']
})
export class RecipeDetailViewComponent extends AbstractDetailComponent<Recipe> {

  constructor(route: ActivatedRoute, service: RecipeService, alertService: AlertService) {
    super(route, service, alertService);
  }

  getEntityName(): string {
    return Recipe.entityName;
  }

}
