import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {UpdateResponse} from "../domain/update-response";
import {AbstractGrocyService} from "./abstract-grocy-service";
import {AlertService} from "./alert-service";

export class UserfieldsService<T> extends AbstractGrocyService {

  public constructor(http: HttpClient, private entityName: string, alertService: AlertService) {
    super(http, "userfields/" + entityName, alertService);
  }

  getOne(id: number): Observable<T> {
    return this.http.get<T>(this.getUrl("/" + id));
  }

  update(entityId: number, item: T): Observable<UpdateResponse> {
    let updatedItem = Object.assign({}, item);

    return this.http.put<UpdateResponse>(this.getUrl("/" + entityId), updatedItem);
  }

}
