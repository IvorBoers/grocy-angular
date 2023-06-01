import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-api-settings-dialog',
  templateUrl: './api-settings-dialog.component.html',
  styleUrls: ['./api-settings-dialog.component.scss']
})
export class ApiSettingsDialogComponent implements OnInit {

  apiKeyControl!: FormControl
  urlControl!: FormControl

  constructor(public dialogRef: MatDialogRef<ApiSettingsDialogComponent>){}

  ngOnInit(): void {
    this.urlControl = new FormControl<string | null>(localStorage.getItem('grocy_url'))
    this.apiKeyControl = new FormControl<string | null>(localStorage.getItem('grocy_api_key'))
  }

  saveSettings() {
    if (this.urlControl) {
      localStorage.setItem('grocy_url', this.urlControl.value)
    }
    if (this.apiKeyControl) {
      localStorage.setItem('grocy_api_key', this.apiKeyControl.value)
    }
    this.dialogRef.close()
  }
}
