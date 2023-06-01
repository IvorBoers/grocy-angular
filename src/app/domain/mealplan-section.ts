import {Entity, Named} from "./entity";

export class MealplanSection implements Entity, Named {
  id= 0;
  sort_number: number = -1;
  time_info = '';
  name = '';

}
