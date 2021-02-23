import { Component } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public c1Data: string;
  public c2Data: string;

  constructor(private router: Router,
              public asc: ActionSheetController) {}

  async showActionSheet() {
    const actionSheet = await this.asc.create({
      header: 'Ionic UI Component Demos',
      buttons: [
        {
          text: 'Alerts', icon: 'alert-outline',
          handler: () => {
            this.router.navigate(['alert-demo']);
            console.log('Navigate To Alert!');
          }
        },
        {
          text: 'Back Buttons', icon: 'arrow-back-circle-outline',
          handler: () => {
            this.router.navigate(['backbutton-demo']);
          }
        },
        {
          text: 'Cards', icon: 'copy-outline',
          handler: () => {
            this.router.navigate(['card-demo']);
          },
        },
        {
          text: 'Lists', icon: 'list-outline',
          handler: () => {
            this.router.navigate(['list-demo']);
          }
        },
        {
          text: 'Grid', icon: 'grid-outline',
          handler: () => {
            this.router.navigate(['grid-demo']);
          }
        },
        {
          text: 'Image', icon: 'image-outline',
          handler: () => {
            this.router.navigate(['image-demo']);
          }
        },
        {
          text: 'Form/Input', icon: 'create-outline',
          handler: () => {
            this.router.navigate(['form-demo']);
          }
        },
        {
          text: 'Searchbar', icon: 'search-circle-outline',
          handler: () => {
            this.router.navigate(['searchbar-demo']);
          }
        },
        {
          text: 'Select', icon: 'checkmark-circle-outline',
          handler: () => {
            this.router.navigate(['select-demo']);
          }
        }
     ]
    });

    await actionSheet.present();
  }

  passDataTo(component: string): void {
    if (component === 'c1') {
      this.c1Data = 'Hello C1, Love Home';
    } else if (component === 'c2') {
      this.c2Data = 'Hello C2, Love Home';
    }
  }
}
