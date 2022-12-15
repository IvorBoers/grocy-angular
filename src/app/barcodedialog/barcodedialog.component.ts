import { Component, OnInit } from '@angular/core';
import {MatLegacyDialogRef as MatDialogRef} from "@angular/material/legacy-dialog";

@Component({
  selector: 'app-barcodedialog',
  templateUrl: './barcodedialog.component.html',
  styleUrls: ['./barcodedialog.component.scss']
})
export class BarcodedialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<BarcodedialogComponent>) { }

  ngOnInit(): void {
  }

  closeDialog() {
    this.dialogRef.close();
  }

}
