import {Injectable} from "@angular/core";
import {AbstractGrocyService} from "../../shared/abstract-grocy-service";
import {Observable} from "rxjs";
import {SystemInfo} from "../../domain/system-info";
import {HttpClient} from "@angular/common/http";
import {AlertService} from "../../shared/alert-service";
import {catchError} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SystemService extends AbstractGrocyService {
  constructor(http: HttpClient, alertService: AlertService) {
    super(http, "system", alertService);
  }

  getInfo(onError: any): Observable<SystemInfo> {
    return this.http.get<SystemInfo>(this.getApiUrl() + "/info" + this.getApiKeyPostfix())
      .pipe(catchError(onError));
  }
}
