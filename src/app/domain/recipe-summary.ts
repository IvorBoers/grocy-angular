import {MealplanSection} from './mealplan-section';
import {Mealplan} from './mealplan';

export interface RecipeSummary {
  source : string
  id: any
  name: string
  viewUrl: string
  imageUrl: string
  getMealplan(day: string, mealplanSection: MealplanSection | undefined, mealplanServings: number): Mealplan
  getRouterCommand(): string
}
