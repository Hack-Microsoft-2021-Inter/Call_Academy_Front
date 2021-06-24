import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { MonitorDetail } from './monitorDetail';
import { environment } from '../../environments/environment';
import { Monitor } from './monitor';

@Injectable({
  providedIn: 'root',
})
export class MonitorService {

  private apiUrl: string = environment.baseUrl + 'monitores';
  constructor(private http: HttpClient) {}

  getMonitores(): Observable<Array<MonitorDetail>> {
    return this.http.get<Array<MonitorDetail>>(this.apiUrl);
  }

  createMonitor(monitor: Monitor): Observable<MonitorDetail> {
    return this.http.post<MonitorDetail>(this.apiUrl, monitor);
  }
}
