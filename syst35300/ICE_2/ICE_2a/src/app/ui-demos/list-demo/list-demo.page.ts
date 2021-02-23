import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-demo',
  templateUrl: './list-demo.page.html',
  styleUrls: ['./list-demo.page.scss'],
})
export class ListDemoPage implements OnInit {

  pgArray = ['JavaScript', 'Go', 'Java', 'TypeScript', 'C#'];

  constructor() { }

  ngOnInit() {
  }

}
