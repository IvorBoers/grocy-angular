import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealplanItemComponent } from './mealplan-item.component';

describe('MealplanItemComponent', () => {
  let component: MealplanItemComponent;
  let fixture: ComponentFixture<MealplanItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MealplanItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MealplanItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
