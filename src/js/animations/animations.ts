import gsap from 'gsap'
import { randomInRange } from '../randomInRange'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

function init() {
  gsap.registerPlugin(ScrollTrigger)
  started()
}

function started() {
  const recommendations = document.querySelectorAll('.recommendation-item')

  recommendations.forEach((item) => {
    gsap.fromTo(
      item.querySelector('.recommendation-item-img img'),
      {
        yPercent: 0,
      },
      {
        yPercent: -20,
        scrollTrigger: {
          trigger: item,
          scrub: 1,
        },
      }
    )
  })
}

export default { init }
