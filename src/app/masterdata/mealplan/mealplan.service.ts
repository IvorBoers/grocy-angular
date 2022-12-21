import {Injectable} from '@angular/core';
import {EntityService} from "../../shared/entity-service";
import {HttpClient} from "@angular/common/http";
import {AlertService} from "../../shared/alert-service";
import {Mealplan} from "../../domain/mealplan";

@Injectable({
  providedIn: 'root'
})
export class MealplanService extends EntityService<Mealplan>{

  constructor(http: HttpClient, alertService: AlertService) {
    super(http, Mealplan.entityName, alertService);
  }

}
