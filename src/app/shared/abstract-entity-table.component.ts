import {Entity} from "../domain/entity";
import {Component, OnInit, ViewChild} from "@angular/core";
import {MatLegacyTableDataSource as MatTableDataSource} from "@angular/material/legacy-table";
import {MatLegacyPaginator as MatPaginator} from "@angular/material/legacy-paginator";
import {MatSort} from "@angular/material/sort";
import {EntityService} from "./entity-service";

@Component({template: ''})
export abstract class AbstractEntityTableComponent<T extends Entity> implements OnInit {


  displayedColumns: string[] = ['actions'];
  dataSource: MatTableDataSource<T>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  protected constructor(private entityService: EntityService<T>) {

  }

  setDisplayedColumns(displayedEntityColumns: string[]) {
    this.displayedColumns = ['actions'];
    displayedEntityColumns.forEach(it => {
      this.displayedColumns.push(it)
    });
  }

  ngOnInit() {
    this.entityService.getAll().subscribe(all => {
      this.setTableData(all);
    });
  }


  setTableData(all: T[]) {
    this.dataSource = new MatTableDataSource<T>(all);
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

  delete(item: T) {
    this.entityService.delete(item).subscribe(response => {
      // remove from items. this.items.p
    });
  }
}
