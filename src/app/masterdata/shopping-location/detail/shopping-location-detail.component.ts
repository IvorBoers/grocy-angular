import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ShoppingLocationService} from "../shopping-location.service";
import {ShoppingLocation} from "../../../domain/shopping-location";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-shoppinglocationdetail',
  templateUrl: './shopping-location-detail.component.html',
  styleUrls: ['./shopping-location-detail.component.scss']
})
export class ShoppingLocationDetailComponent implements OnInit {
  item: ShoppingLocation;

  constructor(private route: ActivatedRoute, private shopService: ShoppingLocationService, private _snackBar: MatSnackBar) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.shopService.getOne(id).subscribe(one => this.item = one);
  }

  openSnackBar(message: string, entity: string) {
    this._snackBar.open(message, entity, {
      duration: 2000,
    });
  }

  save() {
    this.shopService.update(this.item).subscribe(response => {
      if (response != null && response.error_message !== undefined) {
        this.openSnackBar("Error: " + response.error_message, "shoppinglocation");
      } else {
        this.openSnackBar("Saved", "shoppinglocation");
      }
    });
  }
}
