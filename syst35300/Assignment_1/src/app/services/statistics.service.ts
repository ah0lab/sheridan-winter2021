import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

//import * as stats from '../data/Stats.json';

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {
  data = new BehaviorSubject('');
  statistics = this.data.asObservable();

  constructor() {
    this.data.next(JSON.parse('{"Test":"Name"}'));
  }
}
