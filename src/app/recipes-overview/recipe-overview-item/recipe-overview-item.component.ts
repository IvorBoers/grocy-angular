import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {RecipeSummary} from '../../domain/recipe-summary';
import {MealplanSectionService} from '../../masterdata/mealplan-section/mealplan-section.service';
import {MealplanSection} from '../../domain/mealplan-section';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';
import {Mealplan} from '../../domain/mealplan';
import {DatePipe} from '@angular/common';
import {MealplanService} from '../../masterdata/mealplan/mealplan.service';
import {AlertService} from '../../shared/alert-service';

@Component({
  selector: 'app-recipe-overview-item',
  templateUrl: './recipe-overview-item.component.html',
  styleUrls: ['./recipe-overview-item.component.scss']
})
export class RecipeOverviewItemComponent implements OnInit {

  @Input()
  recipe?: RecipeSummary;
  @Input()
  nextDate?:string;
  @Output()
  navigateEvent = new EventEmitter();
  showMealplanAction = false;
  sections: MealplanSection[] = [];
  mealplanDate: Date;
  mealplanSection: MealplanSection;
  mealplanServings = 1;


  constructor(protected mealplanSectionService: MealplanSectionService, protected mealplanService: MealplanService,
              protected datePipe: DatePipe, protected alertService: AlertService) {
  }

  ngOnInit() {
    this.mealplanSectionService.getAll().subscribe(response => {
      this.sections = response;
      if (this.sections.length > 0) {
        this.mealplanSection = this.sections[0];
      }
    });
  }

  navigateToRecipe() {
    if (this.recipe) {
      this.navigateEvent.emit(this.recipe);
    }
  }

  toggleMealplanAction() {
    this.showMealplanAction = !this.showMealplanAction;
  }

  addToMealplan() {
    console.log("Add to " + this.mealplanDate + " in section " + this.mealplanSection.name);

    const note = new Mealplan();
    note.type = 'recipe';
    note.day = this.datePipe.transform(this.mealplanDate, 'yyyy-MM-dd')
    note.note = ""
    note.done = false
    note.recipe_servings = this.mealplanServings;
    note.recipe_id = this.recipe.id;
    if (this.mealplanSection) {
      note.section_id = this.mealplanSection.id;
    }

    this.mealplanService.add(note).subscribe(response => {
      if (response != null) {
        if (response.error_message !== undefined) {
          this.alertService.error("Error updating mealplan: " + response.error_message);
        } else {
          this.nextDate = note.day;
          this.alertService.success("Added mealplan id=" + response.created_object_id);
        }
      }
    });
    this.toggleMealplanAction();
  }

  setMealplanDate($event: MatDatepickerInputEvent<Date>) {
    this.mealplanDate = $event.value;

  }

}
