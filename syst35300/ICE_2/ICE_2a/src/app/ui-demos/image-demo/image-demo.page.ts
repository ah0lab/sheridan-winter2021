import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-demo',
  templateUrl: './image-demo.page.html',
  styleUrls: ['./image-demo.page.scss'],
})
export class ImageDemoPage implements OnInit {
  images = [
    {
      src: 'https://www.placehold.it/100',
      text: 'This is an image'
    },
    {
      src: 'https://www.placehold.it/50',
      text: 'This is a smaller image'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
