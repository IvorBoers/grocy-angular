import {Component, OnInit} from '@angular/core';
import {MealplanService} from '../../masterdata/mealplan/mealplan.service';
import {DatePipe} from '@angular/common';
import {Mealplan} from '../../domain/mealplan';
import {MealplanSection} from '../../domain/mealplan-section';
import {MealplanSectionService} from '../../masterdata/mealplan-section/mealplan-section.service';

@Component({
  selector: 'app-mealplan-today',
  templateUrl: './mealplan-today.component.html',
  styleUrls: ['./mealplan-today.component.scss']
})
export class MealplanTodayComponent implements OnInit {


  today = new Date();
  sections :MealplanSection[] = [];

  constructor(protected sectionService: MealplanSectionService) {
  }

  ngOnInit() {
    this.sectionService.getAll().subscribe(res => this.sections = res);
  }

}
