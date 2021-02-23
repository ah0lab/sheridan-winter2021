import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardDemoPage } from './card-demo.page';

const routes: Routes = [
  {
    path: '',
    component: CardDemoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CardDemoPageRoutingModule {}
