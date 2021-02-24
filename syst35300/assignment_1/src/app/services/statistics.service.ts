import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject} from 'rxjs';
import { JsonArray } from '@angular/compiler-cli/ngcc/src/packages/entry_point';

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {

  private jsonData = new BehaviorSubject<JsonArray>(JSON.parse('[{}]'));
  // private jsonData = new BehaviorSubject<JsonArray>(new JsonArray);
  stats = this.jsonData.asObservable();

  constructor(private http: HttpClient) { }

  loadData() {
    this.http.get('assets/data/data.json').subscribe(response =>
      this.jsonData.next(JSON.parse(response.toString()))
    );
    this.jsonData.subscribe(data => {
      console.log(data);
    });
  }
}
