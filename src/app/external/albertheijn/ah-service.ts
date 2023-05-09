import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ProductSearchResponse} from './domain/product-search-response';

@Injectable({
  providedIn: 'root'
})
export class AhService {
  baseUrl = '/ah-api/mobile-services/'
  accessToken: string;
  refreshToken: string;
  expiryTime: Date;

  protected constructor(protected http: HttpClient) {
  }


  private getToken(): string {
    if (!this.accessToken || this.expiryTime > new Date()) {
      this.http.post(this.baseUrl + 'mobile-auth/v1/auth/token/anonymous', 'clientId: appie').subscribe(response => {
        this.accessToken = response['access_token'];
        this.refreshToken = response['refresh_token'];
        const expiresIn = response['expires_in'];
        // expires_in number
        this.expiryTime = new Date(new Date().getTime() + expiresIn * 1000);
      })
    }
    return this.accessToken;
  }

  // 'https://api.ah.nl/mobile-services/product/search/v2?sortOn=RELEVANCE',
  // params={"sortOn": sort, "page": page, "size": size, "query": query},
  // headers={**HEADERS, "Authorization": "Bearer {}".format(self._access_token.get('access_token'))}
  searchProducts(query: string, pageIndex: number, pageSize: number): Observable<ProductSearchResponse> {
    const token = this.getToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token
      })
    };

    return this.http.get<ProductSearchResponse>(
      this.baseUrl + 'product/search/v2?sortOn=RELEVANCE&query=' + query + '&page=' + pageIndex + '&size=' + pageSize, httpOptions);
  }
  searchRecipes(query: string, pageIndex: number, pageSize: number): Observable<ProductSearchResponse> {
    const token = this.getToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token
      })
    };

    return this.http.get<ProductSearchResponse>(
      this.baseUrl + 'product/search/v2?sortOn=RELEVANCE&query=' + query + '&page=' + pageIndex + '&size=' + pageSize, httpOptions);
  }
}
