import {Component} from '@angular/core';
import {AbstractDetailComponent} from "../../../shared/abstract-detail-component";
import {ActivatedRoute} from "@angular/router";
import {Quantityunit} from "../../../domain/quantityunit";
import {MealplanSectionService} from "../mealplan-section.service";
import {AlertService} from "../../../shared/alert-service";
import {MealplanSection} from "../../../domain/mealplan-section";

@Component({
  selector: 'app-mealplan-section-detail',
  templateUrl: './mealplan-section-detail.component.html',
  styleUrls: ['./mealplan-section-detail.component.scss']
})
export class MealplanSectionDetailComponent extends AbstractDetailComponent<MealplanSection> {

  constructor(route: ActivatedRoute, service: MealplanSectionService, alertService: AlertService) {
    super(route, service, alertService)
  }

  getEntityName(): string {
    return "meal_plan_sections";
  }

}
