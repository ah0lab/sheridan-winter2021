import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SummaryTabPageRoutingModule } from './summary-tab-routing.module';

import { SummaryTabPage } from './summary-tab.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SummaryTabPageRoutingModule
  ],
  declarations: [SummaryTabPage]
})
export class SummaryTabPageModule {}
