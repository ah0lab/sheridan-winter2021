import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchbar-demo',
  templateUrl: './searchbar-demo.page.html',
  styleUrls: ['./searchbar-demo.page.scss'],
})
export class SearchbarDemoPage implements OnInit {

  constructor() { }

  items = [
    'item_1',
    'item_2',
    'Item_3'
  ];

  allItems = this.items;

  search(ev: any) {
    const val = ev.target.value;
    if (val && val.trim() !== '') {
      this.items = this.allItems.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    } else { this.items = this.allItems; }
  }

  onClick(item) {
    console.log(item + ' selected');
  }

  ngOnInit() {
  }

}
