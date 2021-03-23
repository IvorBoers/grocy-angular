import {Component} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
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
