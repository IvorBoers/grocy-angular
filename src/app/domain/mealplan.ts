import {Entity} from "./entity";

export class Mealplan implements Entity {
    static entityName = 'meal_plan'
    id: number
    day: string
    type: string
    recipe_id: number
    recipe_servings: number
    note: string
    product_id: number
    product_amount: number
    product_qu_id: number
    row_created_timestamp: string
    done: boolean
    section_id: number
}
