import {Component} from '@angular/core';
import {AbstractDetailComponent} from "../../../shared/abstract-detail-component";
import {ActivatedRoute} from "@angular/router";
import {Quantityunit} from "../../../domain/quantityunit";
import {QuantityunitService} from "../quantityunit.service";
import {AlertService} from "../../../shared/alert-service";

@Component({
  selector: 'app-quantityunit-detail',
  templateUrl: './quantityunit-detail.component.html',
  styleUrls: ['./quantityunit-detail.component.scss']
})
export class QuantityunitDetailComponent extends AbstractDetailComponent<Quantityunit> {

  constructor(route: ActivatedRoute, service: QuantityunitService, alertService: AlertService) {
    super(route, service, alertService)
  }

  getEntityName(): string {
    return "quantityunit";
  }

}
