import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../services/service.service';

@Component({
  selector: 'app-c2',
  templateUrl: './c2.component.html',
  styleUrls: ['./c2.component.scss'],
})
export class C2Component implements OnInit {

  constructor(private sharedService: ServiceService) { }

  message: string;

  ngOnInit() {
    this.sharedService.sharedMessage.subscribe(
      message => this.message = message);
  }

}
