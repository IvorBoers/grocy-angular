import {QuantityOption} from "./quantity-option";
import {Prices} from "./prices";
import {ImageInfo} from "./image-info";
import {BadgesToDisplay} from "./badges-to-display";
import {Availability} from "./availability";

export interface ProductData {
  id:                     string;
  title:                  string;
  quantityOptions:        QuantityOption[];
  prices:                 Prices;
  available:              boolean;
  productType:            string;
  crossSellSKUList:       any[];
  nixProduct:             boolean;
  quantity:               string;
  imageInfo:              ImageInfo;
  topLevelCategory:       string;
  topLevelCategoryId:     string;
  sample:                 boolean;
  availability:           Availability;
  hasRelatedProducts:     boolean;
  nutritionalInformation: NutritionalInformation[];
  regulatedTitle:         string;
  allergyText:            string;
  nutritionalClaimInfo:   string;
  ingredientInfo:         IngredientInfo[];
  allergyInfo:            AllergyInfo;
  usageAndSafetyInfo:     UsageAndSafetyInfo;
  additiveInfo:           AdditiveInfo;
  brandInfo:              BrandInfo;
  badgesToDisplay:        BadgesToDisplay;
}


export interface AdditiveInfo {
  thirdparty: string;
}

export interface AllergyInfo {
  allergyText: string;
}

export interface BrandInfo {
  manufacturerAddress: string;
  webAddress:          string;
}


export interface IngredientInfo {
  productTitle: string;
  ingredients:  Ingredient[];
}

export interface Ingredient {
  name:              string;
  containsAllergens: boolean;
  highlights?:       Highlight[];
}

export interface Highlight {
  length: number;
  offset: number;
}


export interface NutritionalInformation {
  productTitle:          string;
  nutritionalGuidelines: NutritionalGuidelines;
  nutritionalData:       NutritionalData;
}

export interface NutritionalData {
  entries:     NutritionalDataEntry[];
  portionSize: string;
}

export interface NutritionalDataEntry {
  name:            string;
  valuePer100g:    string;
  valuePerPortion: string;
}

export interface NutritionalGuidelines {
  entries: NutritionalGuidelinesEntry[];
}

export interface NutritionalGuidelinesEntry {
  name:     string;
  quantity: string;
}

export interface UsageAndSafetyInfo {
  storageType: string;
}
