import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ProductgroupListComponent } from './product-list.component';

describe('ProductlistComponent', () => {
  let component: ProductgroupListComponent;
  let fixture: ComponentFixture<ProductgroupListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductgroupListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductgroupListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
