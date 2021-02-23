import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListDemoPage } from './list-demo.page';

const routes: Routes = [
  {
    path: '',
    component: ListDemoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListDemoPageRoutingModule {}
