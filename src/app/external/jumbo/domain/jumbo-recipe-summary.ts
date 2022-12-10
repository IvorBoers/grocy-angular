import {ImageInfo} from "./jumbo-recipe-searchresponse";

export class JumboRecipeSummary {
  id: string;
  name: string;
  numberOfIngredients: number;
  numberOfPortions: number;
  webUrl: string;
  imageInfo: ImageInfo;
  cookingTime: number;
}
