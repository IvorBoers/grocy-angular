import {ProductData} from "./product-data";
import {Product} from "../../../domain/product";
import {Quantityunit} from "../../../domain/quantityunit";

export interface JumboRecipeResponse {
  recipe: Recipe;
}

export interface Recipe {
  data: RecipeData;
}

export interface RecipeData {
  id:               string;
  name:             string;
  webUrl:           string;
  description:      string;
  nutritions:       Nutrition[];
  instructions:     string[];
  ingredients:      Ingredient[];
  numberOfPortions: number;
  imageInfo:        ImageInfo;
  cookingTip:       string;
  cookingTime:      number;
  calories:         number;
  dishType:         string;
  course:           string;
}

export interface ImageInfo {
  primaryView: PrimaryView[];
}

export interface PrimaryView {
  url:    string;
  width:  number;
  height: number;
}

export interface Ingredient {
  name:                string;
  quantity:            string;
  productInformation?: ProductInformation;

  grocyProduct?: Product;
  grocyQuantityUnit?: Quantityunit;
  grocyAmount?: number;
  grocyRecipeIngredientId: number
}

export interface ProductInformation {
  product:  ProductData;
  quantity: Quantity;
}

export interface Availability {
  sku:          string;
  availability: string;
}

export interface Badge {
  image: string;
}

export interface BadgesToDisplay {
  leftTop: Badge;
}

export interface Prices {
  price:            Price;
  promotionalPrice: Price;
  unitPrice:        UnitPrice;
}

export interface Price {
  currency: Currency;
  amount:   number;
}

export enum Currency {
  Eur = "EUR",
}

export interface UnitPrice {
  unit: string;
}

export interface QuantityOption {
  defaultAmount: number;
  minimumAmount: number;
  amountStep:    number;
  unit:          string;
  maximumAmount: number;
}

export interface Quantity {
  unit:   string;
  amount: number;
}

export interface Nutrition {
  name:     string;
  quantity: number;
}
