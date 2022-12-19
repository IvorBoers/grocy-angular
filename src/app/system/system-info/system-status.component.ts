import {Component, OnInit} from '@angular/core';
import {SystemStatusService} from "./system-status.service";
import {SystemInfo} from "../../domain/system-info";

@Component({
  selector: 'app-system-status',
  templateUrl: './system-status.component.html',
  styleUrls: ['./system-status.component.scss']
})
export class SystemStatusComponent implements OnInit {
  connected = false;
  status = 'Not connected';

  constructor(protected systemStatusService: SystemStatusService) {
  }

  ngOnInit(): void {
    this.systemStatusService.connectionChange$.subscribe(systemInfo => {
      this.refreshStatus(systemInfo)
    })
    this.systemStatusService.refreshConnection();
  }

  refreshStatus(systemInfo: SystemInfo = new SystemInfo()) {
    this.connected = false;
    this.status = "Not connected"
    if (systemInfo.grocy_version) {
      this.connected = true;
      this.status = "Connected to grocy version " + systemInfo.grocy_version.Version
    }
  }
}
