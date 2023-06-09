import {Component, Input, OnInit} from '@angular/core';
import {MealplanService} from "../mealplan.service";
import {Mealplan} from "../../../domain/mealplan";
import {DatePipe} from "@angular/common";
import {CdkDragDrop} from "@angular/cdk/drag-drop";
import {MealplanDragDropService} from "./mealplan-drag-drop-service";
import {MealplanSection} from "../../../domain/mealplan-section";
import {MealplanSectionService} from "../../mealplan-section/mealplan-section.service";

@Component({
  selector: 'app-mealplan-day',
  templateUrl: './mealplan-day.component.html',
  styleUrls: ['./mealplan-day.component.scss']
})
export class MealplanDayComponent implements OnInit {

  @Input()
  sections: MealplanSection[] = []
  @Input()
  day: Date = new Date()
  mealplans: Mealplan[] = []

  constructor(protected mealplanService: MealplanService, protected datePipe: DatePipe,
              protected mealplanDragDropService: MealplanDragDropService, protected mealplanSectionService: MealplanSectionService) {
  }
  ngOnInit() {
    this.loadMealplansForDay();
    this.mealplanDragDropService.mealplanDayChange$.subscribe(day => {
      if (day === this.datePipe.transform(this.day, 'yyyy-MM-dd')) {
        this.loadMealplansForDay();
      }
    });
    this.mealplanSectionService.getAll().subscribe(result => this.sections = result);
  }

  loadMealplansForDay() {
    console.log("loading mealplans for day " + this.day)
    let dateString = this.datePipe.transform(this.day, 'yyyy-MM-dd');
    if (dateString) {
      this.mealplanService.getAllWhere('day', dateString).subscribe(mealplans => {
        if (mealplans) {
          this.mealplans = mealplans;
        }
      });
    }
  }

  addItem(type: string, section: MealplanSection) {
    console.log("Adding " + type)
    const mealplan = new Mealplan();
    mealplan.type = type;
    if (type === 'product') {
      mealplan.product_amount = 1
    }
    let dateString = this.datePipe.transform(this.day, 'yyyy-MM-dd');
    if (dateString) {
      mealplan.day = dateString
    }
    mealplan.note = ""
    mealplan.done = false
    mealplan.recipe_servings = 1
    if (section) {
      mealplan.section_id = section.id;
    }
    const arrayCopy = [...this.mealplans]
    arrayCopy.push(mealplan)
    this.mealplans = arrayCopy
  }

  drop(event: CdkDragDrop<any, any>) {
    let mealplanItem = event.item.data;
    let section = event.container.data;

    this.mealplanDragDropService.dropIntoDay(mealplanItem, this.day, section);
  }

  getMealplansForSection(section: MealplanSection): Mealplan[] {
    let mealplans1 = this.mealplans.filter(item => item.section_id === section.id);
    if ('2023-06-07' === this.datePipe.transform(this.day, 'yyyy-MM-dd') && section.id === -1) {
      console.log("get for section : " + JSON.stringify(mealplans1))
    }
    return mealplans1;
  }
}
