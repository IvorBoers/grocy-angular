import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JumboRecipeDetailpageComponent } from './jumbo-recipe-detailpage.component';

describe('JumboRecipeDetailpageComponent', () => {
  let component: JumboRecipeDetailpageComponent;
  let fixture: ComponentFixture<JumboRecipeDetailpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JumboRecipeDetailpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JumboRecipeDetailpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
