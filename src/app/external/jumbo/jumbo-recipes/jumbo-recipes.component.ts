import { Component, OnInit } from '@angular/core';
import {JumboService} from "../jumbo-service";
import {JumboRecipeSummary} from "../domain/jumbo-recipe-summary";
import {RecipeData} from "../domain/jumbo-recipe-response";

@Component({
  selector: 'app-jumbo-recipes',
  templateUrl: './jumbo-recipes.component.html',
  styleUrls: ['./jumbo-recipes.component.scss']
})
export class JumboRecipesComponent implements OnInit {
  displayedColumns: string[] = ['image', 'name', 'actions']
  query = "pizza";
  items: JumboRecipeSummary[];
  detail: RecipeData;

  constructor(protected jumboService: JumboService) { }

  ngOnInit(): void {
  }

  searchRecipe() {
    this.jumboService.searchRecipes(this.query).subscribe(result => this.items = result.recipes.data);
  }

  showItem(element: JumboRecipeSummary) {
    this.jumboService.getRecipe(element.id).subscribe(result => this.detail = result.recipe.data);
  }
}
