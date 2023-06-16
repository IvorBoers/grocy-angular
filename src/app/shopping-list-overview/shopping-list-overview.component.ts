import {Component, OnInit} from '@angular/core';
import {ShoppingListService} from '../masterdata/shopping-lists/shopping-list.service';
import {ShoppingListItemService} from './shopping-list-item.service';
import {ShoppingList} from '../domain/shopping-list';
import {ProductService} from '../masterdata/product/product.service';
import {ProductgroupService} from '../masterdata/productgroup/productgroup.service';
import {ShoppingListModel} from './shopping-list-model';
import {QuantityunitService} from '../masterdata/quantityunit/quantityunit.service';
import {Productgroup} from '../domain/productgroup';

@Component({
  selector: 'app-shopping-list-overview',
  templateUrl: './shopping-list-overview.component.html',
  styleUrls: ['./shopping-list-overview.component.scss']
})
export class ShoppingListOverviewComponent implements OnInit {
  lists: ShoppingList[] = [];
  items: ShoppingListModel[] = [];
  selectedList?: ShoppingList;
  productGroups: Productgroup[] = [];

  constructor(protected listService: ShoppingListService, protected itemService: ShoppingListItemService,
              protected productService: ProductService, protected productgroupService: ProductgroupService,
              protected quService: QuantityunitService) {
  }

  ngOnInit() {
    this.listService.getAll()
      .subscribe(response => {
        this.lists = response;
        if (this.lists.length > 0) {
          this.selectedList = this.lists[0]
          this.loadItems();
        }
      });
  }

  loadItems() {
    console.log("Selected list: " + (this.selectedList?.name ?? "no list"))
    if (this.selectedList) {
      this.itemService.getAllWhere("shopping_list_id", '' + this.selectedList.id)
        .subscribe(response => {
          this.items = [];
          response.forEach(it => this.items.push(new ShoppingListModel(it)));
          this.addProducts();
          this.addQus();
        });
    }
  }

  private addProducts() {
    let idSet = new Set<number>();
    this.items.forEach(it => {
      if (it.item.product_id) idSet.add(it.item.product_id);
    })
    this.productService.getByIdSet(idSet).subscribe(response => {
      response.forEach(p => {
        this.items.forEach(it => {
          if (it.item.product_id === p.id) {
            it.product = p;
          }
        })
      })
      this.addProductGroups();
    })
  }

  private addProductGroups() {
    let idSet= new Set<number>();
    this.items.forEach(it => {
      if (it.product?.product_group_id) idSet.add(it.product.product_group_id);
    })
    this.productgroupService.getByIdSet(idSet).subscribe(response => {
      this.productGroups = response;
      this.productGroups.sort((a, b) => a.name.localeCompare(b.name));
      response.forEach(pg => {
        this.items.forEach(it => {
          if (it.product?.product_group_id === pg.id) {
            it.group = pg;
          }
        })
      })
    })
  }

  private addQus() {
    let idSet = new Set<number>();
    this.items.forEach(it => {
      if (it.item.qu_id) idSet.add(it.item.qu_id);
    })
    this.quService.getByIdSet(idSet).subscribe(response => {
      response.forEach(q => {
        this.items.forEach(it => {
          if (it.item.qu_id === q.id) {
            it.qu = q;
          }
        })
      })
    })
  }

  itemsForGroup(pg: Productgroup) {
    return this.items.filter(it => it.group?.id === pg.id)
  }
}
