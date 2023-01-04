import {Component} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {BarcodeDialogComponent} from "./barcodedialog/barcode-dialog.component";
import {ApiSettingsDialogComponent} from "./api-settings-dialog/api-settings-dialog.component";
import {SystemStatusService} from "./system/system-info/system-status.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'grocy-angular';


  constructor(public dialog: MatDialog) {
  }

  openScanDialog() {
    this.dialog.open(BarcodeDialogComponent, {
      width: '80%',
      height: '80%'
    });
  }


}
