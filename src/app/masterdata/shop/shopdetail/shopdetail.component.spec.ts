import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ShopdetailComponent } from './shopdetail.component';

describe('ShopdetailComponent', () => {
  let component: ShopdetailComponent;
  let fixture: ComponentFixture<ShopdetailComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
