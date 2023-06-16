import {Component, Input, OnInit} from '@angular/core';
import {ShoppingListModel} from '../shopping-list-model';

@Component({
  selector: 'app-shopping-list-item',
  templateUrl: './shopping-list-item.component.html',
  styleUrls: ['./shopping-list-item.component.scss']
})
export class ShoppingListItemComponent implements OnInit {

  @Input()
  item!: ShoppingListModel;

  constructor() {
  }

  ngOnInit() {

  }
}
