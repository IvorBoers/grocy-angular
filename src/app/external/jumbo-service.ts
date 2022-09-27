import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {JumboProductResponse} from "./jumbo/domain/jumbo-product-reponse";
import {JumboSearchResponse} from "./jumbo/domain/jumbo-search-response";

@Injectable({
  providedIn: 'root'
})
export class JumboService {
  baseUrl = '/jumbo'
  version = '17';

  protected constructor(protected http: HttpClient) {
  }

  searchProducts(query: string): Observable<JumboSearchResponse> {
    return this.http.get<JumboSearchResponse>(this.getSearchUrl(0, 10, query));
  }

  private getSearchUrl(offset: number, limit: number, q: string) {
    return this.baseUrl + "search?offset=" + offset + "&limit=" + limit + "&q=" + q;
  }

  getProduct(id: string): Observable<JumboProductResponse> {
    return this.http.get<JumboProductResponse>(this.getProductsUrl(id));
  }

  private getProductsUrl(id: string) {
    return this.baseUrl + "products/" + id;
  }
}
