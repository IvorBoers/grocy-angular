import {Component} from '@angular/core';
import {ShoppingLocationService} from "../shopping-location.service";
import {ShoppingLocation} from "../../../domain/shopping-location";
import {AbstractEntityTableComponent} from "../../../shared/abstract-entity-table.component";

@Component({
  selector: 'app-shoppinglocationlist',
  templateUrl: './shopping-location-list.component.html',
  styleUrls: ['./shopping-location-list.component.scss']
})
export class ShoppingLocationListComponent extends AbstractEntityTableComponent<ShoppingLocation> {

  constructor(shoppingLocationService: ShoppingLocationService) {
    super(shoppingLocationService);
    this.setDisplayedColumns(['name', 'description']);

  }

}
