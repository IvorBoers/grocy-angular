import {JumboRecipeSummary} from "./jumbo-recipe-summary";

export interface JumboRecipesSearchResponse {
  recipes: Recipes;
  filters: Filters;
}

export interface Filters {
  data: FilterData[];
}

export interface FilterData {
  type:   Type;
  items:  Item[];
  title?: string;
}

export interface Item {
  id:         string;
  title:      string;
  count:      number;
  isCategory: boolean;
}

export enum Type {
  Group = "group",
  Quickfilter = "quickfilter",
}

export interface Recipes {
  data:   JumboRecipeSummary[];
  total:  number;
  offset: number;
}

export interface ImageInfo {
  primaryView: PrimaryView[];
}

export interface PrimaryView {
  url:    string;
  width:  number;
  height: number;
}
