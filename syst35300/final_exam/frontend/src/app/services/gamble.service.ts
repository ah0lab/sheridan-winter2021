import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {BehaviorSubject} from "rxjs";
import {BET_RESULTS, BET_RESULT} from "../model/bet-result";
import {Bet} from "../model/bet";

@Injectable({
  providedIn: 'root'
})
export class GambleService {
  private data: BehaviorSubject<BET_RESULT> = new BehaviorSubject<BET_RESULT>(BET_RESULTS.UNDETERMINED)
  public betResult = this.data.asObservable()

  constructor(private http: HttpClient) { }

  public makeBet(guess: Number) {
    const params = new HttpParams().set('guess', `${guess}`);

    this.http.get(`http://localhost:8887/guess`,{params}).subscribe(betResult => {
      console.log(betResult['result'])
      this.data.next(<BET_RESULT>betResult['result']);
    });

  }
}
