import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Entity} from "../domain/entity";
import {EntityService} from "./entity-service";
import {AlertService} from "./alert-service";

@Component({template: ''})
export abstract class AbstractDetailComponent<T extends Entity> implements OnInit {
  item: T;
  id;

  constructor(private route: ActivatedRoute, protected service: EntityService<T>, protected alertService: AlertService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    if (this.id === "new") {
      this.initNewEntity();
    } else {
      this.initEditEntity();
    }
  }

  initEditEntity() {
    this.service.getOne(this.id).subscribe(one => this.setItem(one));
  }

  initNewEntity() {
    this.setItem(this.createNewEntity());
  }

  createNewEntity(): T {
    // override if needed
    return undefined;
  };

  setItem(one: T) {
    return this.item = one;
  }

  abstract getEntityName(): string;

  save() {
    if (this.item.id) {
      this.service.update(this.item).subscribe(response => {
        if (response != null && response.error_message !== undefined) {
          this.alertService.error("Error updating " + this.getEntityName() + ": " + response.error_message)
        } else {
          this.alertService.success("Updated " + this.getEntityName())
        }
      });
    } else {
      this.service.add(this.item).subscribe(response => {
        if (response != null && response.error_message !== undefined) {
          this.alertService.error("Error saving " + this.getEntityName() + ": " + response.error_message)
        } else {
          this.alertService.success("Saved " + this.getEntityName())
        }
      })
    }
  }
}
