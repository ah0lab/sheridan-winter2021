import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsPageModule } from './tabs/tabs.module';


@NgModule({
  declarations: [ ],
  imports: [
    CommonModule, TabsPageModule
  ],
  exports: [ TabsPageModule ]
})
export class PagesModule { }
