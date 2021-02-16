import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SummaryTabPage } from './summary-tab.page';

const routes: Routes = [
  {
    path: '',
    component: SummaryTabPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SummaryTabPageRoutingModule {}
