import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import { API_URIS, API_URI } from '../model/api-uris';
import { AssessmentCentre } from '../model/assessment-centre';

@Injectable({
  providedIn: 'root'
})
export class AssessmentCentreDataService {
  private assData = new BehaviorSubject<AssessmentCentre>({});
  private assPreviewData = new BehaviorSubject<AssessmentCentre>({});
  public assCentrePreviewData = this.assPreviewData.asObservable();
  public assCentreData = this.assData.asObservable();

  constructor(private http: HttpClient) { }

  private makeGetReq(uri: API_URI): Observable<object> {
    return this.http.get(`http://localhost:8887/${uri}`, {});
  }

  public getSummaryListing() {
    this.makeGetReq(API_URIS.GET_SUMMARY_LISTING).subscribe(dataSet => {
      for (const i in dataSet) {
        this.assPreviewData.next({
          location_id: dataSet[i].location_id,
          location_name: dataSet[i].location_name,
          active: dataSet[i].active,
          operated_by: dataSet[i].operated_by,
          city: dataSet[i].city,
          address: dataSet[i].address,
          postal_code: dataSet[i].postal_code,
          province: dataSet[i].province,
          phone: dataSet[i].phone,
        });
      }
    });
  }
}
