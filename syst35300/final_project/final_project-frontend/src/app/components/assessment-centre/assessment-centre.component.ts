import {Component, Input, OnInit} from '@angular/core';
import { AssessmentCentre } from '../../model/assessment-centre';

@Component({
  selector: 'app-assessment-centre',
  templateUrl: './assessment-centre.component.html',
  styleUrls: ['./assessment-centre.component.scss'],
})
export class AssessmentCentreComponent implements OnInit {

  @Input() locationID: number;
  assCentre: AssessmentCentre;

  constructor() { }

  ngOnInit() {}

}
