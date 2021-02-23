import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListDemoPageRoutingModule } from './list-demo-routing.module';

import { ListDemoPage } from './list-demo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListDemoPageRoutingModule
  ],
  declarations: [ListDemoPage]
})
export class ListDemoPageModule {}
