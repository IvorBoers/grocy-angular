import { Component } from '@angular/core';
import {AlertService} from "../alert-service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent {
  private snackBarRef: any;

  constructor(protected alertService: AlertService, protected snackBar: MatSnackBar) {
  }

  ngOnInit(): void {

    this.alertService.alert.subscribe(([message,show]) => {
      if ( message&&message.text ) {
        // there is a message to show, so change snackbar style to match the message type
        if (message.type === 'error') {
          this.snackBarRef  =  this.snackBar.open(message.text, 'Ok', {
            // duration: 2500,
            verticalPosition: 'top',
            panelClass: ['snackbar-error']
          });
        } else if (message.type === 'success') {
          this.snackBarRef= this.snackBar.open(message.text, undefined, {
            duration: 3000,
            verticalPosition: 'top',
            panelClass: ['snackbar-success']
          });
        } else {
          this.snackBarRef= this.snackBar.open(message.text, 'Ok', {
            duration: 3000,
            verticalPosition: 'top'
          });
        }
        this.snackBarRef.afterDismissed().subscribe(()=>this.alertService.showNext());
      }
      else this.alertService.showNext();
    });
  }
}
