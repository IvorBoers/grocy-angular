import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { QuantityunitDetailComponent } from './quantityunit-detail.component';

describe('QuantityunitdetailComponent', () => {
  let component: QuantityunitDetailComponent;
  let fixture: ComponentFixture<QuantityunitDetailComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ QuantityunitDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuantityunitDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
