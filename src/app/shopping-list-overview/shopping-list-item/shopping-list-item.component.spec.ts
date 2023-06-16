import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingListItemComponent } from './shopping-list-item.component';

describe('ShoppingListItemComponent', () => {
  let component: ShoppingListItemComponent;
  let fixture: ComponentFixture<ShoppingListItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShoppingListItemComponent]
    });
    fixture = TestBed.createComponent(ShoppingListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
