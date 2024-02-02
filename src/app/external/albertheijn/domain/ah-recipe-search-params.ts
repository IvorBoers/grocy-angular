import {AhGroupFilter} from './ah-group-filter';

export class AhRecipeSearchParams {
  searchText = "";
  filters: AhGroupFilter[] = [];
  sortBy = "NEWEST"
  start = 0
  size = 35
  favoriteRecipeIds: [] = []
  includeAggregations = false
  ingredients = []
}
