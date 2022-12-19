import {Component} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {BarcodedialogComponent} from "./barcodedialog/barcodedialog.component";
import {ApiSettingsDialogComponent} from "./api-settings-dialog/api-settings-dialog.component";
import {SystemStatusService} from "./system/system-info/system-status.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'grocy-angular';


  constructor(public dialog: MatDialog, protected systemStatusService: SystemStatusService) {
  }

  openScanDialog() {
    this.dialog.open(BarcodedialogComponent, {
      width: '80%',
      height: '80%'
    });
  }

  openApiSettingsDialog() {
    const dialogRef = this.dialog.open(ApiSettingsDialogComponent, {
      width: '600px',
      height: '400px'
    })
    dialogRef.afterClosed().subscribe(() => this.systemStatusService.refreshConnection());
  }


}
