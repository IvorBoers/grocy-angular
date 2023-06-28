import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {EMPTY, throwError} from "rxjs";
import {AlertService} from "./alert-service";

export class AbstractGrocyService {


  constructor(protected http: HttpClient, protected serviceUrl: string, private alertService: AlertService) {
  }

  getApiKeyPostfix() {
    return "?GROCY-API-KEY=" + localStorage.getItem('grocy_api_key');
  }

  getApiUrl() {
    return localStorage.getItem('grocy_url') + "/api/" + this.serviceUrl;
  }

  getUrl(urlPart: string=''): string {
    return this.getApiUrl() + urlPart + this.getApiKeyPostfix();
  }

  handleError(error: HttpErrorResponse, uiErrorHandler: any) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      this.alertService.error('An error occurred:' + error.error.message)
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      if (error.status === 0) {
        this.alertService.error(`Backend unreachable`)
      }
      else if (error.status == 400) {
        return throwError(() => new Error("Unsuccessful call:" + error.error.error_message))
      }
      else {
        this.alertService.error(`Backend returned code ${error.status}, ` + `. Message: ${error.error.error_message}`)
        return EMPTY;
      }
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error(
      'Something bad happened; please try again later.'));
  }

  showAlertSuccess(message: string) {
    this.alertService.success(message);
  }
}
