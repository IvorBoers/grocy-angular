import {Component} from '@angular/core';
import {AbstractEntityTableComponent} from "../../../shared/abstract-entity-table.component";
import {Quantityunit} from "../../../domain/quantityunit";
import {QuantityunitService} from "../quantityunit.service";

@Component({
  selector: 'app-quantityunit-list',
  templateUrl: './quantityunit-list.component.html',
  styleUrls: ['./quantityunit-list.component.scss']
})
export class QuantityunitListComponent extends AbstractEntityTableComponent<Quantityunit>{

  constructor(entityService: QuantityunitService) {
    super(entityService);
    this.setDisplayedColumns(['name', 'name_plural', 'description']);
  }

}
