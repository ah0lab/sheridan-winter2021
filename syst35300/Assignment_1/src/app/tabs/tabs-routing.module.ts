import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'summary-tab',
    loadChildren: () => import('../summary-tab/summary-tab.module')
      .then(m => m.SummaryTabPageModule)
  },
  {
    path: 'ontario-tab',
    loadChildren: () => import('../ontario-tab/ontario-tab.module')
      .then(m => m.OntarioTabPageModule)
  },
  {
    path: '/ontario-tab',
    redirectTo: 'ontario-tab',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
