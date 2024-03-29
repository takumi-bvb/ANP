// core version + navigation, pagination modules:
import Swiper, {
  Thumbs,
  Autoplay,
} from 'swiper';

const swiper = new Swiper(".mySwiper", {
  spaceBetween: 10,
  slidesPerView: 4,
});

const swiper2 = new Swiper(".mySwiper2", {
  loop: true,
  speed: 1000,
  spaceBetween: 10,
  thumbs: {
    swiper: swiper,
  },
  modules: [Thumbs],
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  modules: [Autoplay],
});