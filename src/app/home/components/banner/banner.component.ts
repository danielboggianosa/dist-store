import { Component, OnInit } from '@angular/core';
import SwiperCore from 'swiper';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  images: string[] = [
    'https://picsum.photos/1919/250',
    'https://picsum.photos/1920/250',
    'https://picsum.photos/1921/250',
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onSwiper(swiper: any) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }

}
