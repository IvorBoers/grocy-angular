import {Component, Injectable} from "@angular/core";
import {Mealplan} from "../../../domain/mealplan";
import {MealplanService} from "../mealplan.service";
import {DatePipe} from "@angular/common";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MealplanDragDropService {

  private mealplanDayChange = new Subject<string>();
  mealplanDayChange$ =this.mealplanDayChange.asObservable();


  constructor(protected mealplanService: MealplanService, protected datePipe: DatePipe) {
  }

  dropIntoDay(item: Mealplan, day: Date) {
    let oldDay = item.day;
    item.day = this.datePipe.transform(day, 'yyyy-MM-dd')
    this.mealplanService.update(item).subscribe(result => {
      console.log("change day " + oldDay)
      this.mealplanDayChange.next(oldDay);
      console.log("change day " + item.day)
      this.mealplanDayChange.next(item.day);
    });
  }
}
