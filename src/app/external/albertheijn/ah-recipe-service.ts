import {Apollo, gql} from 'apollo-angular';
import {AhRecipeSearchParams} from './domain/ah-recipe-search-params';
import {Injectable} from '@angular/core';

const GET_RECIPE_PRODUCT_SUGGESTIONS = gql`
query recipeProductSuggestions($options: RecipeProductSuggestionV2Input!) {
  recipeProductSuggestionsV2(options: $options) {
    ...recipeProductSuggestions
    __typename
  }
}

fragment recipeProductSuggestions on RecipeToProductSuggestionsResult {
  optional
  index
  ingredient {
    ...ingredient
    __typename
  }
  productSuggestion {
    ...productSuggestion
    __typename
  }
  alternativeSections {
    title
    description
    productSuggestions {
      ...productSuggestion
      __typename
    }
    __typename
  }
  __typename
}

fragment ingredient on RecipeProductSuggestionsIngredient {
  id
  name
  quantity
  quantityUnit
  index
  __typename
}

fragment productSuggestion on RecipeShoppableProductSuggestion {
  id
  quantity
  proposer
  product {
    ...product
    __typename
  }
  __typename
}

fragment product on Product {
  id
  hqId
  title
  brand
  category
  webPath
  minBestBeforeDays
  salesUnitSize
  availabilityLabel
  interactionLabel
  isSample
  highlight
  highlights
  summary
  smartLabel
  hasListPrice
  images(renditions: [D200X200, D400X400, D800X800]) {
    ...productImageSet
    __typename
  }
  availability {
    ...availability
    __typename
  }
  taxonomies {
    id
    name
    active
    parents
    __typename
  }
  tradeItem {
    gtin
    gtinRevisions
    __typename
  }
  price {
    ...price
    __typename
  }
  discount {
    ...discount
    __typename
  }
  virtualBundleProducts {
    quantity
    __typename
  }
  variant {
    ...variant
    __typename
  }
  variants {
    ...variant
    __typename
  }
  properties {
    code
    values
    __typename
  }
  otherSorts {
    ...productCard
    __typename
  }
  __typename
}

fragment productImageSet on ImageSet {
  width
  height
  url
  __typename
}

fragment availability on ProductAvailability {
  isOrderable
  online {
    status
    availableFrom
    __typename
  }
  unavailableForOrder {
    status
    __typename
  }
  __typename
}

fragment price on ProductPrice {
  now {
    amount
    __typename
  }
  was {
    amount
    __typename
  }
  unitInfo {
    price {
      amount
      __typename
    }
    description
    __typename
  }
  discount {
    segmentId
    description
    __typename
  }
  __typename
}

fragment discount on ProductDiscount {
  description
  promotionType
  segmentType
  subtitle
  theme
  tieredOffer
  __typename
}

fragment variant on ProductVariant {
  label
  type
  product {
    id
    hqId
    title
    brand
    category
    hasListPrice
    salesUnitSize
    availabilityLabel
    isSample
    highlight
    images(renditions: [D200X200]) {
      width
      height
      url
      __typename
    }
    price {
      ...price
      __typename
    }
    discount {
      ...discount
      __typename
    }
    properties {
      code
      values
      __typename
    }
    __typename
  }
  __typename
}

fragment productCard on Product {
  id
  hqId
  title
  brand
  category
  webPath
  minBestBeforeDays
  salesUnitSize
  availabilityLabel
  interactionLabel
  isSample
  highlight
  highlights
  smartLabel
  hasListPrice
  images(renditions: [D200X200]) {
    width
    height
    url
    __typename
  }
  availability {
    ...availability
    __typename
  }
  tradeItem {
    gtin
    gtinRevisions
    __typename
  }
  price {
    ...price
    __typename
  }
  discount {
    ...discount
    __typename
  }
  virtualBundleProducts {
    quantity
    __typename
  }
  variant {
    ...variant
    __typename
  }
  variants {
    ...variant
    __typename
  }
  properties {
    code
    values
    __typename
  }
  __typename
}`;

const RECIPE_SHOPPABLE_SAVE_SELECTION = gql`
mutation recipeShoppableSaveSelection($params: RecipeShoppableSaveSelectionParams!) {
  recipeShoppableSaveSelectionV2(productSelection: $params) {
    status
    __typename
  }
}`;

const GET_RECIPE_DETAIL = gql`
query recipe($id: Int!) {
  recipe(id: $id) {
    ...recipe
    __typename
  }
}

fragment recipe on Recipe {
  id
  title
  alternateTitle
  slugifiedTitle
  courses
  modifiedAt
  publishedAt
  nutritions {
    ...recipeNutritionInfo
    __typename
  }
  cookTime
  ovenTime
  waitTime
  servings {
    isChangeable
    max
    min
    scale
    type
    number
    __typename
  }
  rating {
    average
    count
    __typename
  }
  images(
    renditions: [D220X162, D302X220, D440X324, D612X450, D1024X748, D1224X900]
  ) {
    ...recipeImage
    __typename
  }
  preparation {
    steps
    summary
    __typename
  }
  videos {
    preparation {
      ...recipeVideo
      __typename
    }
    tips {
      ...recipeVideo
      __typename
    }
    __typename
  }
  spiciness
  magazines {
    number
    date
    title
    issueSlug
    type
    __typename
  }
  description
  tags {
    key
    value
    __typename
  }
  ingredients {
    ...recipeIngredient
    __typename
  }
  kitchenAppliances {
    quantity
    name
    scalable
    __typename
  }
  tips {
    value
    type
    __typename
  }
  href
  classifications
  meta {
    description
    title
    __typename
  }
  cuisines
  nutriScore
  noIndex
  seoCanonical
  __typename
}

fragment recipeNutritionInfo on RecipeNutritionInfo {
  carbohydrates {
    ...recipeNutrition
    __typename
  }
  energy {
    ...recipeNutrition
    __typename
  }
  fat {
    ...recipeNutrition
    __typename
  }
  fibers {
    ...recipeNutrition
    __typename
  }
  protein {
    ...recipeNutrition
    __typename
  }
  saturatedFat {
    ...recipeNutrition
    __typename
  }
  sodium {
    ...recipeNutrition
    __typename
  }
  sugar {
    ...recipeNutrition
    __typename
  }
  __typename
}

fragment recipeNutrition on RecipeNutrition {
  name
  unit
  value
  __typename
}

fragment recipeImage on RecipeImage {
  rendition
  url
  width
  height
  __typename
}

fragment recipeVideo on RecipeVideo {
  id
  category
  title
  slug
  duration
  description
  descriptionHtml
  publication
  views
  images {
    ...recipeVideoImages
    __typename
  }
  streams {
    ...recipeVideoStreams
    __typename
  }
  __typename
}

fragment recipeVideoImages on RecipeVideoImages {
  sd
  thumbnail
  __typename
}

fragment recipeVideoStreams on RecipeVideoStreams {
  sd
  hd
  __typename
}

fragment recipeIngredient on RecipeIngredient {
  id
  name {
    ...singularPlural
    __typename
  }
  quantity
  quantityUnit {
    ...singularPlural
    __typename
  }
  servingsScale
  text
  __typename
}

fragment singularPlural on SingularPluralName {
  singular
  plural
  __typename
}`;

const GET_RECIPES = gql`
query recipeSearch($query: RecipeSearchParams!) {
  recipeSearch(query: $query) {
 ...recipeSearch
    __typename
  }
}

fragment recipeSearch on RecipeSearchResult {
  correctedSearchTerm
  filters {
    ...recipeSearchFilterGroup
    __typename
  }
  page {
    total
    __typename
  }
  result {
    ...recipeSummary
    __typename
  }
  __typename
}

fragment recipeSearchFilterGroup on RecipeSearchResultFilterGroup {
  label
  name
  filters {
    ...recipeSearchFilter
    __typename
  }
  __typename
}

fragment recipeSearchFilter on RecipeSearchResultFilter {
  count
  group
  label
  name
  selected
  __typename
}

fragment recipeSummary on RecipeSummary {
  id
  title
  alternateTitle
  slug
  diet
  courses
  modifiedAt
  publishedAt
  nutrition {
    ...recipeNutritionInfo
    __typename
  }
  time {
    cook
    oven
    wait
    __typename
  }
  serving {
    number
    type
    __typename
  }
  rating {
    average
    count
    __typename
  }
  images(
    renditions: [
      D220X162
      D302X220
      D440X324
      D612X450
      D1024X748
      D1224X900
      XXS
      XS
      S
      M
      L
      XL
    ]
  ) {
    ...recipeImage
    __typename
  }
  source {
    type
    url
    hostName
    __typename
  }
  __typename
}

fragment recipeNutritionInfo on RecipeNutritionInfo {
  carbohydrates {
    ...recipeNutrition
    __typename
  }
  energy {
    ...recipeNutrition
    __typename
  }
  fat {
    ...recipeNutrition
    __typename
  }
  fibers {
    ...recipeNutrition
    __typename
  }
  protein {
    ...recipeNutrition
    __typename
  }
  saturatedFat {
    ...recipeNutrition
    __typename
  }
  sodium {
    ...recipeNutrition
    __typename
  }
  sugar {
    ...recipeNutrition
    __typename
  }
  __typename
}

fragment recipeNutrition on RecipeNutrition {
  name
  unit
  value
  __typename
}

fragment recipeImage on RecipeImage {
  rendition
  url
  width
  height
  __typename
}
`;

@Injectable({
  providedIn: 'root'
})
export class AhRecipeService {
  constructor(private apollo: Apollo) {
  }

  getRecipes(query: string, start: number) {
    const queryParams = new AhRecipeSearchParams();
    queryParams.searchText = query;
    queryParams.start = start;


    return this.apollo.watchQuery<any>({
      query: GET_RECIPES,
      variables: {
        query: queryParams
      }
    }).valueChanges;
  }

  getRecipe(id: number) {
    return this.apollo.watchQuery<any>({
      query: GET_RECIPE_DETAIL,
      variables: {
        id: id
      }
    }).valueChanges;
  }
}
