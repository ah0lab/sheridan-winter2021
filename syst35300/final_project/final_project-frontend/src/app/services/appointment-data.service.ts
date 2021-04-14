import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

import { API_URI, API_URIS } from '../model/api-uris';
import { Appointment } from '../model/appointment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentDataService {
  private appData = new BehaviorSubject<Appointment>({ });
  public appointments = this.appData.asObservable();

  constructor(private http: HttpClient) { }

  private makeGetReq(uri: API_URI, params?: HttpParams): Observable<object> {
    if (HttpParams != null) {
      return this.http.get(`http://localhost:8887/${uri}`, {params});
    } else {
      return this.http.get(`http://localhost:8887/${uri}`);
    }
  }

  private makePostReq(uri: API_URI, body: string): Observable<object> {
    const headersParams = new HttpHeaders().set('content-type', 'application/json');

    return this.http.post(`http://localhost:8887/${uri}`, body, {headers: headersParams});
  }

  public getAppointment(locationID: number, date: string, time: string) {
    const params = new HttpParams()
      .set('location_id', `${locationID}`)
      .set('date', `${date}`)
      .set('time', `${time}`);

    this.makeGetReq(API_URIS.APPOINTMENT, params).subscribe( data => {
      for (const i in data) {
        this.appData.next(data[i]);
      }
    });
  }

  public getAppointments(locationID: number) {
    const params = new HttpParams().set('location_id', `${locationID}`);
    this.makeGetReq(API_URIS.GET_APPOINTMENT_LISTING, params).subscribe(data => {
      for (const i in data) {
        for (const appIndex in data[i].appointments) {
          this.appData.next(data[i].appointments[appIndex]);
        }
      }
    });
  }

  public deleteAppointment(locationID: number, appDate: string, appTime: string) {
    const body = JSON.stringify({location_id: locationID, date: appDate, time: appTime});

    this.makePostReq(API_URIS.DEL_APPOINTMENT, body).subscribe(res => {
        console.log(res);
    });
  }

  public deleteAllAppointments(locationID: number) {
    const body = JSON.stringify({location_id: locationID});
    this.makePostReq(API_URIS.DEL_APPOINTMENTS, body).subscribe(res => {
      console.log(res);
    });
  }

  public createAppointment(locationID: number, app: Appointment) {
    console.log(app.time);
    const body = JSON.stringify({
      location_id: locationID,
      date: app.date,
      time: app.time,
      ohip_number: app.ohip_number,
      email: app.email
    });

    this.makePostReq(API_URIS.APPOINTMENT, body).subscribe(res => {
      console.log(res);
    });
  }

  public exportAppointments() {
    this.makeGetReq(API_URIS.EXPORT_APPOINTMENTS).subscribe(result => {
      console.log(result);
    });
  }
}
