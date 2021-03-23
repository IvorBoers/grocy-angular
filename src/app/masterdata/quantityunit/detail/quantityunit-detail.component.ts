import {Component} from '@angular/core';
import {AbstractDetailComponent} from "../../../shared/abstract-detail-component";
import {ActivatedRoute} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Quantityunit} from "../../../domain/quantityunit";
import {QuantityunitService} from "../quantityunit.service";

@Component({
  selector: 'app-quantityunit-detail',
  templateUrl: './quantityunit-detail.component.html',
  styleUrls: ['./quantityunit-detail.component.scss']
})
export class QuantityunitDetailComponent extends AbstractDetailComponent<Quantityunit> {

  constructor(route: ActivatedRoute, _snackBar: MatSnackBar, service: QuantityunitService) {
    super(route, _snackBar, service)
  }

  getEntityName(): string {
    return "quantityunit";
  }

}
