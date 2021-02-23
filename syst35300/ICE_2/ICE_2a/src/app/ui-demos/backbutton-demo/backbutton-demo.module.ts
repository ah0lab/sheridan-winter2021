import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BackbuttonDemoPageRoutingModule } from './backbutton-demo-routing.module';

import { BackbuttonDemoPage } from './backbutton-demo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BackbuttonDemoPageRoutingModule
  ],
  declarations: [BackbuttonDemoPage]
})
export class BackbuttonDemoPageModule {}
