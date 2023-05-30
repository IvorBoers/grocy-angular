import {Injectable} from '@angular/core';
import {EntityService} from "../../shared/entity-service";
import {HttpClient} from "@angular/common/http";
import {AlertService} from "../../shared/alert-service";
import {Mealplan} from "../../domain/mealplan";
import {Observable} from 'rxjs';
import {DatePipe} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class MealplanService extends EntityService<Mealplan>{

  constructor(http: HttpClient, alertService: AlertService, private datePipe: DatePipe) {
    super(http, Mealplan.entityName, alertService);
  }

  getAllFuture(): Observable<Mealplan[]> {
    return this.query(['day>' + this.datePipe.transform(new Date(), 'yyyy-MM-dd')], 1000, 0);
  }
}
