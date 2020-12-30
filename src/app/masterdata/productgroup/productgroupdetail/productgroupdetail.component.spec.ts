import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ProductgroupdetailComponent } from './productgroupdetail.component';

describe('ProductgroupdetailComponent', () => {
  let component: ProductgroupdetailComponent;
  let fixture: ComponentFixture<ProductgroupdetailComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductgroupdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductgroupdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
