import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JumboRecipesComponent } from './jumbo-recipes.component';

describe('JumboRecipesComponent', () => {
  let component: JumboRecipesComponent;
  let fixture: ComponentFixture<JumboRecipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JumboRecipesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JumboRecipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
