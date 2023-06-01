import {Entity} from "./entity";

export class RecipeIngredient implements Entity {
  static entityName = 'recipes_pos'
  id = 0
  recipe_id = 0
  product_id = 0
  amount = 0
  note = ''
  qu_id = 0
  only_check_single_unit_in_stock = ''
  ingredient_group = ''
  not_check_stock_fulfillment = ''
  row_created_timestamp = new Date();
  variable_amount = ''
  price_factor = 0
}
