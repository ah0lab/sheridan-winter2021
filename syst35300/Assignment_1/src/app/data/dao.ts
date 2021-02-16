import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OnInit } from '@angular/core';


export class DAO implements OnInit{
  private http: HttpClient;
  public dataObservable: Observable<any>;

  constructor() { }

  ngOnInit() {
  }
}
