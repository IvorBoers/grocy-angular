import {Component, ElementRef, ViewChild} from '@angular/core';
import {FormControl} from "@angular/forms";
import {MealplanService} from "../../../mealplan.service";
import {AlertService} from "../../../../../shared/alert-service";
import {AbstractMealplanItemComponent} from "../abstract-mealplan-item.component";
import {debug} from 'util';

@Component({
    selector: 'app-note-mealplan-item',
    templateUrl: './note-mealplan-item.component.html',
    styleUrls: ['./note-mealplan-item.component.scss']
})
export class NoteMealplanItemComponent extends AbstractMealplanItemComponent{

    noteControl = new FormControl<string>('')
    @ViewChild('noteInput') noteInput?: ElementRef;

    constructor(mealplanService: MealplanService, alertService: AlertService) {
        super(mealplanService, alertService)
    }

    override ngOnInit() {
        super.ngOnInit()
        this.noteControl.setValue(this.mealplan.note)

    }

    updateMealplanFields() {
        this.mealplan.note = this.noteControl.value || ''
    }

}
