import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuantityunitdetailComponent } from './quantityunitdetail.component';

describe('QuantityunitdetailComponent', () => {
  let component: QuantityunitdetailComponent;
  let fixture: ComponentFixture<QuantityunitdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuantityunitdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuantityunitdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
