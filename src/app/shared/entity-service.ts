import {Entity} from "../domain/entity";
import {Observable} from "rxjs";
import {Constants} from "./constants";
import {HttpClient} from "@angular/common/http";
import {AddResponse} from "../domain/add-response";
import {UpdateResponse} from "../domain/update-response";

export abstract class EntityService<T extends Entity> {

  protected constructor(private http: HttpClient) {
  }

  abstract entityApiName(): string;

  private static getApiKeyPostfix() {
    return "?GROCY-API-KEY=" + Constants.API_KEY;
  }

  private getEntityApiUrl() {
    return Constants.GROCY_URL + "/api/objects/" + this.entityApiName();
  }

  getAll(): Observable<T[]> {
    const url = this.getEntityApiUrl() + EntityService.getApiKeyPostfix();
    return this.http.get<T[]>(url);
  }

  getOne(id: number): Observable<T> {
    const url = this.getEntityApiUrl() + "/" + id + EntityService.getApiKeyPostfix();
    return this.http.get<T>(url);
  }

  add(item: T): Observable<AddResponse> {
    const url = this.getEntityApiUrl() + EntityService.getApiKeyPostfix();
    return this.http.post<AddResponse>(url, item);
  }

  update(item: T): Observable<UpdateResponse> {
    const url = this.getEntityApiUrl() + "/" + item.id + EntityService.getApiKeyPostfix();
    let updatedItem = Object.assign({}, item);
    delete updatedItem.id;
    delete updatedItem["userfields"];

    return this.http.put<UpdateResponse>(url, updatedItem);
  }

  delete(item: T): Observable<UpdateResponse> {
    const url = this.getEntityApiUrl() + "/" + item.id + EntityService.getApiKeyPostfix();
    return this.http.delete<UpdateResponse>(url);
  }


}
