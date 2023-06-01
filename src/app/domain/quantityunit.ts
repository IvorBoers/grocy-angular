import {Entity, Named} from "./entity";

export class Quantityunit implements Entity, Named {
  id= 0
  name= ''
  name_plural= ''
  description= ''
  row_created_timestamp= ''
  plural_forms= ''
  userfields?: [];
}
