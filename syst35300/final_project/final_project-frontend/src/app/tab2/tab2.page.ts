import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {AssessmentCentre} from '../model/assessment-centre';
import {AssessmentCentreDataService} from '../services/assessment-centre-data.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{
  assCentre: AssessmentCentre = {};

  constructor(private router: Router,
              private assData: AssessmentCentreDataService) { }


  public addAppointment() {

  }

  public retrieve() {

  }

  public update() {

  }

  public delete() {

  }

  public deleteAll() {

  }

  public export() {

  }

  public clear() {

  }

  ngOnInit() {
    if ( this.router.getCurrentNavigation().extras.state ) {
      this.assCentre =
        this.router.getCurrentNavigation().extras.state.assData;
    }
  }

}
