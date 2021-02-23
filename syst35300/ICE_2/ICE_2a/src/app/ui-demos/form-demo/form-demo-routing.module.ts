import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormDemoPage } from './form-demo.page';

const routes: Routes = [
  {
    path: '',
    component: FormDemoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormDemoPageRoutingModule {}
