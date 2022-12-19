import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ShoppingLocationService} from "../shopping-location.service";
import {ShoppingLocation} from "../../../domain/shopping-location";
import {AbstractDetailComponent} from "../../../shared/abstract-detail-component";
import {AlertService} from "../../../shared/alert-service";

@Component({
  selector: 'app-shoppinglocationdetail',
  templateUrl: './shopping-location-detail.component.html',
  styleUrls: ['./shopping-location-detail.component.scss']
})
export class ShoppingLocationDetailComponent extends AbstractDetailComponent<ShoppingLocation>{

  constructor(route: ActivatedRoute, shopService: ShoppingLocationService, alertService: AlertService) {
    super(route, shopService, alertService)
  }

  getEntityName(): string {
    return "shoppinglocation";
  }

}
