import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectDemoPageRoutingModule } from './select-demo-routing.module';

import { SelectDemoPage } from './select-demo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectDemoPageRoutingModule
  ],
  declarations: [SelectDemoPage]
})
export class SelectDemoPageModule {}
