import gsap from 'gsap'
import { snowman } from './snowman'
import { gnome } from './gnome'
import { randomInRange } from '../randomInRange'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { footer } from './footer'

function init() {
  gsap.registerPlugin(ScrollTrigger)
  started()
}

function started() {
  snowman()
  gnome()
  footer()

  const flakes = document.querySelectorAll(
    '.started-snowflakes path, .feedback-snowflakes path, .postcard-snowflakes path, .footer-snowflakes path, .footer-tree-snowflakes path'
  )

  flakes.forEach((flake) => {
    const path = () => {
      const min = -10
      const max = 10

      return [
        { x: randomInRange(max, min), opacity: 0 },
        { x: randomInRange(max, min), opacity: 1 },
        { x: randomInRange(max, min), opacity: 1 },
        { x: randomInRange(max, min), opacity: 1 },
        { x: randomInRange(max, min), opacity: 1 },
        { x: randomInRange(max, min), opacity: 1 },
        { x: randomInRange(max, min), opacity: 0 },
      ]
    }

    gsap.set(flake, { opacity: 0 })

    gsap.fromTo(
      flake,
      { y: -50 },
      {
        keyframes: path(),

        y: 100,
        transformOrigin: '50% 50%',
        repeat: -1,
        delay: 'random(0, 3)',
        duration: 3,
        scrollTrigger: {
          trigger: flake.closest('section'),
          toggleActions: 'play pause resume pause',
        },
        // ease: 'none'
      }
    )
  })

  gsap.to('.started-snowman, .started-gnomes, .started-gifts', {
    y: -50,
    scrollTrigger: {
      trigger: '.started',
      start: 'top top',
      end: 'bottom top',
      scrub: 1,
    },
  })

  gsap.to('.started-subtitle, .started-timer, .started-title', {
    y: 50,
    scrollTrigger: {
      trigger: '.started',
      start: 'top top',
      end: 'bottom top',
      scrub: 1,
    },
  })

  gsap.to('.postcard-dragon', {
    duration: 2,
    rotate: 10,
    repeat: -1,
    yoyo: true,
    ease: 'none',
    scrollTrigger: {
      trigger: '.postcard',
      toggleActions: 'play pause resume pause',
    },
  })

  // button gradient
  {
    const duration = 5000
    let degree = 0

    setInterval(() => {
      document.body.style.setProperty('--button-gradient-deg', degree + 'deg')
      const coof = (degree > 45 && degree < 135) || (degree > 225 && degree < 315) ? 2 : 0.5

      degree += (coof * 360) / ((60 * duration) / 1000)

      if (degree >= 360) {
        degree = 0
      }
    }, duration / ((30 * duration) / 1000))
  }

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
