import {Component} from '@angular/core';
import {AbstractEntityTableComponent} from "../../../shared/abstract-entity-table.component";
import {MealplanSectionService} from "../mealplan-section.service";
import {MealplanSection} from "../../../domain/mealplan-section";

@Component({
  selector: 'app-mealplan-section-list',
  templateUrl: './mealplan-section-list.component.html',
  styleUrls: ['./mealplan-section-list.component.scss']
})
export class MealplanSectionListComponent extends AbstractEntityTableComponent<MealplanSection>{

  constructor(entityService: MealplanSectionService) {
    super(entityService);
    this.setDisplayedColumns(['name', 'sortNumber', 'timeInfo']);
  }

}
