import {Entity} from "../domain/entity";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {AddResponse} from "../domain/add-response";
import {UpdateResponse} from "../domain/update-response";
import {AbstractGrocyService} from "./abstract-grocy-service";
import {catchError} from "rxjs/operators";
import {AlertService} from "./alert-service";

export abstract class EntityService<T extends Entity> extends AbstractGrocyService {


  protected constructor(http: HttpClient, private entityName: string, alertService: AlertService) {
    super(http, "objects/" + entityName, alertService);
  }

  getAll(): Observable<T[]> {
    return this.http.get<T[]>(this.getUrl())
      .pipe(
        catchError(this.handleError.bind(this))
      );
  }

  getAllLike(field: string, query: string): Observable<T[]> {
    return this.http.get<T[]>(this.getUrl() + '&query[]=' + field + "~" + query)
      .pipe(
        catchError(this.handleError.bind(this))
      );
  }

  getAllWhere(field: string, query: string): Observable<T[]> {
    return this.http.get<T[]>(this.getUrl() + '&query[]=' + field + "=" + query)
      .pipe(
        catchError(this.handleError.bind(this))
      );
  }

  getOne(id: number): Observable<T> {
    return this.http.get<T>(this.getUrl("/" + id))
      .pipe(
        catchError(this.handleError.bind(this))
      );
  }

  add(item: T): Observable<AddResponse> {
    return this.http.post<AddResponse>(this.getUrl(), item);
  }

  update(item: T): Observable<UpdateResponse> {
    let updatedItem = Object.assign({}, item);
    delete updatedItem.id;
    delete updatedItem["userfields"]; // userfields need to be updated with other API.

    return this.http.put<UpdateResponse>(this.getUrl("/" + item.id), updatedItem);
  }

  delete(item: T): Observable<UpdateResponse> {
    return this.http.delete<UpdateResponse>(this.getUrl("/" + item.id));
  }


}
