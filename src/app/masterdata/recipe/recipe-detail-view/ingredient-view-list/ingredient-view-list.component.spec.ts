import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientViewListComponent } from './ingredient-view-list.component';

describe('RecipeListComponent', () => {
  let component: IngredientViewListComponent;
  let fixture: ComponentFixture<IngredientViewListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngredientViewListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IngredientViewListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
