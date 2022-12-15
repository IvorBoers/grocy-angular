import {Component} from '@angular/core';
import {AbstractDetailComponent} from "../../../shared/abstract-detail-component";
import {ProductgroupService} from "../productgroup.service";
import {ActivatedRoute} from "@angular/router";
import {MatLegacySnackBar as MatSnackBar} from "@angular/material/legacy-snack-bar";
import {Productgroup} from "../../../domain/productgroup";

@Component({
  selector: 'app-productgroup-detail',
  templateUrl: './productgroup-detail.component.html',
  styleUrls: ['./productgroup-detail.component.scss']
})
export class ProductgroupDetailComponent extends AbstractDetailComponent<Productgroup> {

  constructor(route: ActivatedRoute, _snackBar: MatSnackBar, service: ProductgroupService) {
    super(route, _snackBar, service)
  }

  getEntityName(): string {
    return "productgroup";
  }

}
