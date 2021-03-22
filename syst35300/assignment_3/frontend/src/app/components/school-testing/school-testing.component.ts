import { Component, OnInit } from '@angular/core';
import { SchoolTestingStat } from "../../model/school-testing-stat";
import { StatFetcherService } from "../../services/stat-fetcher.service";

@Component({
  selector: 'app-school-testing',
  templateUrl: './school-testing.component.html',
  styleUrls: ['./school-testing.component.scss'],
})
export class SchoolTestingComponent implements OnInit {
  public testingStats: SchoolTestingStat[] = [];

  constructor(private stats: StatFetcherService) { }

  ngOnInit() {
    this.stats.loadSchoolTestingData().subscribe(data => this.testingStats.push(data));
  }

}
