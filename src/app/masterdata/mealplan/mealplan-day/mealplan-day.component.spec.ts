import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealplanDayComponent } from './mealplan-day.component';

describe('MealplanDayComponent', () => {
  let component: MealplanDayComponent;
  let fixture: ComponentFixture<MealplanDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MealplanDayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MealplanDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
