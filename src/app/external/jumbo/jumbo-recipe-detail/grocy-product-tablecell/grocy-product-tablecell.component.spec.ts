import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrocyProductTablecellComponent } from './grocy-product-tablecell.component';

describe('GrocyProductTablecellComponent', () => {
  let component: GrocyProductTablecellComponent;
  let fixture: ComponentFixture<GrocyProductTablecellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrocyProductTablecellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrocyProductTablecellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
