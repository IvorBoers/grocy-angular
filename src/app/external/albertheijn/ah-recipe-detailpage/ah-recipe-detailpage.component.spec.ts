import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AhRecipeDetailpageComponent } from './ah-recipe-detailpage.component';

describe('AhRecipeDetailpageComponent', () => {
  let component: AhRecipeDetailpageComponent;
  let fixture: ComponentFixture<AhRecipeDetailpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AhRecipeDetailpageComponent]
    });
    fixture = TestBed.createComponent(AhRecipeDetailpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
