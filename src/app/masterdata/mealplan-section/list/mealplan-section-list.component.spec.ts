import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MealplanSectionListComponent } from './mealplan-section-list.component';

describe('QuantityunitlistComponent', () => {
  let component: MealplanSectionListComponent;
  let fixture: ComponentFixture<MealplanSectionListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MealplanSectionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MealplanSectionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
