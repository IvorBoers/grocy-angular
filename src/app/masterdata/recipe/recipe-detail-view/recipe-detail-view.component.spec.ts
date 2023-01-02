import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeDetailViewComponent } from './recipe-detail-view.component';

describe('RecipeDetailViewComponent', () => {
  let component: RecipeDetailViewComponent;
  let fixture: ComponentFixture<RecipeDetailViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeDetailViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipeDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
