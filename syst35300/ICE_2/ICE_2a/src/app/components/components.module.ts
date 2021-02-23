import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { C1Component } from './c1/c1.component';
import { C2Component } from './c2/c2.component';
import {IonicModule} from '@ionic/angular';
import {FormsModule} from '@angular/forms';


@NgModule({
  // Declare that this component exists in the module
  declarations: [
    C1Component,
    C2Component
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
  ],
  // Export the component for use in other modules
  exports: [
    C1Component,
    C2Component
  ]
})
export class ComponentsModule { }
