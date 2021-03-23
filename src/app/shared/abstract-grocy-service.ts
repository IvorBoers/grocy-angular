import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Constants} from "./constants";
import {throwError} from "rxjs";

export class AbstractGrocyService {


  constructor(protected http: HttpClient, private serviceUrl: string) {
  }

  getApiKeyPostfix() {
    return "?GROCY-API-KEY=" + Constants.API_KEY;
  }

  getApiUrl() {
    return Constants.GROCY_URL + "/api/" + this.serviceUrl;
  }

  getUrl(urlPart: string=''): string {
    return this.getApiUrl() + urlPart + this.getApiKeyPostfix();
  }

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);

      if (error.status == 400) {
        return throwError("Unsuccesful call:" + error.error.error_message)
      }
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }
}
