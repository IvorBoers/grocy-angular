import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Entity} from "../domain/entity";
import {EntityService} from "./entity-service";

@Component({template: ''})
export abstract class AbstractDetailComponent<T extends Entity> implements OnInit {
  item: T;
  id;

  protected constructor(private route: ActivatedRoute, private _snackBar: MatSnackBar, private service: EntityService<T>) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.service.getOne(this.id).subscribe(one => this.setItem(one));
  }

  setItem(one: T) {
    return this.item = one;
  }

  abstract getEntityName(): string;

  openSnackBar(message: string, entity: string) {
    this._snackBar.open(message, entity, {
      duration: 2000,
    });
  }

  save() {
    this.service.update(this.item).subscribe(response => {
      if (response != null && response.error_message !== undefined) {
        this.openSnackBar("Error: " + response.error_message, this.getEntityName());
      } else {
        this.openSnackBar("Saved", this.getEntityName());
      }
    });
  }
}
