import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OntarioTabPage } from './ontario-tab.page';

const routes: Routes = [
  {
    path: '',
    component: OntarioTabPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OntarioTabPageRoutingModule {}
