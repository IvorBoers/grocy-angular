import {Injectable} from "@angular/core";
import {BehaviorSubject, ReplaySubject, zip} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  private subject = new ReplaySubject<any>();

  private  showsubject = new BehaviorSubject<any>(1);

  public alert = zip(this.subject.asObservable(),this.showsubject.asObservable());

  success(message: string) {
    this.subject.next({ type: 'success', text: message });
  }

  error(message: string) {
    console.error("Error to display: " + message)
    this.subject.next({ type: 'error', text: message });
  }

  showNext(){
    this.showsubject.next(1);
  }
}
