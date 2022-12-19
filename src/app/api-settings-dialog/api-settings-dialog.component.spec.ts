import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiSettingsDialogComponent } from './api-settings-dialog.component';

describe('ApiSettingsDialogComponent', () => {
  let component: ApiSettingsDialogComponent;
  let fixture: ComponentFixture<ApiSettingsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiSettingsDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiSettingsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
