import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuantityunitlistComponent } from './quantityunitlist.component';

describe('QuantityunitlistComponent', () => {
  let component: QuantityunitlistComponent;
  let fixture: ComponentFixture<QuantityunitlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuantityunitlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuantityunitlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
