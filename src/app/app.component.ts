import {Component} from '@angular/core';
import {MatLegacyDialog as MatDialog} from "@angular/material/legacy-dialog";
import {BarcodedialogComponent} from "./barcodedialog/barcodedialog.component";

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
    const dialogRef = this.dialog.open(BarcodedialogComponent, {
      width: '80%',
      height: '80%'
    });
  }
}
