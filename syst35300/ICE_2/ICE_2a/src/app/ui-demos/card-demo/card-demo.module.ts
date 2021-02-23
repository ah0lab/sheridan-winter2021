import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CardDemoPageRoutingModule } from './card-demo-routing.module';

import { CardDemoPage } from './card-demo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CardDemoPageRoutingModule
  ],
  declarations: [CardDemoPage]
})
export class CardDemoPageModule {}
