import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {JumboResponse} from "./jumbo/domain/jumbo-response";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class JumboService {
  baseUrl = '/jumbo-search'
  version = '17';

  protected constructor(protected http: HttpClient) {
  }

  searchProducts(query: string): Observable<JumboResponse> {
    return this.http.get<JumboResponse>(this.getSearchUrl(0, 10, query));//, {'headers': this.getHttpHeaders()});
  }

  private getSearchUrl(offset: number, limit: number, q: string) {
    return this.baseUrl + "?offset=" + offset + "&limit=" + limit + "&q=" + q;
  }
}
