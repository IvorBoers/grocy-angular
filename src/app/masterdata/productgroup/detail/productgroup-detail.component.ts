import {Component} from '@angular/core';
import {AbstractDetailComponent} from "../../../shared/abstract-detail-component";
import {ProductgroupService} from "../productgroup.service";
import {ActivatedRoute} from "@angular/router";
import {Productgroup} from "../../../domain/productgroup";
import {AlertService} from "../../../shared/alert-service";

@Component({
  selector: 'app-productgroup-detail',
  templateUrl: './productgroup-detail.component.html',
  styleUrls: ['./productgroup-detail.component.scss']
})
export class ProductgroupDetailComponent extends AbstractDetailComponent<Productgroup> {

  constructor(route: ActivatedRoute, service: ProductgroupService, alertService: AlertService) {
    super(route, service, alertService)
  }

  getEntityName(): string {
    return "productgroup";
  }

  createNewEntity(): Productgroup {
    return new Productgroup();
  }

}
