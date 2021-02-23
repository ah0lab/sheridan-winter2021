import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImageDemoPage } from './image-demo.page';

const routes: Routes = [
  {
    path: '',
    component: ImageDemoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImageDemoPageRoutingModule {}
