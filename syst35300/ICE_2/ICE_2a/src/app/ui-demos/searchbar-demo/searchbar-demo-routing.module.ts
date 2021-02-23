import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchbarDemoPage } from './searchbar-demo.page';

const routes: Routes = [
  {
    path: '',
    component: SearchbarDemoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchbarDemoPageRoutingModule {}
