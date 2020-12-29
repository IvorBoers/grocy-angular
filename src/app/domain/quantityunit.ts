import {Entity} from "./entity";

export class Quantityunit implements Entity {
  id: number
  name: string
  name_plural: string
  description: string
  row_created_timestamp: string
  plural_forms: string
  userfields: [];
}
