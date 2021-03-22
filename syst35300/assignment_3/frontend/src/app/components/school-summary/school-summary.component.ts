import { Component, OnInit } from '@angular/core';

import { SchoolSummaryStat } from "../../model/school-summary-stat";
import { StatFetcherService } from "../../services/stat-fetcher.service";

@Component({
  selector: 'app-school-summary',
  templateUrl: './school-summary.component.html',
  styleUrls: ['./school-summary.component.scss'],
})
export class SchoolSummaryComponent implements OnInit {
  public summaryStats: SchoolSummaryStat[] = []
  constructor(private stats: StatFetcherService) { }

  ngOnInit() {
    this.stats.loadSchoolSummaryData().subscribe(data => this.summaryStats.push(data));
  }

}
