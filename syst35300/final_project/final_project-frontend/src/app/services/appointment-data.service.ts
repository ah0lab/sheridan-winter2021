import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

import { API_URI, API_URIS } from '../model/api-uris';
import { Appointment } from '../model/appointment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentDataService {
  private appData = new BehaviorSubject<Appointment>({ });
  private appointments = this.appData.asObservable();

  constructor(private http: HttpClient) { }

  private makeGetReq(uri: API_URI): Observable<object> {
    return this.http.get(`http://localhost:8887/${uri}`);
  }

  public getAppointments(locationID: number) {

  }
}
