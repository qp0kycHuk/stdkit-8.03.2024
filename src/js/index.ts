import showPass from './show-pass'
import theme from './theme'
import fancybox from './fancybox'
import phonemask from './phonemask/phonemask'
import scrollTo from './scrollTo'
import tab from 'npm-kit-tab'
import toggle from 'npm-kit-toggle'
import ripple from '@qpokychuk/ripple'
import swiper from './swiper'
import { saveAs } from 'file-saver'
import timer from './timer'
import animations from './animations/animations'

import '../scss/index.scss'

window.addEventListener('DOMContentLoaded', () => loadHandler())

function loadHandler() {
  showPass.init()
  scrollTo.init()
  tab.init()
  toggle.init()
  ripple.init()
  theme.init()
  fancybox.init()
  timer.init()
  animations.init()
  phonemask.init('[type="tel"]')

  ripple.attach('.btn')
  ripple.attach('.waved')
  ripple.deAttach('.btn-text')

  swiper.init()

  document.querySelector('.postcard-image')?.addEventListener('submit', downLoadPostCard)
  document.querySelector('.postcard-image-input')?.addEventListener('input', (event) => {
    const target = event.target as HTMLInputElement

    if (target?.value.length > 52) {
      target.value = target.value.substring(0, 52)
    }
  })
}

window.addEventListener('load', () => {
  document.body.classList.add('loaded')
})

async function downLoadPostCard(event: Event) {
  event.preventDefault()

  const btn = (event.target as HTMLElement).querySelector('[type="submit"]') as HTMLButtonElement

  btn.disabled = true

  const input = document.querySelector('.postcard-image-input') as HTMLInputElement
  const sign = input.value
  const image = await loadImage('img/postcard-image.svg')

  const canvas = document.createElement('canvas')

  const COOF = 4

  canvas.width = 1230 * COOF
  canvas.height = 620 * COOF
  const context = canvas.getContext('2d') as CanvasRenderingContext2D

  context?.drawImage(image, 0, 0, canvas.width, canvas.height)

  context.fillStyle = '#302B44'
  context.font = `600 ${20 * COOF}px 'Montserrat'`
  const textWidth = context.measureText(sign).width

  context.fillText(sign, canvas.width / 2 - textWidth / 2, 185 * COOF, 640 * COOF)

  canvas.toBlob(function (blob) {
    if (!blob) return
    saveAs(blob, 'std KIT poscard.png')
  })

  btn.disabled = false
}

function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const image = new Image()

    image.onload = () => resolve(image)
    image.onabort = reject

    image.src = src
  })
}

// Пришли пупа и лупа получать зарплату, но в бухгалтерии что то напутали и лупа получил за пупу, а пупа за лупу
