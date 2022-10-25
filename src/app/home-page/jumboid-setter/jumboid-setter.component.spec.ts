import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JumboidSetterComponent } from './jumboid-setter.component';

describe('JumboidSetterComponent', () => {
  let component: JumboidSetterComponent;
  let fixture: ComponentFixture<JumboidSetterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JumboidSetterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JumboidSetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
