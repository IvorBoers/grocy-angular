import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarcodedialogComponent } from './barcodedialog.component';

describe('BarcodedialogComponent', () => {
  let component: BarcodedialogComponent;
  let fixture: ComponentFixture<BarcodedialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarcodedialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarcodedialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
