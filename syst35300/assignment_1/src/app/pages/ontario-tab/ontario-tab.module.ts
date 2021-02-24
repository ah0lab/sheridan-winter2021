import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OntarioTabPageRoutingModule } from './ontario-tab-routing.module';

import { OntarioTabPage } from './ontario-tab.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OntarioTabPageRoutingModule,
    ComponentsModule
  ],
  declarations: [OntarioTabPage]
})
export class OntarioTabPageModule {}
