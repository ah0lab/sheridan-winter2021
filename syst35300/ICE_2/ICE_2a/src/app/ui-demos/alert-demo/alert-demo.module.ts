import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlertDemoPageRoutingModule } from './alert-demo-routing.module';

import { AlertDemoPage } from './alert-demo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlertDemoPageRoutingModule
  ],
  declarations: [AlertDemoPage]
})
export class AlertDemoPageModule {}
