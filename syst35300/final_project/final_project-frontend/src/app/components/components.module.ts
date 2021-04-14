import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { AppointmentSelectorComponent } from './appointment-selector/appointment-selector.component';


@NgModule({
  declarations: [AppointmentSelectorComponent],
  exports: [AppointmentSelectorComponent],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
