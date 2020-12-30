import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LocationlistComponent } from './locationlist.component';

describe('LocationlistComponent', () => {
  let component: LocationlistComponent;
  let fixture: ComponentFixture<LocationlistComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
