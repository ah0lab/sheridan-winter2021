import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-demo',
  templateUrl: './select-demo.page.html',
  styleUrls: ['./select-demo.page.scss'],
})
export class SelectDemoPage implements OnInit {

  breakfast = [
    {value: 'egg', desc: 'Egg'},
    {value: 'toast', desc: 'Toast'},
    {value: 'bacon', desc: 'Bacon'},
    {value: 'sausage', desc: 'Sausage'},
    {value: 'pancake', desc: 'Pan Cake'}
  ];

  constructor() { }

  upDate(sel: any) {
    console.log(sel.target.value);
  }

  ngOnInit() {
  }

}
