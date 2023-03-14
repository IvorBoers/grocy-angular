import {Component, Input, OnInit} from '@angular/core';
import {AbstractEntityTableComponent} from "../../../../shared/abstract-entity-table.component";
import {RecipePos} from "../../../../domain/recipe-pos";
import {RecipePosService} from "../../recipe-pos.service";

@Component({
  selector: 'app-ingredient-view-list',
  templateUrl: './ingredient-view-list.component.html',
  styleUrls: ['./ingredient-view-list.component.scss']
})
export class IngredientViewListComponent implements OnInit {

  @Input() recipeId: number;
  items: RecipePos[] = [];

  constructor(protected recipePosService: RecipePosService) {
  }

  ngOnInit() {
    if (this.recipeId) {
      console.log("Getting ingredients")
      this.recipePosService.getAllWhere('recipe_id', "" + this.recipeId).subscribe(result => this.items = result);
    }
  }
}
