import {Component, OnInit} from '@angular/core';
import { Bet } from "../model/bet";
import { GambleService } from "../services/gamble.service";
import {BET_RESULT, BET_RESULTS} from "../model/bet-result";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  public bet: Bet = {
    amount: 0,
    guess: 0,
    result: "UNDETERMINED"
  };

  public betResult: string = "UNDETERMINED" ;
  public betAmount: number = 0;
  public runningTotal: number = 0;
  public amountWon: number = 0;
  public amountLost: number = 0;
  public winsLosses: string = "NEITHER";

  constructor(private gamble: GambleService) { }

  public makeGuess() {
    this.gamble.makeBet(this.bet.guess);
    if (this.amountLost > this.amountWon) {
      this.winsLosses = `LOSING by ${(this.amountLost - this.amountWon) + 1}`
    } else if (this.amountLost < this.amountWon) {
      this.winsLosses = `WINNING by ${(this.amountWon - this.amountLost) + 1}`
    } else {
      this.winsLosses = "TIED"
      this.bet.result = "TIED"
    }
  }

  ngOnInit() {
    this.gamble.betResult.subscribe(result => {
      switch(result) {
        case BET_RESULTS.WIN : {
          this.betResult = "WIN";
          this.amountWon += 1;
          this.runningTotal = this.betAmount * 2;
          break;
        }
        case BET_RESULTS.LOSS: {
          this.betResult = "LOSS";
          this.amountLost += 1;
          this.runningTotal = 0;
          break;
        }
        default: { this.bet.result = "UNDETERMINED"; break;}
      }
    })
  }

}
