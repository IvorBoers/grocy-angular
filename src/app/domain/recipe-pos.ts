import {Entity} from "./entity";

export class RecipePos implements Entity {
    id:                              number;
    recipe_id:                       number;
    product_id:                      number;
    amount:                          number;
    note:                            string;
    qu_id:                           number;
    only_check_single_unit_in_stock: boolean;
    ingredient_group:                string;
    not_check_stock_fulfillment:     string;
    row_created_timestamp:           Date;
    variable_amount:                 number;
    price_factor:                    number;
    userfields:                      null;
}
