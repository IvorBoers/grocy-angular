import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteMealplanItemComponent } from './note-mealplan-item.component';

describe('NoteMealplanItemComponent', () => {
  let component: NoteMealplanItemComponent;
  let fixture: ComponentFixture<NoteMealplanItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoteMealplanItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoteMealplanItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
