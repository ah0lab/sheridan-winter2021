import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'page1',
    loadChildren: () => import('./pages/page1/page1.module').then( m => m.Page1PageModule)
  },
  {
    path: 'page2',
    loadChildren: () => import('./pages/page2/page2.module').then( m => m.Page2PageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'tab1',
    loadChildren: () => import('./tab1/tab1.module').then( m => m.Tab1PageModule)
  },
  {
    path: 'tab2',
    loadChildren: () => import('./tab2/tab2.module').then( m => m.Tab2PageModule)
  },
  {
    path: 'page3',
    loadChildren: () => import('./pages/page3/page3.module').then( m => m.Page3PageModule)
  },
  {
    path: 'alert-demo',
    loadChildren: () => import('./ui-demos/alert-demo/alert-demo.module').then( m => m.AlertDemoPageModule)
  },
  {
    path: 'backbutton-demo',
    loadChildren: () => import('./ui-demos/backbutton-demo/backbutton-demo.module').then( m => m.BackbuttonDemoPageModule)
  },
  {
    path: 'card-demo',
    loadChildren: () => import('./ui-demos/card-demo/card-demo.module').then( m => m.CardDemoPageModule)
  },
  {
    path: 'list-demo',
    loadChildren: () => import('./ui-demos/list-demo/list-demo.module').then( m => m.ListDemoPageModule)
  },
  {
    path: 'grid-demo',
    loadChildren: () => import('./ui-demos/grid-demo/grid-demo.module').then( m => m.GridDemoPageModule)
  },
  {
    path: 'image-demo',
    loadChildren: () => import('./ui-demos/image-demo/image-demo.module').then( m => m.ImageDemoPageModule)
  },
  {
    path: 'form-demo',
    loadChildren: () => import('./ui-demos/form-demo/form-demo.module').then( m => m.FormDemoPageModule)
  },
  {
    path: 'searchbar-demo',
    loadChildren: () => import('./ui-demos/searchbar-demo/searchbar-demo.module').then( m => m.SearchbarDemoPageModule)
  },
  {
    path: 'select-demo',
    loadChildren: () => import('./ui-demos/select-demo/select-demo.module').then( m => m.SelectDemoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
