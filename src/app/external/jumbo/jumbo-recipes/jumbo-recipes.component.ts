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
import {BreakpointObserver} from "@angular/cdk/layout";
import {MatDrawerMode, MatSidenav} from '@angular/material/sidenav';

@Component({
    selector: 'app-jumbo-recipes',
    templateUrl: './jumbo-recipes.component.html',
    styleUrls: ['./jumbo-recipes.component.scss']
})
export class JumboRecipesComponent implements OnInit {
    displayedColumns: string[] = ['image', 'name']
    dataSource: MatTableDataSource<JumboRecipeSummary> = new MatTableDataSource<JumboRecipeSummary>();

    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;


    query = "tomatenblokjes";
    detail?: RecipeData;
    grocyProductsByJumboId = new Map()
    selection: SelectionModel<JumboRecipeSummary | null> = new SelectionModel<JumboRecipeSummary | null>();
    loading = false;
    sideNavOpened = true;
    sideNavMode: MatDrawerMode = 'side'


    constructor(protected jumboService: JumboService, protected productService: ProductService, private observer: BreakpointObserver) {

    }

    ngOnInit(): void {
        this.productService.getAll().subscribe(result => this.createProductsMap(result))

        this.selection = new SelectionModel<JumboRecipeSummary | null>(false, [null]);
        this.selection.changed.subscribe(row => {
            if (row.added[0]) {
                this.showItem(row.added[0])
            }
        })

        this.observer.observe(['(max-width: 786px)']).subscribe((res) => {
            if (res.matches) {
                this.sideNavMode = 'over';
                this.sideNavOpened = false;
            } else {
                this.sideNavMode = 'side';
                this.sideNavOpened = true;
            }
        });
    }

    setTableData(all: JumboRecipeSummary[]) {
        this.dataSource = new MatTableDataSource<JumboRecipeSummary>(all);
        this.selection.clear()

        if (this.paginator) {
            this.dataSource.paginator = this.paginator;
            this.dataSource.paginator.firstPage()
        }
        this.dataSource.sort = this.sort;

        this.sideNavOpened = true;
        if (all.length > 0) {
            this.selection.select(all[0])
        }

        this.loading = false
    }

    private createProductsMap(products: Product[]) {
        if (products) {
            products.forEach(p => {
                if (p.userfields && p.userfields.jumboId) {
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

    toggleSideNav() {
        this.sideNavOpened = !this.sideNavOpened;
    }
}
