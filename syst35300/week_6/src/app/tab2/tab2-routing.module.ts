import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab2Page } from './tab2.page';
import { NativeModule } from '../native/native.module';

const routes: Routes = [
  {
    path: '',
    component: Tab2Page,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), NativeModule],
  exports: [RouterModule]
})
export class Tab2PageRoutingModule {}
