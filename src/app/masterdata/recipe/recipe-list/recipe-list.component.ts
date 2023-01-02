import { Component } from '@angular/core';
import {AbstractEntityTableComponent} from "../../../shared/abstract-entity-table.component";
import {Recipe} from "../../../domain/recipe";
import {ProductService} from "../../product/product.service";
import {RecipeService} from "../recipe.service";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent  extends AbstractEntityTableComponent<Recipe> {

  constructor(protected recipeService: RecipeService) {
    super(recipeService);
    this.setDisplayedColumns(['name', 'image']);
  }

  ngOnInit() {
    this.recipeService.getAllWhere('type', 'normal').subscribe(all => {
      this.setTableData(all);
    });
  }
}
