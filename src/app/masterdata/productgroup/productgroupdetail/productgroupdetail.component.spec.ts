import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductgroupdetailComponent } from './productgroupdetail.component';

describe('ProductgroupdetailComponent', () => {
  let component: ProductgroupdetailComponent;
  let fixture: ComponentFixture<ProductgroupdetailComponent>;

  beforeEach(async(() => {
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
