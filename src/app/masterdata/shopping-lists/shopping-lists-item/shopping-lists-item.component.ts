import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {ShoppingList} from '../../../domain/shopping-list';
import {ShoppingListService} from '../shopping-list.service';
import {AlertService} from '../../../shared/alert-service';

@Component({
  selector: 'app-shopping-lists-item',
  templateUrl: './shopping-lists-item.component.html',
  styleUrls: ['./shopping-lists-item.component.scss']
})
export class ShoppingListsItemComponent implements OnChanges {

  @Input()
  item!: ShoppingList;
  name = "";

  @Output()
  deletedEvent= new EventEmitter()

  constructor(protected entityService: ShoppingListService, protected alertService: AlertService) {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.name = this.item.name;
  }

  hasChanges():boolean {
    return this.name !== this.item.name
  }

  save() {
    this.item.name = this.name;
    this.entityService.update(this.item).subscribe(() => this.alertService.success("Updated shopping list"))
  }

  cancelEdit() {
    this.name = this.item.name;
  }


  delete() {
    this.entityService.delete(this.item).subscribe(() => {
      this.alertService.success("Deleted shopping list")
      this.deletedEvent.emit(this.item.id)
    })
  }
}
