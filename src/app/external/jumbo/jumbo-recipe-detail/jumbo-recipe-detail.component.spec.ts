import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JumboRecipeDetailComponent } from './jumbo-recipe-detail.component';

describe('JumboRecipeDetailComponent', () => {
  let component: JumboRecipeDetailComponent;
  let fixture: ComponentFixture<JumboRecipeDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JumboRecipeDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JumboRecipeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
