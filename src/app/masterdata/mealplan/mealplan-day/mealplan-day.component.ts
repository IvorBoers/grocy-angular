import {Component, Input, OnInit} from '@angular/core';
import {MealplanService} from "../mealplan.service";
import {Mealplan} from "../../../domain/mealplan";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-mealplan-day',
  templateUrl: './mealplan-day.component.html',
  styleUrls: ['./mealplan-day.component.scss']
})
export class MealplanDayComponent implements OnInit {

  @Input()
  day: Date
  mealplans: Mealplan[] = []


  constructor(protected mealplanService: MealplanService, protected datePipe: DatePipe) {
  }
  ngOnInit() {
    this.mealplanService.getAllWhere('day', this.datePipe.transform(this.day, 'yyyy-MM-dd')).subscribe(mealplans => {
      if (mealplans) {
        this.mealplans = mealplans;
      }
    })
  }
}
