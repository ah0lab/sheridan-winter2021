import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ImageDemoPageRoutingModule } from './image-demo-routing.module';

import { ImageDemoPage } from './image-demo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ImageDemoPageRoutingModule
  ],
  declarations: [ImageDemoPage]
})
export class ImageDemoPageModule {}
