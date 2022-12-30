import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPickerFormComponent } from './product-picker-form.component';

describe('ProductPickerFormComponent', () => {
  let component: ProductPickerFormComponent;
  let fixture: ComponentFixture<ProductPickerFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductPickerFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductPickerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
