import { Component, OnInit } from '@angular/core';

import { Appointment } from '../../model/appointment';

@Component({
  selector: 'app-appointment-selector',
  templateUrl: './appointment-selector.component.html',
  styleUrls: ['./appointment-selector.component.scss'],
})
export class AppointmentSelectorComponent implements OnInit {

  appointments: Appointment[] = [];

  constructor() { }

  ngOnInit() {}

}
