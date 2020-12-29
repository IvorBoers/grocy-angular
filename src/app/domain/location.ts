import {Entity} from "./entity";

export class Location implements Entity {
  id: number
  name: string
  description: string
  row_created_timestamp: string
}
