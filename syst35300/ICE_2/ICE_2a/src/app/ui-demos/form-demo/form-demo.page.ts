import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-form-demo',
  templateUrl: './form-demo.page.html',
  styleUrls: ['./form-demo.page.scss'],
})
export class FormDemoPage implements OnInit {

  constructor(private ac: AlertController) { }

  async confirm() {
    const alert = await this.ac.create({
      header: 'New Student Account',
      subHeader: '',
      message: 'Please confirm account creation.',
      buttons: [
        {
          text: 'Cancel',
          handler: () => { console.log('Confirm Cancel!'); }
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
