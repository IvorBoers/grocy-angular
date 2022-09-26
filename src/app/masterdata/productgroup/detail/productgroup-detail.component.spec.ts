import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ProductgroupDetailComponent } from './productgroup-detail.component';

describe('ProductgroupdetailComponent', () => {
  let component: ProductgroupDetailComponent;
  let fixture: ComponentFixture<ProductgroupDetailComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductgroupDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductgroupDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
