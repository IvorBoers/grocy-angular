import {Component, OnInit} from '@angular/core';
import {MealplanSectionService} from "../mealplan-section/mealplan-section.service";
import {MealplanSection} from "../../domain/mealplan-section";

@Component({
  selector: 'app-mealplan',
  templateUrl: './mealplan.component.html',
  styleUrls: ['./mealplan.component.scss']
})
export class MealplanComponent implements OnInit {

  times = x => f => {
    if (x > 0) {
      f()
      this.times(x - 1)(f)
    }
  }

  days: Date[] = []
  deltaDays = 1;
  numberOfDaysStr = "7";
  sections: MealplanSection[];

  constructor(protected mealplanSectionService: MealplanSectionService) {
  }

  ngOnInit(): void {
    this.setDays();
    this.mealplanSectionService.getAll().subscribe(result => this.sections = result);
  }

  setDays() {
    this.days = []
    let firstDay = new Date();//this.getFirstDayOfCurrentWeek()
    console.log("firstday " + firstDay)
    Array.from({length: +this.numberOfDaysStr}, (_, i) => {
      let date = new Date(firstDay.getTime())
      date.setDate(date.getDate() + i + this.deltaDays)
      this.days.push(date);
    })
  }

  private getFirstDayOfCurrentWeek(): Date {
    let curr = new Date; // get current date
    let first = curr.getDate() - curr.getDay(); // First day is the day of the month - the day of the week
    return new Date(curr.setDate(first));
  }

  navigateDays(newDelta: number) {
    this.deltaDays = newDelta;
    this.setDays();
  }
}
