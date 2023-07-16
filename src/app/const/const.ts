import { OwlOptions } from 'ngx-owl-carousel-o'

export const expireTime = 5000

export const sliderOptions: OwlOptions = {
  loop: true,
  mouseDrag: false,
  touchDrag: true,
  pullDrag: false,
  dots: false,
  navSpeed: 700,
  navText: ['', ''],
  responsive: {
    0: {
      items: 1,
    },
  },
  nav: true,
}
