import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {AbstractGrocyService} from "../../shared/abstract-grocy-service";

@Injectable({
  providedIn: 'root'
})
export class FilesService extends AbstractGrocyService {
  static readonly group_productpictures = "productpictures";


  protected constructor(http: HttpClient) {
    super(http, "files/");
  }

  getFile(group: string, fileName: string): Observable<string> {
    return this.http.get<string>(this.getUrl(group + "/" + fileName));
  }

  toFileUrl(group: string, picture_file_name: string) {
    return this.getUrl(group + '/' + btoa(picture_file_name))
  }
}
