import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeSelectItemComponent } from './recipe-select-item.component';

describe('RecipeOverviewItemComponent', () => {
  let component: RecipeSelectItemComponent;
  let fixture: ComponentFixture<RecipeSelectItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeSelectItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipeSelectItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
