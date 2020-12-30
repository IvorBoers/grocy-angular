import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ShoppingLocationListComponent } from './shopping-location-list.component';

describe('ShoplistComponent', () => {
  let component: ShoppingLocationListComponent;
  let fixture: ComponentFixture<ShoppingLocationListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingLocationListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingLocationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
