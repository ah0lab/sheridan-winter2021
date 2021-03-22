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

  private caseData = new BehaviorSubject<CaseStatusStat>({ });
  private outbreakData = new BehaviorSubject<OutbreaksStat>({ });
  private schoolPartnerData = new BehaviorSubject<SchoolActivePartnersStat>({ });
  private schoolSummaryData = new BehaviorSubject<SchoolSummaryStat>({ });
  private schoolTestingData = new BehaviorSubject<SchoolTestingStat>({ });

  constructor(private http: HttpClient) { }

  private makeReq(uri: API_URI): Observable<Object>
  {
    return this.http.get(`http://localhost:8887/${uri}`);
  }

  loadCaseData(): Observable<CaseStatusStat> {
    this.makeReq(API_URIS.CASE_STATUS).subscribe(dataSet=> {
      for (let i in dataSet) {
        this.caseData.next({
          date: dataSet[i]["FILE_DATE"],
          phuName: dataSet[i]["PHU_NAME"],
          phuNumber: dataSet[i]["PHU_NUMBER"],
          activeCases: dataSet[i]["ACTIVE_CASES"],
          resolvedCases: dataSet[i]["RESOLVED_CASES"],
          deaths: dataSet[i]["DEATHS"]
        });
      }
    });
    return this.caseData.asObservable();
  }

  loadOutbreakData(): Observable<OutbreaksStat> {
    this.makeReq(API_URIS.OUTBREAK_STATS).subscribe(dataSet => {
      for (let i in dataSet) {
        this.outbreakData.next({
          date: dataSet[i]["date"],
          group: dataSet[i]["outbreak_group"],
          subgroup: dataSet[i]["outbreak_subgroup"],
          outbreakCount: dataSet[i]["number_ongoing_outbreaks"]
        });
      }
    });
    return this.outbreakData.asObservable();
  }

  loadSchoolPartnerData(): Observable<SchoolActivePartnersStat> {
    this.makeReq(API_URIS.ACTIVE_PARTNERS).subscribe(dataSet => {
      for (let i in dataSet) {
        this.schoolPartnerData.next({
          date: dataSet[i]["reported_date"],
          schoolBoard: dataSet[i]["school_board"],
          municipality: dataSet[i]["municipality"],
          confirmedPartnerCases: dataSet[i]["confirmed_school_partner_cases"]
        });
      }
    });
    return this.schoolPartnerData.asObservable();
  }

  loadSchoolSummaryData(): Observable<SchoolSummaryStat> {
    this.makeReq(API_URIS.SCHOOL_SUMMARY).subscribe(dataSet => {
      for (let i in dataSet) {
        this.schoolSummaryData.next({
          date: dataSet[i]["reported_date"],
          effectedSchools: dataSet[i]["current_schools_w_cases"],
          schoolsClosed: dataSet[i]["current_schools_closed"],
          totalSchools: dataSet[i]["current_total_number_schools"],
          totalSchoolCases: dataSet[i]["cumulative_school_related_cases"],
          totalSchoolCasesStudents: dataSet[i]["cumulative_school_related_student_cases"],
          totalSchoolCasesStaff: dataSet[i]["cumulative_school_related_staff_cases"],
          totalSchoolCasesUnspecified: dataSet[i]["cumulative_school_related_unspecified_cases"]
        });
      }
    });
    return this.schoolSummaryData.asObservable();
  }

  loadSchoolTestingData(): Observable<SchoolTestingStat> {
    this.makeReq(API_URIS.SCHOOL_TESTING).subscribe(dataSet => {
      for (let i in dataSet) {
        this.schoolTestingData.next({
          date: dataSet[i]["reported_date"],
          schoolBoard: dataSet[i]["school_board_name"],
          invitedSchools: dataSet[i]["schools_invited_to_participate"],
          newTestsConducted: dataSet[i]["new_tests_conducted"],
          newCasesIdentified: dataSet[i]["new_cases_identified"],
          totalTestsConducted: dataSet[i]["cumulative_conducted_tests"],
          totalCasesIdentified: dataSet[i]["cumulative_cases_identified"],
        });
      }
    });
    return this.schoolTestingData.asObservable();
  }
}
