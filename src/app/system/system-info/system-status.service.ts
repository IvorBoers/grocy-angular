import {Injectable} from "@angular/core";
import {Subject} from "rxjs";
import {SystemService} from "./system.service";
import {SystemInfo} from "../../domain/system-info";


@Injectable({
  providedIn: 'root'
})
export class SystemStatusService {

  private connected = false;
  public connectionChange = new Subject<SystemInfo>();
  connectionChange$ = this.connectionChange.asObservable();

  constructor(protected systemService: SystemService) {
  }
  public refreshConnection() {
    this.connected = false;
    this.systemService.getInfo(() => {
      this.connected = false;
      this.connectionChange.next(new SystemInfo());
    }).subscribe(status => {
      this.connected = true;
      this.connectionChange.next(status);
    })
  }

  public isConnected() {
    return this.connected
  }
}
