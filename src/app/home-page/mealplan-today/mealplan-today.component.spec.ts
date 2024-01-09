import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealplanTodayComponent } from './mealplan-today.component';

describe('MealplanTodayComponent', () => {
  let component: MealplanTodayComponent;
  let fixture: ComponentFixture<MealplanTodayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MealplanTodayComponent]
    });
    fixture = TestBed.createComponent(MealplanTodayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
