import { Component, OnInit } from '@angular/core';

import { StatFetcherService } from "../../services/stat-fetcher.service";
import { SchoolActivePartnersStat } from "../../model/school-active-partners-stat";

@Component({
  selector: 'app-school-active-partners',
  templateUrl: './school-active-partners.component.html',
  styleUrls: ['./school-active-partners.component.scss'],
})
export class SchoolActivePartnersComponent implements OnInit {
  public activePartners: SchoolActivePartnersStat[] = [];

  constructor(private stats: StatFetcherService) { }

  ngOnInit() {
    this.stats.loadSchoolPartnerData().subscribe(data => this.activePartners.push(data));
  }
}
