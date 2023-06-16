import {Component, OnInit} from '@angular/core';
import {ShoppingListService} from './shopping-list.service';
import {ShoppingList} from '../../domain/shopping-list';

@Component({
  selector: 'app-shopping-lists',
  templateUrl: './shopping-lists.component.html',
  styleUrls: ['./shopping-lists.component.scss']
})
export class ShoppingListsComponent implements OnInit {

  items: ShoppingList[] = [];
  newName = '';


  constructor(protected entityService: ShoppingListService) {
  }

  ngOnInit(): void {
    this.entityService.getAll().subscribe(all => {
      this.items = all;
    });
  }

  addNewItem() {
    if (this.newName) {
      const newItem = new ShoppingList();
      newItem.name = this.newName;
      this.entityService.add(newItem).subscribe(() => this.ngOnInit())
    }
  }

  onDelete($event: any) {
    this.ngOnInit();
  }
}
