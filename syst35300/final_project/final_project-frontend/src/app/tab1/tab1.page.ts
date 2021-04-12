import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

import { AssessmentCentreDataService } from '../services/assessment-centre-data.service';
import {AssessmentCentre} from '../model/assessment-centre';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
  public assCentres: AssessmentCentre[] = [];

  constructor(private assDataService: AssessmentCentreDataService,
              private router: Router,
              public alertController: AlertController) { }

  public async goToDetails(assIndex: number){
    const assCentre: AssessmentCentre = this.assCentres[assIndex];

    const alert = await this.alertController.create({
      header: this.assCentres[assIndex].location_name,
      message: `${assCentre.address} ${assCentre.postal_code}
                ${assCentre.province} ${assCentre.phone} \nActive: ${assCentre.active}`,
      buttons: [
        {
          text: 'Confirm',
          handler: () => {
            // TODO Navigate
            this.router.navigate(['tabs/tab2'], { state: {
              assData: {
                location_id: assCentre.location_id,
                location_name: assCentre.location_name,
                active: assCentre.active,
                operated_by: assCentre.operated_by,
                city: assCentre.city,
                address: assCentre.address,
                postal_code: assCentre.postal_code,
                province: assCentre.province,
                phone: assCentre.phone
              }
            }});
          },
        },
        {
          text: 'Cancel',
          role: 'cancel',
        }
      ],
    });
    await alert.present();
  }

  ngOnInit() {
    this.assDataService.assCentrePreviewData.subscribe(data => {
      console.log(data);
      this.assCentres.push(data);
    });
    this.assDataService.getSummaryListing();
  }

}
