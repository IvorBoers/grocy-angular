import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { QuantityunitListComponent } from './quantityunit-list.component';

describe('QuantityunitlistComponent', () => {
  let component: QuantityunitListComponent;
  let fixture: ComponentFixture<QuantityunitListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ QuantityunitListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuantityunitListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
