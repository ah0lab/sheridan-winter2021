import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlertDemoPage } from './alert-demo.page';

const routes: Routes = [
  {
    path: '',
    component: AlertDemoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlertDemoPageRoutingModule {}
