import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {UpdateResponse} from "../domain/update-response";
import {AbstractGrocyService} from "./abstract-grocy-service";
import {ProductUserfields} from "../domain/product-userfields";

export class UserfieldsService extends AbstractGrocyService {

  public constructor(http: HttpClient, private entityName: string) {
    super(http, "userfields/" + entityName);
  }

  getOne(id: number): Observable<ProductUserfields> {
    return this.http.get<ProductUserfields>(this.getUrl("/" + id));
  }

  update(entityId: number, item: ProductUserfields): Observable<UpdateResponse> {
    let updatedItem = Object.assign({}, item);

    return this.http.put<UpdateResponse>(this.getUrl("/" + entityId), updatedItem);
  }

}
