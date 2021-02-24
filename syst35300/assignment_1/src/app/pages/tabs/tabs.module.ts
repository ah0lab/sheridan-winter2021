import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabsPageRoutingModule } from './tabs-routing.module';

import { TabsPage } from './tabs.page';

import { SummaryTabPageModule } from '../summary-tab/summary-tab.module'
import { OntarioTabPageModule } from '../ontario-tab/ontario-tab.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabsPageRoutingModule,
    SummaryTabPageModule,
    OntarioTabPageModule
  ],
  declarations: [TabsPage],
  exports: [TabsPage]
})
export class TabsPageModule {}
