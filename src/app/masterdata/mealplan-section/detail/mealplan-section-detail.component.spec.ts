import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MealplanSectionDetailComponent } from './mealplan-section-detail.component';

describe('QuantityunitdetailComponent', () => {
  let component: MealplanSectionDetailComponent;
  let fixture: ComponentFixture<MealplanSectionDetailComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MealplanSectionDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MealplanSectionDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
