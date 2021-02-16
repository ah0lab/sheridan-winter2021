import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OntarioTabPageRoutingModule } from './ontario-tab-routing.module';

import { OntarioTabPage } from './ontario-tab.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OntarioTabPageRoutingModule
  ],
  declarations: [OntarioTabPage]
})
export class OntarioTabPageModule {}
