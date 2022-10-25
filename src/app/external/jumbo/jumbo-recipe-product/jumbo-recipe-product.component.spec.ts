import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JumboRecipeProductComponent } from './jumbo-recipe-product.component';

describe('JumboRecipeProductComponent', () => {
  let component: JumboRecipeProductComponent;
  let fixture: ComponentFixture<JumboRecipeProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JumboRecipeProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JumboRecipeProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
