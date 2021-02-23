import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormDemoPageRoutingModule } from './form-demo-routing.module';

import { FormDemoPage } from './form-demo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormDemoPageRoutingModule
  ],
  declarations: [FormDemoPage]
})
export class FormDemoPageModule {}
