import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';
import { SummaryTabPage } from '../summary-tab/summary-tab.page';
import { OntarioTabPage } from '../ontario-tab/ontario-tab.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage
  },
  {
    path: 'ontario-tab',
    component: OntarioTabPage
  },
  {
    path: 'summary-tab',
    component: SummaryTabPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
