import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchbarDemoPageRoutingModule } from './searchbar-demo-routing.module';

import { SearchbarDemoPage } from './searchbar-demo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchbarDemoPageRoutingModule
  ],
  declarations: [SearchbarDemoPage]
})
export class SearchbarDemoPageModule {}
