import {Component} from '@angular/core';
import {ProductgroupService} from "../productgroup.service";
import {AbstractEntityTableComponent} from "../../../shared/abstract-entity-table.component";
import {Productgroup} from "../../../domain/productgroup";

@Component({
  selector: 'app-productgroup-list',
  templateUrl: './productgroup-list.component.html',
  styleUrls: ['./productgroup-list.component.scss']
})
export class ProductgroupListComponent extends AbstractEntityTableComponent<Productgroup> {

  constructor(productgroupService: ProductgroupService) {
    super(productgroupService);
    this.setDisplayedColumns(['name', 'description']);
  }
}
