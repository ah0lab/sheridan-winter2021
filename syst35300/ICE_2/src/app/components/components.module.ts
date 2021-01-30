import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { C1Component } from './c1/c1.component';


@NgModule({
  declarations: [C1Component],
  exports: [C1Component],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
