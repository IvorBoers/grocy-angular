import {Component, OnInit, ViewChild} from '@angular/core';
import {JumboService} from "../jumbo-service";
import {JumboRecipeSummary} from "../domain/jumbo-recipe-summary";
import {RecipeData} from "../domain/jumbo-recipe-response";
import {ProductService} from "../../../masterdata/product/product.service";
import {Product} from "../../../domain/product";
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";

@Component({
  selector: 'app-jumbo-recipes',
  templateUrl: './jumbo-recipes.component.html',
  styleUrls: ['./jumbo-recipes.component.scss']
})
export class JumboRecipesComponent implements OnInit {
  displayedColumns: string[] = ['image', 'name', 'actions']
  dataSource: MatTableDataSource<JumboRecipeSummary>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  query = "tomatenblokjes";
  detail: RecipeData;
  grocyProductsByJumboId = new Map()

  constructor(protected jumboService: JumboService, protected productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getAll().subscribe(result => this.createProductsMap(result))
  }

  setTableData(all: JumboRecipeSummary[]) {
    this.dataSource = new MatTableDataSource<JumboRecipeSummary>(all);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  private createProductsMap(products: Product[]) {
    products.forEach(p => {
      if (p.userfields.jumboId) {
        p.userfields.jumboId.split(',').forEach(sub => this.grocyProductsByJumboId.set(sub, p));
      }
    })
  }

  searchRecipe() {
    this.jumboService.searchRecipes(0, 100, this.query).subscribe(result => this.setTableData(result.recipes.data));
  }

  showItem(element: JumboRecipeSummary) {
    this.jumboService.getRecipe(element.id).subscribe(result => this.detail = result.recipe.data);
  }

}
