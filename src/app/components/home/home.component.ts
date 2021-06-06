import { Component, ViewEncapsulation } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent  {

  constructor() { }


  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    dots: false,
    navSpeed: 600,
    navText: ['&#8249', '&#8250;'],
    responsive: {
      0: {
        items: 1 
      },
      400: {
        items: 2
      },
      760: {
        items: 3
      },

    },
    nav: false
  }

  customOptions2:OwlOptions = {
    loop: true,
    autoplay: true,
    navSpeed: 800,
    navText: ['&#8249', '&#8250;'],
    responsive: {
      0: {
        items: 1 
      },
      400: {
        items: 2
      },
      760: {
        items: 2
      },

    },
    nav: false
  }

  customOptions3:OwlOptions = {
    loop: true,
    autoplay: true,
    navSpeed: 800,
    navText: ['&#8249', '&#8250;'],
    responsive: {
      0: {
        items: 1 
      },
      400: {
        items: 2
      },
      760: {
        items: 5
      },

    },
    nav: false
  }

}
