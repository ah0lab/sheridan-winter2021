import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.scss'],
})
export class AComponent implements OnInit {
  message: any;

  constructor(private sharedService: ServiceService) { }

  newMessage() {
    this.sharedService.setMessage(this.message);
  }

  ngOnInit() {
    this.sharedService.sharedMessage.subscribe(
      message => this.message = message);
  }

}
