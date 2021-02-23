import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectDemoPage } from './select-demo.page';

const routes: Routes = [
  {
    path: '',
    component: SelectDemoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectDemoPageRoutingModule {}
