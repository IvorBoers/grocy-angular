import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ProductgrouplistComponent } from './productgrouplist.component';

describe('ProductgrouplistComponent', () => {
  let component: ProductgrouplistComponent;
  let fixture: ComponentFixture<ProductgrouplistComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductgrouplistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductgrouplistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
