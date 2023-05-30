import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeOverviewItemComponent } from './recipe-overview-item.component';

describe('RecipeOverviewItemComponent', () => {
  let component: RecipeOverviewItemComponent;
  let fixture: ComponentFixture<RecipeOverviewItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeOverviewItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipeOverviewItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
