import {GrocyIngredient} from '../domain/grocy-ingredient';

export class IngredientWrapper<T> {
  constructor(public externalIngredient: T) {
  }
  grocyIngredient = new GrocyIngredient();
}
