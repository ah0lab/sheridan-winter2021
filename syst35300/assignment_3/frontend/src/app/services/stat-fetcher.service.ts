import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, Subscriber, Subscription, of} from 'rxjs';
import { HttpClient } from "@angular/common/http";

import { API_URIS, API_URI } from "../model/api-uri";
import { CaseStatusStat } from "../model/case-status-stat";
import { OutbreaksStat } from "../model/outbreaks-stat";
import { SchoolActivePartnersStat } from "../model/school-active-partners-stat";
import { SchoolSummaryStat } from "../model/school-summary-stat";
import { SchoolTestingStat } from "../model/school-testing-stat";

@Injectable({
  providedIn: 'root'
})
export class StatFetcherService {

  private caseData = new BehaviorSubject<CaseStatusStat[]>([]);
  private outbreakData = new BehaviorSubject<OutbreaksStat[]>([]);
  private schoolPartnerData = new BehaviorSubject<SchoolActivePartnersStat[]>([]);
  private schoolSummaryData = new BehaviorSubject<SchoolSummaryStat[]>([]);
  private schoolTestingData = new BehaviorSubject<SchoolTestingStat[]>([]);

  constructor(private http: HttpClient) { }

  private makeReq(uri: API_URI): Observable<CaseStatusStat & OutbreaksStat &
                                            SchoolTestingStat & SchoolSummaryStat &
                                            SchoolActivePartnersStat>
  {
    of(return this.http.get(`http://localhost:8887/${uri.toString()}`);

  }

  get CaseData() {
    this.makeReq(API_URIS.CASE_STATUS).subscribe(data => {

    })
    return this.caseData.asObservable();
  }
}
