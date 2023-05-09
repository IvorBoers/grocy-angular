import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipesOverviewComponent } from './recipes-overview.component';

describe('RecipesOverviewComponent', () => {
  let component: RecipesOverviewComponent;
  let fixture: ComponentFixture<RecipesOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipesOverviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipesOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
