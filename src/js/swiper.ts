import Swiper, { Navigation, Autoplay, Manipulation } from 'swiper'

function init() {
  Swiper.use([Navigation, Autoplay, Manipulation])
  Swiper.defaults.touchStartPreventDefault = false

  new Swiper('.reviews-slider', {
    slidesPerView: 'auto',
    centeredSlides: true,
    loop: true,
    speed: 3000,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
  })
}

export default { init }
