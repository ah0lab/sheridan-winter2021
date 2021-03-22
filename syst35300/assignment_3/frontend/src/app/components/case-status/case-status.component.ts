import { Component, OnInit } from '@angular/core';
import { CaseStatusStat } from "../../model/case-status-stat";
import { StatFetcherService } from "../../services/stat-fetcher.service";

@Component({
  selector: 'app-case-status',
  templateUrl: './case-status.component.html',
  styleUrls: ['./case-status.component.scss'],
})
export class CaseStatusComponent implements OnInit {
  public cases: CaseStatusStat[] = [];

  constructor(private stats: StatFetcherService) { }

  ngOnInit() {
    this.stats.loadCaseData().subscribe(data => this.cases.push(data));
  }

}
