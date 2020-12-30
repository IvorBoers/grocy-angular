import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ShoppingLocationDetailComponent } from './shopping-location-detail.component';

describe('ShopdetailComponent', () => {
  let component: ShoppingLocationDetailComponent;
  let fixture: ComponentFixture<ShoppingLocationDetailComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingLocationDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingLocationDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
