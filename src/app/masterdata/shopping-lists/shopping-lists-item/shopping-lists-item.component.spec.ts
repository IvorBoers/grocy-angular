import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingListsItemComponent } from './shopping-lists-item.component';

describe('ShoppingListsItemComponent', () => {
  let component: ShoppingListsItemComponent;
  let fixture: ComponentFixture<ShoppingListsItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShoppingListsItemComponent]
    });
    fixture = TestBed.createComponent(ShoppingListsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
