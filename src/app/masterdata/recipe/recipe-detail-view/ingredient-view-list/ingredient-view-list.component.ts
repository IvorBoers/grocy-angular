import {Component, Input, OnInit} from '@angular/core';
import {AbstractEntityTableComponent} from "../../../../shared/abstract-entity-table.component";
import {RecipePos} from "../../../../domain/recipe-pos";
import {RecipePosService} from "../../recipe-pos.service";
import {Recipe} from "../../../../domain/recipe";

@Component({
  selector: 'app-ingredient-view-list',
  templateUrl: './ingredient-view-list.component.html',
  styleUrls: ['./ingredient-view-list.component.scss']
})
export class IngredientViewListComponent implements OnInit {

  @Input() recipe: Recipe;
  items: RecipePos[] = [];

  constructor(protected recipePosService: RecipePosService) {
  }

  ngOnInit() {
    if (this.recipe) {
      console.log("Getting ingredients")
      this.recipePosService.getAllWhere('recipe_id', "" + this.recipe.id).subscribe(result => this.items = result);
    }
  }
}
