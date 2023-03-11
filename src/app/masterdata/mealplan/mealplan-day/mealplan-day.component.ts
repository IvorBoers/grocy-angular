import {Component, Input, OnInit} from '@angular/core';
import {MealplanService} from "../mealplan.service";
import {Mealplan} from "../../../domain/mealplan";
import {DatePipe} from "@angular/common";
import {CdkDragDrop} from "@angular/cdk/drag-drop";
import {MealplanDragDropService} from "./mealplan-drag-drop-service";
import {MealplanSection} from "../../../domain/mealplan-section";

@Component({
  selector: 'app-mealplan-day',
  templateUrl: './mealplan-day.component.html',
  styleUrls: ['./mealplan-day.component.scss']
})
export class MealplanDayComponent implements OnInit {

  @Input()
  sections: MealplanSection[];
  @Input()
  day: Date
  mealplans: Mealplan[] = []

  constructor(protected mealplanService: MealplanService, protected datePipe: DatePipe, protected mealplanDragDropService: MealplanDragDropService) {
  }
  ngOnInit() {
    this.loadMealplansForDay();
    this.mealplanDragDropService.mealplanDayChange$.subscribe(day => {
      if (day === this.datePipe.transform(this.day, 'yyyy-MM-dd')) {
        this.loadMealplansForDay();
      }
    });
  }

  loadMealplansForDay() {
    console.log("loading mealplans for day " + this.day)
    this.mealplanService.getAllWhere('day', this.datePipe.transform(this.day, 'yyyy-MM-dd')).subscribe(mealplans => {
      if (mealplans) {
        this.mealplans = mealplans;
      }
    });
  }

  addItem(type: string) {
    console.log("Adding " + type)
    const note = new Mealplan();
    note.type = type;
    note.day = this.datePipe.transform(this.day, 'yyyy-MM-dd')
    note.note = ""
    note.done = false
    note.recipe_servings = 1
    const arrayCopy = [...this.mealplans]
    arrayCopy.push(note)
    this.mealplans = arrayCopy
  }

  drop(event: CdkDragDrop<any, any>) {
    if (event.previousContainer.id === event.container.id) {
      this.moveItemInDay(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      console.log(event.previousContainer.id)
      this.mealplanDragDropService.dropIntoDay(event.previousContainer.data[event.previousIndex], this.day);
    }

  }

  private moveItemInDay(data: any, previousIndex: number, currentIndex: number) {
    console.log("Drop Move-in-day event " + this.day + ", obj=" +JSON.stringify(data[0]));
  }
}
