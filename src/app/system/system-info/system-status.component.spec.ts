import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemStatusComponent } from './system-status.component';

describe('SystemInfoComponent', () => {
  let component: SystemStatusComponent;
  let fixture: ComponentFixture<SystemStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SystemStatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SystemStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
