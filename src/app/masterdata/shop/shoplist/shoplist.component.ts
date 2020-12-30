import {Component} from '@angular/core';
import {ShoppingLocationService} from "../shopping-location-service/shopping-location.service";
import {ShoppingLocation} from "../../../domain/shopping-location";
import {AbstractEntityTableComponent} from "../../../shared/abstract-entity-table.component";

@Component({
  selector: 'app-shoplist',
  templateUrl: './shoplist.component.html',
  styleUrls: ['./shoplist.component.scss']
})
export class ShoplistComponent extends AbstractEntityTableComponent<ShoppingLocation> {

  constructor(shoppingLocationService: ShoppingLocationService) {
    super(shoppingLocationService);
    this.setDisplayedColumns(['name', 'description']);

  }

}
