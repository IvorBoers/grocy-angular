import {AhRecipeImage} from './ah-recipe-image';

export class AhRecipeSummary {
  id!: number
  title!: string
  alternateTitle?: string
  slug!: string
  diet: any
  courses: any
  modifiedAt?: string
  publishedAt?: string
  nutrition: any
  time: any
  serving: any
  rating : any
  images: AhRecipeImage[] = []
  source: any

}
