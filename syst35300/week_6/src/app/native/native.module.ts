import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NativeStorageComponent } from './native-storage/native-storage.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [NativeStorageComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ],
  exports: [
    NativeStorageComponent
  ]
})
export class NativeModule { }
