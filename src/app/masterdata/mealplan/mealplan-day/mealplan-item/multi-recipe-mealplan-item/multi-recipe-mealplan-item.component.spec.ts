import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiRecipeMealplanItemComponent } from './multi-recipe-mealplan-item.component';

describe('RecipeMealplanItemComponent', () => {
  let component: MultiRecipeMealplanItemComponent;
  let fixture: ComponentFixture<MultiRecipeMealplanItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiRecipeMealplanItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultiRecipeMealplanItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
