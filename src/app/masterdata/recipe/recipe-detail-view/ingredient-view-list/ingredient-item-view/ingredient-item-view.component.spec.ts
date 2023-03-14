import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientItemViewComponent } from './ingredient-item-view.component';

describe('RecipeDetailEditComponent', () => {
  let component: IngredientItemViewComponent;
  let fixture: ComponentFixture<IngredientItemViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngredientItemViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IngredientItemViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
