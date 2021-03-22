import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatFetcherService } from "./stat-fetcher.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    HttpClient
  ]
})
export class ServicesModule { }
