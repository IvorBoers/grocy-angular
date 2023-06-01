import {Directive, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Mealplan} from "../../../../domain/mealplan";
import {MealplanService} from "../../mealplan.service";
import {AlertService} from "../../../../shared/alert-service";

@Directive()
export abstract class AbstractMealplanItemComponent implements OnInit {
    @Input()
    mealplan!: Mealplan;

    editMode = false;

    @Output()
    refreshEvent = new EventEmitter()

    constructor(protected mealplanService: MealplanService, protected alertService: AlertService) {
    }

    ngOnInit() {
        if (!this.mealplan.id) {
            this.setEditMode(true)
        }
    }

    setEditMode(mode: boolean) {
        console.log("set edit mode " + this.mealplan.id)
        this.editMode = mode;
    }

    save() {
        this.updateMealplanFields()
        if (this.mealplan.id) {
            this.mealplanService.update(this.mealplan).subscribe(response => {
                if (response != null && response.error_message !== undefined) {
                    this.alertService.error("Error updating mealplan: " + response.error_message);
                } else {
                    this.alertService.success("Updated mealplan");
                }
                this.setEditMode(false)
                this.refreshEvent.emit(null)
            })
        } else {
            this.mealplanService.add(this.mealplan).subscribe(response => {
                if (response != null && response.error_message !== undefined) {
                    this.alertService.error("Error updating mealplan: " + response.error_message);
                } else {
                    this.alertService.success("Added mealplan. Id=" + response.created_object_id);
                    if (response.created_object_id) {
                      this.mealplan.id = response.created_object_id
                    }
                }
                this.setEditMode(false)
                this.refreshEvent.emit(null)
            });

        }
    }

    abstract updateMealplanFields():void

    cancel() {
        this.setEditMode(false)
        this.refreshEvent.emit(null)
    }

    delete() {
        this.mealplanService.delete(this.mealplan).subscribe(() => {
            this.refreshEvent.emit(null)
        })
    }
}
