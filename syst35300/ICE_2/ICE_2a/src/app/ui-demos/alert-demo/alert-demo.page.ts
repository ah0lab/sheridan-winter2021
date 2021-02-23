import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert-demo',
  templateUrl: './alert-demo.page.html',
  styleUrls: ['./alert-demo.page.scss'],
})
export class AlertDemoPage implements OnInit {

  constructor(public ac: AlertController) { }

  async alertAction() {
    const alert = await this.ac.create({
      header: '!Alert!',
      subHeader: '',
      message: 'This is an Alert Message',
      buttons: [
        {
          text: 'Cancel',
          handler: () => { console.log('Confirm cancel!'); }
        },
        {
          text: 'OK',
          handler: () => { console.log('Confirm OK!'); }
        }
      ]
    });
    await alert.present();
  }

  ngOnInit() {
  }

}
