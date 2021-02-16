import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.scss'],
})
export class BComponent implements OnInit {
  message: any;
  constructor(private sharedService: ServiceService) { }

  ngOnInit() {
    this.sharedService.sharedMessage.subscribe(
      message => this.message = message);
  }

}
