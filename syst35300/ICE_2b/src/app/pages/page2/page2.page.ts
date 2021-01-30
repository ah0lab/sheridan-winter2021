import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.page.html',
  styleUrls: ['./page2.page.scss'],
})
export class Page2Page implements OnInit {

  constructor (private router:Router) { }
  goPage1() {
    this.router.navigate (['page1']).then (nav => {
      console.log (nav);
    }, err => { console.log (err); });
  }

  ngOnInit() {
  }

}
