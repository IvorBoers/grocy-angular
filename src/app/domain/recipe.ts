import {RecipeUserfields} from "./recipe-userfields";
import {Entity, Named} from "./entity";

export class Recipe implements Entity, Named {
  static entityName = 'recipes'
  id ?: number
  name = ''
  description = ''
  row_created_timestamp = new Date();
  picture_file_name ?: string
  base_servings = 0
  desired_servings = 0
  not_check_shoppinglist = ''
  type = ''
  product_id = 0
  userfields ?: RecipeUserfields
}
