import {Component} from '@angular/core';
import {AbstractMealplanItemComponent} from "../abstract-mealplan-item.component";
import {RecipeService} from "../../../../recipe/recipe.service";
import {MealplanService} from "../../../mealplan.service";
import {AlertService} from "../../../../../shared/alert-service";
import {Recipe} from "../../../../../domain/recipe";
import {Observable} from "rxjs";
import {FormControl} from "@angular/forms";
import {map, startWith} from "rxjs/operators";
import {FilesService} from "../../../../files/files-service";
import {Named} from "../../../../../domain/entity";
import {GrocyImagePipe} from "../../../../../shared/grocy-image-pipe.pipe";
import {Router} from "@angular/router";

@Component({
  selector: 'app-recipe-mealplan-item',
  templateUrl: './recipe-mealplan-item.component.html',
  styleUrls: ['./recipe-mealplan-item.component.scss']
})
export class RecipeMealplanItemComponent extends AbstractMealplanItemComponent {

  recipe: Recipe
  allRecipes: Recipe[] = []
  filteredRecipes: Observable<Recipe[]>
  recipesControl = new FormControl<Recipe>(undefined)
  servingsControl = new FormControl<number>(1)

  constructor(protected mealplanService: MealplanService, protected alertService: AlertService, protected recipeService: RecipeService,
              protected grocyImagePipe: GrocyImagePipe, protected router: Router) {
    super(mealplanService, alertService);
  }

  ngOnInit() {
    super.ngOnInit();

    if (this.mealplan && this.mealplan.recipe_id) {
      this.recipeService.getOne(this.mealplan.recipe_id).subscribe(response => {
        this.recipe = response
        this.recipesControl.setValue(response)
      })
    }
    this.filteredRecipes = this.recipesControl.valueChanges.pipe(
        startWith(''),
        map(value => {
          return value ? this._filterRecipes(value as string) : this.allRecipes.slice();
        }),
    )

  }

  setEditMode(mode: boolean) {
    if (this.allRecipes.length == 0 && mode) {
      this.recipeService.getAllWhere("type", "normal").subscribe(response => {
        this.allRecipes = response
        super.setEditMode(mode);
      })
    } else {
      super.setEditMode(mode);
    }

  }

  private _filterRecipes(name: string): Recipe[] {
    const filterValue = name && name.length > 0 ? name.toLowerCase() : '';

    return this.allRecipes.filter(option => option.name.toLowerCase().includes(filterValue));
  }

  updateMealplanFields() {
    if (this.recipesControl.value) {
      this.mealplan.recipe_id = this.recipesControl.value.id
      this.mealplan.recipe_servings = this.servingsControl.value
    }
  }

  getFileUrl(picture_file_name: string) {
    return this.grocyImagePipe.transform(picture_file_name, FilesService.group_recipepictures)
  }

  displayFn(named: Named) {
    if (named) {
      return named.name;
    }
    return '';
  }

  showRecipe() {
    this.router.navigate(['/recipe/' + this.recipe.id])
  }
}
