import {Component, Input, OnInit} from '@angular/core';
import {RecipeData} from "../domain/jumbo-recipe-response";
import {RecipeService} from "../../../masterdata/recipe/recipe.service";
import {Recipe} from "../../../domain/recipe";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-jumbo-recipe-detail',
  templateUrl: './jumbo-recipe-detail.component.html',
  styleUrls: ['./jumbo-recipe-detail.component.scss']
})
export class JumboRecipeDetailComponent implements OnInit {

  @Input()
  item: RecipeData;

  constructor(protected recipeService: RecipeService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  importInGrocy() {
    let recipe = new Recipe();
    recipe.base_servings = this.item.numberOfPortions;
    recipe.desired_servings = this.item.numberOfPortions;
    recipe.name = this.item.name;
    recipe.description = '<p>' + this.item.description + '</p>';
    recipe.description += '<ol>';
    this.item.instructions.forEach(instr => recipe.description += '<li>' + instr + '</li>')
    recipe.description += '</ol>'
    recipe.description += '<p>Bron: <a href="' + this.item.webUrl + '">Jumbo</a></p>';


    this.recipeService.add(recipe).subscribe(response => {
      if (response != null && response.error_message !== undefined) {
        this.openSnackBar("Error: " + response.error_message, "Ugh");
      } else {
        this.openSnackBar("Saved", "Great");
      }
    });
  }

  openSnackBar(message: string, entity: string) {
    this._snackBar.open(message, entity, {
      duration: 2000,
    });
  }
}
