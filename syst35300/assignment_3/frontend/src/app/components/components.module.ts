import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IonicModule} from "@ionic/angular";

import { CaseStatusComponent } from "./case-status/case-status.component";
import { OngoingOutbreaksComponent } from "./ongoing-outbreaks/ongoing-outbreaks.component";
import { SchoolActivePartnersComponent } from "./school-active-partners/school-active-partners.component";
import { SchoolSummaryComponent } from "./school-summary/school-summary.component";
import {SchoolTestingComponent} from "./school-testing/school-testing.component";


@NgModule({
  declarations: [
    CaseStatusComponent,
    OngoingOutbreaksComponent,
    SchoolActivePartnersComponent,
    SchoolSummaryComponent,
    SchoolTestingComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    CaseStatusComponent,
    OngoingOutbreaksComponent,
    SchoolActivePartnersComponent,
    SchoolSummaryComponent,
    SchoolTestingComponent
  ]
})
export class ComponentsModule { }