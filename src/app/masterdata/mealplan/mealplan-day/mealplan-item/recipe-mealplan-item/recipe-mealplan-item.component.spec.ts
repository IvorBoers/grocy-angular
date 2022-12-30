import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeMealplanItemComponent } from './recipe-mealplan-item.component';

describe('RecipeMealplanItemComponent', () => {
  let component: RecipeMealplanItemComponent;
  let fixture: ComponentFixture<RecipeMealplanItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeMealplanItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipeMealplanItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
