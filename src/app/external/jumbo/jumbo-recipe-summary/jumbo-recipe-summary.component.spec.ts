import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JumboRecipeSummaryComponent } from './jumbo-recipe-summary.component';

describe('JumboRecipeSummaryComponent', () => {
  let component: JumboRecipeSummaryComponent;
  let fixture: ComponentFixture<JumboRecipeSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JumboRecipeSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JumboRecipeSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
