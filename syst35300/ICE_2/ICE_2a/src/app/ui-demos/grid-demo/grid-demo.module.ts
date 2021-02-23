import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GridDemoPageRoutingModule } from './grid-demo-routing.module';

import { GridDemoPage } from './grid-demo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GridDemoPageRoutingModule
  ],
  declarations: [GridDemoPage]
})
export class GridDemoPageModule {}
