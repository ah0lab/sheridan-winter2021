import { Component, OnInit } from '@angular/core';
import { StatisticsService } from '../../services/statistics.service';

@Component({
  selector: 'app-case-status',
  templateUrl: './case-status.component.html',
  styleUrls: ['./case-status.component.scss'],
})
export class CaseStatusComponent implements OnInit {

  constructor(private statistics: StatisticsService) { }

  public data: any;

  ngOnInit() {
    this.statistics.loadData();

    this.statistics.stats.subscribe( d => {
      this.data = d;
    });
  }

}
