import {Component, OnInit} from '@angular/core';
import {MealplanSectionService} from "../mealplan-section/mealplan-section.service";
import {MealplanSection} from "../../domain/mealplan-section";

@Component({
  selector: 'app-mealplan',
  templateUrl: './mealplan.component.html',
  styleUrls: ['./mealplan.component.scss']
})
export class MealplanComponent implements OnInit {

  days: Date[] = []
  deltaDays = 0;
  numberOfDaysStr = "7";
  sections: MealplanSection[] = [];

  constructor(protected mealplanSectionService: MealplanSectionService) {

  }

  ngOnInit(): void {
    this.setDays();
    this.mealplanSectionService.getAll().subscribe(result => this.sections = result);
  }

  setDays() {
    this.days = []
    let firstDay = new Date();
    Array.from({length: +this.numberOfDaysStr}, (_, i) => {
      let date = new Date(firstDay.getTime())
      date.setDate(date.getDate() + i + this.deltaDays)
      this.days.push(date);
    })
  }

  navigateDays(newDelta: number) {
    this.deltaDays = newDelta;
    this.setDays();
  }
}
