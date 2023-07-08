import {Component, OnInit} from '@angular/core';
import {ShoppingListService} from '../masterdata/shopping-lists/shopping-list.service';
import {ShoppingListItemService} from './shopping-list-item.service';
import {ShoppingList} from '../domain/shopping-list';
import {ProductService} from '../masterdata/product/product.service';
import {ProductgroupService} from '../masterdata/productgroup/productgroup.service';
import {ShoppingListModel} from './shopping-list-model';
import {QuantityunitService} from '../masterdata/quantityunit/quantityunit.service';
import {Productgroup} from '../domain/productgroup';
import {ShoppingListItem} from '../domain/shopping-list-item';
import {ShoppinglistStockService} from './shoppinglist-stock.service';

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
  newItem?: ShoppingListModel;
  newItemExpanded = false;
  dense = false;
  moveToList?: ShoppingList;
  moveActive = false;
  filterText: any;

  constructor(protected listService: ShoppingListService, protected itemService: ShoppingListItemService,
              protected productService: ProductService, protected productgroupService: ProductgroupService,
              protected quService: QuantityunitService, protected shoppinglistStockService: ShoppinglistStockService) {
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
          this.startNewItem();
        });
    }
  }

  private addProducts() {
    let idSet = new Set<number>();
    this.items.forEach(it => {
      if (it.item.product_id) idSet.add(it.item.product_id);
    })
    if (idSet.size > 0) {
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
  }

  private addProductGroups() {
    if (this.productGroups.length > 0) {
      this.updateProductGroupsOnItems();
    } else {
      this.productgroupService.getAll().subscribe(response => {
        this.productGroups = response;
        this.updateProductGroupsOnItems();
      })
    }
  }

  private updateProductGroupsOnItems() {
    this.productGroups.forEach(pg => {
      this.items.forEach(it => {
        if (it.product?.product_group_id === pg.id) {
          it.group = pg;
        }
      })
    });
  }

  private addQus() {
    let idSet = new Set<number>();
    this.items.forEach(it => {
      if (it.item.qu_id) idSet.add(it.item.qu_id);
    })
    if (idSet.size > 0) {
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
  }

  getFilledGroups() {
    let pgSet = new Set<Productgroup>();
    this.items.forEach(it => {
      if (it.group && !this.isFilteredOut(it)) {
        pgSet.add(it.group)
      }
    });
    return Array.from(pgSet).sort((a, b) => a.name.localeCompare(b.name));
  }

  itemsForGroup(pg: Productgroup) {
    return this.items
      .filter(it => it.group?.id === pg.id && !this.isFilteredOut(it))
      .sort((a, b) => a.product?.name.localeCompare(b.product?.name ?? '') ?? 0)
  }

  expandNewItem() {
    console.log("expanding");
    this.newItemExpanded = !this.newItemExpanded;
  }

  private startNewItem() {
    if (this.selectedList) {
      console.log("starting new")
      this.newItem = new ShoppingListModel(new ShoppingListItem());
      this.newItem.list = this.selectedList;
      this.newItem.item.shopping_list_id = this.selectedList.id;
    }
  }

  onSaveItem($event: ShoppingListModel) {
    if ($event.item.id) {
      console.log("is update")
      this.itemService.update($event.item).subscribe(() => {
        this.itemService.showAlertSuccess("Update successful");
        const find = this.items.find(it => it.item.id == $event.item.id);
        if (find) {
          find.item = $event.item;
          find.qu = $event.qu;
          if (find.product?.id !== $event.product?.id) {
            find.group = this.productGroups.find(it => it.id === $event.group?.id)
            find.product = $event.product;
            this.items = Object.assign([], this.items);
          }
        }

      });
    } else {
      console.log("is adding")
      this.itemService.add($event.item).subscribe(it => {
        console.log("add response: " + JSON.stringify(it));
        this.newItem = undefined
        // FIXME prevent reload
        this.loadItems();
      });
    }
  }

  onCancelNewItem($event: ShoppingListModel) {
    console.log("On Cancel")
    this.newItem = undefined;
  }

  onDeleteItem($event: ShoppingListModel) {
    console.log("On Delete")
    this.itemService.delete($event.item).subscribe(ur => {
      let arr = this.items;
      arr.splice(arr.indexOf($event), 1);
      this.items = arr;
      // this.itemService.showAlertSuccess("Delete successful")
    })

  }

  selectAll() {
    if (this.allSelected()) {
      this.items.forEach(it => it.checked = false);
    } else {
      this.items.forEach(it => it.checked = true);
    }
  }

  anySelected(): boolean {
    return this.items.find(it => it.checked) !== undefined;
  }

  allSelected(): boolean {
    return this.items.find(it => !it.checked) === undefined;
  }

  selectDone() {
    this.items.forEach(it => {
      if (it.item.done) {
        it.checked = true
      }
    });
  }

  deleteSelected() {
    this.items
      .filter(it => it.checked)
      .forEach(it => this.onDeleteItem(it))
  }

  addMissingItems() {
    if (this.selectedList?.id) {
      this.shoppinglistStockService.addMissingStockToShoppingList(this.selectedList?.id)
        .subscribe(() => this.loadItems());
    }
  }

  preMoveSelected() {
    this.moveToList = this.selectedList;
    this.moveActive = !this.moveActive;
  }

  moveSelected() {
    this.items
      .filter(it => it.checked)
      .forEach(it => {
        if (this.moveToList) {
          it.list = this.moveToList;
          it.item.shopping_list_id = this.moveToList.id;
          this.itemService.update(it.item).subscribe(() => this.loadItems());
          this.moveActive = false;
        }
      });
  }

  isFilteredOut(item: ShoppingListModel): boolean {
    if (this.filterText && item.product) {
      const upperCasedProductName = item.product.name.toUpperCase();
      const upperCasedSearchText = this.filterText.toUpperCase();
      return !upperCasedProductName.includes(upperCasedSearchText);
    }
    return false;
  }
}
