import Swiper, { Navigation, Pagination } from "swiper";
Swiper.use([Navigation, Pagination]);
import "swiper/css";
import 'swiper/css/navigation';
import "swiper/css/pagination";

new Swiper(".slider", {
    navigation: {
      nextEl: ".team-btn__next",
      prevEl: ".team-btn__prev",
    },
    slidesPerView: 4,
    spaceBetween: 40,
    loop: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      560: {
        slidesPerView: 2,
      },
      845: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      },
    },
  });