import {Entity} from "./entity";

export class Mealplan implements Entity {
    static entityName = 'meal_plan'
    id?: number
    day= ''
    type= ''
    recipe_id?: number
    recipe_servings= 0
    note= ''
    product_id?: number
    product_amount?: number
    product_qu_id?: number
    row_created_timestamp= ''
    done = false
    section_id= 0
}
