import {Injectable} from '@angular/core';
import {EntityService} from "../../shared/entity-service";
import {HttpClient} from "@angular/common/http";
import {AlertService} from "../../shared/alert-service";
import {MealplanSection} from "../../domain/mealplan-section";
import {catchError} from "rxjs/operators";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MealplanSectionService extends EntityService<MealplanSection>{

  constructor(http: HttpClient, alertService: AlertService) {
    super(http, "meal_plan_sections", alertService);
  }

  override getAll(): Observable<MealplanSection[]> {
    return this.http.get<MealplanSection[]>(this.getUrl() + "&order=sort_number%3Aasc")
      .pipe(
        catchError(this.handleError.bind(this))
      );
  }

}
