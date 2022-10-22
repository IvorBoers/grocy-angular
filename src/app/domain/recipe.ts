import {RecipeUserfields} from "./recipe-userfields";
import {Entity} from "./entity";

export class Recipe implements Entity {
  id:                     number;
  name:                   string;
  description:            string;
  row_created_timestamp:  Date;
  picture_file_name:      null;
  base_servings:          number;
  desired_servings:       number;
  not_check_shoppinglist: string;
  type:                   string;
  product_id:             number;
  userfields:             RecipeUserfields;
}
