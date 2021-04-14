import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AssessmentCentre } from '../model/assessment-centre';
import { AssessmentCentreDataService } from '../services/assessment-centre-data.service';
import { AppointmentDataService } from '../services/appointment-data.service';
import { Appointment } from '../model/appointment';
import { AppointmentSelectorComponent } from '../components/appointment-selector/appointment-selector.component';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{
  assCentre: AssessmentCentre = {};
  appointments: Appointment[] = [];
  selectedApp: Appointment = {};

  constructor(private router: Router,
              private assData: AssessmentCentreDataService,
              private appData: AppointmentDataService,
              private modalController: ModalController) { }


  public addAppointment() {
    if (this.selectedApp.time !== undefined || this.selectedApp.date !== undefined) {
      this.appData.createAppointment(this.assCentre.location_id,
        this.selectedApp);
    }
  }

  public async retrieve() {
    const modal = await this.modalController.create({
      component: AppointmentSelectorComponent,
      componentProps: {
        locationID: this.assCentre.location_id.toString()
      }
    });

    await modal.present();

    const { data } = await modal.onWillDismiss();
    this.selectedApp = data.appointment;

  }

  public update() {
    const currentAppQueueLength = this.appointments.length;
    // Get appointment
    this.appData.getAppointment(this.assCentre.location_id,
      this.selectedApp.date.toString(), this.selectedApp.time);

    if (currentAppQueueLength !== this.appointments.length) {
      this.delete();
      this.addAppointment();
    } else {
      this.addAppointment();
    }
  }

  public delete() {
    this.appData.deleteAppointment( this.assCentre.location_id,
      this.selectedApp.date.toString(), this.selectedApp.time);
  }

  public deleteAll() {
    this.appData.deleteAllAppointments(this.assCentre.location_id);
  }

  public export() {
    this.appData.exportAppointments();
  }

  public clear() {
    this.selectedApp = { };
  }

  ngOnInit() {
    if ( this.router.getCurrentNavigation().extras.state ) {
      this.assCentre =
        this.router.getCurrentNavigation().extras.state.assData;
    }
  }

}
