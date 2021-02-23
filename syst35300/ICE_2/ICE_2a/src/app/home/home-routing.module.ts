import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: 'page1/:data',
    loadChildren: '../pages/page1/page1.module#Page1PageModule'
  },
  {
    path: 'page2/:data',
    loadChildren: '../pages/page2/page2.module#Page2PageModule'
  },
  {
    path: 'alertdemo',
    loadChildren: '../ui-demos/alert-demo/alert-demo.module#Alert-DemoPageModule'
  },
  {
    path: '',
    component: HomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
