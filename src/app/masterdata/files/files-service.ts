import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {AbstractGrocyService} from "../../shared/abstract-grocy-service";
import {forkJoin, from} from 'rxjs'
import {mergeMap, switchMap, tap} from 'rxjs/operators'


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

  downloadAndupload(group: string, fileName: string, fileUrl: string, callback) {
    let url = this.getUrl(group + '/' + btoa(fileName));
    console.log("getting image from " + fileUrl + " and uploading it to " + url)
    this.http.get(fileUrl, {
      responseType: 'blob'
    }).pipe(mergeMap(ch =>
        this.http.put<string>(url, ch)
          .pipe(mergeMap(() => callback()))
      )
    );
  }

  getTestFile(url: string) : Observable<Blob> {
    return this.http.get(url, {
      responseType: 'blob'
    })
  }
}
