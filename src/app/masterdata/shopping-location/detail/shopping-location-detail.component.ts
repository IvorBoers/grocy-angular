import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ShoppingLocationService} from "../shopping-location.service";
import {ShoppingLocation} from "../../../domain/shopping-location";
import {MatLegacySnackBar as MatSnackBar} from "@angular/material/legacy-snack-bar";
import {AbstractDetailComponent} from "../../../shared/abstract-detail-component";
@Component({
  selector: 'app-shoppinglocationdetail',
  templateUrl: './shopping-location-detail.component.html',
  styleUrls: ['./shopping-location-detail.component.scss']
})
export class ShoppingLocationDetailComponent extends AbstractDetailComponent<ShoppingLocation>{

  constructor(route: ActivatedRoute, _snackBar: MatSnackBar, shopService: ShoppingLocationService) {
    super(route, _snackBar, shopService)
  }

  getEntityName(): string {
    return "shoppinglocation";
  }

}
