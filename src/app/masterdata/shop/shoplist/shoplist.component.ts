import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {ShoppingLocationService} from "../shopping-location-service/shopping-location.service";
import {ShoppingLocation} from "../../../domain/shopping-location";
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";

@Component({
  selector: 'app-shoplist',
  templateUrl: './shoplist.component.html',
  styleUrls: ['./shoplist.component.scss']
})
export class ShoplistComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['actions', 'name', 'description'];
  items: ShoppingLocation[] = [];
  dataSource: MatTableDataSource<ShoppingLocation>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private shopService: ShoppingLocationService) { }

  ngOnInit() {
    this.shopService.getAll().subscribe(all => {
      this.items = all;
      this.dataSource = new MatTableDataSource<ShoppingLocation>(all);
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  delete(item: ShoppingLocation) {
    this.shopService.delete(item).subscribe(response => {
      // remove from items. this.items.p
    });
  }
}
