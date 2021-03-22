import { Component, OnInit } from '@angular/core';
import { OutbreaksStat } from "../../model/outbreaks-stat";
import { StatFetcherService } from "../../services/stat-fetcher.service";

@Component({
  selector: 'app-ongoing-outbreaks',
  templateUrl: './ongoing-outbreaks.component.html',
  styleUrls: ['./ongoing-outbreaks.component.scss'],
})
export class OngoingOutbreaksComponent implements OnInit {
  public outbreaks: OutbreaksStat[] = []

  constructor(private stats: StatFetcherService) { }

  ngOnInit() {
    this.stats.loadOutbreakData().subscribe(outbreakStat => this.outbreaks.push(outbreakStat));
  }
}
