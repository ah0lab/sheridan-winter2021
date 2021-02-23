import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../../services/service.service';

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.scss'],
})
export class C1Component implements OnInit {

  constructor(private route: ActivatedRoute,
              private sharedService: ServiceService) { }

  data: any;
  message: string;

  newMessage() {
    this.sharedService.setMessage(this.message);
  }

  ngOnInit() {
    this.data = this.route.snapshot.params.data;
    this.sharedService.sharedMessage.subscribe(
      message => this.message = message);
  }

}
