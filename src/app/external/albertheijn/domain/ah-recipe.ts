import {Product} from '../../../domain/product';
import {Quantityunit} from '../../../domain/quantityunit';

export class AhRecipe {
  id!: number
  title!: string
  alternateTitle!: string
  slugifiedTitle?: string
  courses: string[] = []
  modifiedAt?: Date
  publishedAt!: Date
  nutritions = new Nutritions()
  cookTime!: number
  ovenTime?: number
  waitTime?: number
  servings = new Servings()
  rating?: Rating
  images!: Image[]
  preparation!: Preparation
  videos?: Videos
  spiciness?: number
  magazines: Magazine[] = []
  description!: string
  tags: Tag[] = []
  ingredients: Ingredient[] = []
  kitchenAppliances: KitchenAppliance[] = []
  tips: Tip[] = []
  href!: string
  classifications!: string[]
  meta!: Meta
  cuisines: any
  nutriScore: any
  noIndex!: boolean
  seoCanonical: any
  __typename!: string
}

export class Nutritions {
  carbohydrates!: Nutrition
  energy!: Nutrition
  fat!: Nutrition
  fibers!: Nutrition
  protein!: Nutrition
  saturatedFat!: Nutrition
  sodium!: Nutrition
  sugar!: Nutrition
  __typename!: string
}

export class Nutrition {
  name!: string
  unit!: string
  value!: number
  __typename!: string
}

export class Servings {
  isChangeable!: boolean
  max!: number
  min!: number
  scale!: number
  type!: string
  number!: number
  __typename!: string
}

export class Rating {
  average!: number
  count!: number
  __typename!: string
}

export class Image {
  rendition!: string
  url!: string
  width!: number
  height!: number
  __typename!: string
}

export class Preparation {
  steps: string[] = []
  summary: string[] = []
  __typename!: string
}

export class Videos {
  preparation?: any
  tips?: any[]
  __typename!: string
}

export class Magazine {
  number!: string
  date!: Date
  title!: string
  issueSlug!: string
  type!: string
  __typename!: string
}

export class Tag {
  key!: string
  value!: string
  __typename!: string
}

export class Ingredient {
  id!: number
  name!: Name
  quantity!: number
  quantityUnit!: QuantityUnit
  servingsScale?: number
  text?: string
  __typename!: string

  grocyProduct?: Product;
  grocyQuantityUnit?: Quantityunit;
  grocyAmount?: number;
  grocyRecipeIngredientId?: number
}

export class Name {
  singular?: string
  plural?: string
  __typename!: string
}

export class QuantityUnit {
  singular?: string
  plural?: string
  __typename!: string
}

export class KitchenAppliance {
  quantity!: number
  name!: string
  scalable!: boolean
  __typename!: string
}

export class Tip {
  value!: string
  type!: string
  __typename!: string
}

export class Meta {
  description!: string
  title!: string
  __typename!: string
}

