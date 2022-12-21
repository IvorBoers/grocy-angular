import {Component, OnInit} from '@angular/core';

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

    constructor() {
    }

    ngOnInit(): void {
        this.setDays(7);
    }

    private setDays(numberOfDays: number) {
        this.days = []
        let firstDayOfWeek = this.getFirstDayOfCurrentWeek()
        console.log("firstday " + firstDayOfWeek)
        Array.from({length: numberOfDays}, (_, i) => {
            let date = new Date(firstDayOfWeek.getTime())
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
        this.setDays(7);
    }
}
