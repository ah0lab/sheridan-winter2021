import {Component, Input, OnInit} from '@angular/core';
import { ModalController } from '@ionic/angular';

import { Appointment } from '../../model/appointment';
import { AppointmentDataService } from '../../services/appointment-data.service';

@Component({
  selector: 'app-appointment-selector',
  templateUrl: './appointment-selector.component.html',
  styleUrls: ['./appointment-selector.component.scss'],
})
export class AppointmentSelectorComponent implements OnInit {

  @Input() locationID: string;
  appointments: Appointment[] = [];

  constructor(private appData: AppointmentDataService,
              private modalController: ModalController)
  {
  }

  public selectAppointment(appIndex: number) {
    this.modalController.dismiss({
      appointment: this.appointments[appIndex]
    });
  }

  ngOnInit() {
    console.log(this.locationID);
    this.appData.getAppointments(parseInt(this.locationID, 10));
    this.appData.appointments.subscribe(app => {
      this.appointments.push(app);
    });
  }

}
