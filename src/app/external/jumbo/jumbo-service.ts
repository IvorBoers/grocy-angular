import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {JumboProductResponse} from "./domain/jumbo-product-response";
import {JumboSearchResponse} from "./domain/jumbo-search-response";
import {JumboRecipesSearchResponse} from "./domain/jumbo-recipe-searchresponse";
import {JumboRecipeResponse} from "./domain/jumbo-recipe-response";

@Injectable({
  providedIn: 'root'
})
export class JumboService {
  baseUrl = '/jumbo-api/'
  version = '17';

  protected constructor(protected http: HttpClient) {
  }

  searchRecipes(offset: number, limit: number, query: string): Observable<JumboRecipesSearchResponse> {
    return this.http.get<JumboRecipesSearchResponse>(this.getRecipesSearchUrl(offset, limit, query));
  }

  getRecipe(id: string): Observable<JumboRecipeResponse> {
    return this.http.get<JumboRecipeResponse>(this.getRecipesUrl(id));
  }
  searchProducts(query: string): Observable<JumboSearchResponse> {
    return this.http.get<JumboSearchResponse>(this.getSearchUrl(0, 10, query));
  }
  private getProductsSearchUrl(offset: number, limit: number, q: string) {
    return this.baseUrl + "products?offset=" + offset + "&limit=" + limit + "&q=" + q;
  }

  private getSearchUrl(offset: number, limit: number, q: string) {
    return this.baseUrl + "search?offset=" + offset + "&limit=" + limit + "&q=" + q;
  }

  private getRecipesSearchUrl(offset: number, limit: number, q: string) {
    return this.baseUrl + "recipes?offset=" + offset + "&limit=" + limit + "&q=" + q;
  }

  getProduct(id: string): Observable<JumboProductResponse> {
    return this.http.get<JumboProductResponse>(this.getProductsUrl(id));
  }

  private getProductsUrl(id: string) {
    return this.baseUrl + "products/" + id;
  }
  private getRecipesUrl(id: string) {
    return this.baseUrl + "recipes/" + id;
  }
}
