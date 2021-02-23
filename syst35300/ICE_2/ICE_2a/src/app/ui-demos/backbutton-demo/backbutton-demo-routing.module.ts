import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BackbuttonDemoPage } from './backbutton-demo.page';

const routes: Routes = [
  {
    path: '',
    component: BackbuttonDemoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BackbuttonDemoPageRoutingModule {}
