//// ================================ Imports ======================================
//scss
// import 'bootstrap/dist/css/bootstrap-grid.css';
// import 'nouislider/dist/nouislider.css';
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import '../scss/index.scss';

//js
// import $ from 'jquery';
// import Swiper from 'swiper';
// import { Fancybox, Carousel, Panzoom } from '@fancyapps/ui';
// import IMask from 'imask';
// import Choices from 'choices.js';
// import autoComplete from '@tarekraafat/autocomplete.js';
// import validate from 'validate.js';
// import ApexCharts from 'apexcharts';
// import { rippleEffect, Ripple } from 'data-ripple';
// import noUiSlider from 'nouislider';
// import Scrollbar from 'smooth-scrollbar';

//// ================================ Code ======================================





const cardsSwiper = document.querySelector(".cards-swiper")
if (cardsSwiper){
    const swiper = new Swiper(cardsSwiper.querySelector(".swiper"), {
        modules : [Navigation],
        slidesPerView: 1,
        loop : true,

        navigation: {
    nextEl: '.swiper-next-button',
    prevEl: '.swiper-prev-button',
  },
  spaceBetween : 30,
  breakpoints: {
        576: {
          slidesPerView: 2
        },
        1200: {
          slidesPerView: 3
        },
      },
    })
}