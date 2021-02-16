import { Component, OnInit } from '@angular/core';
import { StatisticsService } from '../services/statistics.service';

@Component({
  selector: 'app-ontario-tab',
  templateUrl: './ontario-tab.page.html',
  styleUrls: ['./ontario-tab.page.scss'],
})
export class OntarioTabPage implements OnInit {
  info: any;

  constructor(public stats: StatisticsService) { }

  ngOnInit() {
    this.stats.statistics.subscribe(
      info => this.info = info);
  }

}
