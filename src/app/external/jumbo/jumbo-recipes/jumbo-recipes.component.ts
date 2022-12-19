import {Component, OnInit, ViewChild} from '@angular/core';
import {JumboService} from "../jumbo-service";
import {JumboRecipeSummary} from "../domain/jumbo-recipe-summary";
import {RecipeData} from "../domain/jumbo-recipe-response";
import {ProductService} from "../../../masterdata/product/product.service";
import {Product} from "../../../domain/product";
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";
import {SelectionModel} from "@angular/cdk/collections";

@Component({
  selector: 'app-jumbo-recipes',
  templateUrl: './jumbo-recipes.component.html',
  styleUrls: ['./jumbo-recipes.component.scss']
})
export class JumboRecipesComponent implements OnInit {
  displayedColumns: string[] = ['image', 'name']
  dataSource: MatTableDataSource<JumboRecipeSummary>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  query = "tomatenblokjes";
  detail: RecipeData;
  grocyProductsByJumboId = new Map()
  selection: SelectionModel<JumboRecipeSummary>;
  loading = false;

  constructor(protected jumboService: JumboService, protected productService: ProductService) {
    this.selection = new SelectionModel<JumboRecipeSummary>(false, null);
    this.selection.changed.subscribe(row => {
      const selectedRecipe = row.added[0]
      if (row.added[0]) {
        this.showItem(row.added[0])
      }
    })
  }

  ngOnInit(): void {
    this.productService.getAll().subscribe(result => this.createProductsMap(result))
  }

  setTableData(all: JumboRecipeSummary[]) {
    this.dataSource = new MatTableDataSource<JumboRecipeSummary>(all);
    if (this.paginator) {
      this.dataSource.paginator = this.paginator;
      this.dataSource.paginator.firstPage()
    }
    this.dataSource.sort = this.sort;

    this.selection.clear()
    if (all.length > 0) {
      this.selection.select(all[0])
    }
    this.loading = false
  }

  private createProductsMap(products: Product[]) {
    if (products) {
      products.forEach(p => {
        if (p.userfields.jumboId) {
          p.userfields.jumboId.split(',').forEach(sub => this.grocyProductsByJumboId.set(sub, p));
        }
      })
    }
  }

  searchRecipe() {
    this.selection.clear()
    this.setTableData([])
    this.loading = true

    this.jumboService.searchRecipes(0, 100, this.query).subscribe(result => this.setTableData(result.recipes.data));
  }

  showItem(element: JumboRecipeSummary) {
    this.jumboService.getRecipe(element.id).subscribe(result => this.detail = result.recipe.data);
  }

}
