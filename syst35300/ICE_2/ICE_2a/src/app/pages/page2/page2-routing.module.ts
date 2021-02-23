import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Page2Page } from './page2.page';

const routes: Routes = [
  {
    path: '',
    component: Page2Page
  },
  {
    path: 'page3',
    loadChildren: () => import('../page3/page3.module')
      .then(m => m.Page3PageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Page2PageRoutingModule {}
