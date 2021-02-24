import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaseStatusComponent } from './case-status/case-status.component';
import { KeyUpdatesComponent } from './key-updates/key-updates.component';
import { HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    CaseStatusComponent,
    KeyUpdatesComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    CaseStatusComponent,
    KeyUpdatesComponent,
  ]
})
export class ComponentsModule { }
