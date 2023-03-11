import {Entity, Named} from "./entity";

export class MealplanSection implements Entity, Named {
  id: number;
  name: string;
  sort_number: number = -1;
  time_info: string;
}
