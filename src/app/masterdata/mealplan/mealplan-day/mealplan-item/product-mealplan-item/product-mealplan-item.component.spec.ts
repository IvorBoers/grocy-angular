import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductMealplanItemComponent } from './product-mealplan-item.component';

describe('ProductMealplanItemComponent', () => {
  let component: ProductMealplanItemComponent;
  let fixture: ComponentFixture<ProductMealplanItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductMealplanItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductMealplanItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
