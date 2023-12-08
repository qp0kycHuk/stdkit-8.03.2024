import gsap from 'gsap'
import { randomInRange } from '../randomInRange'

export function snowman() {
  const options: gsap.TweenVars = {
    yoyo: true,
    repeat: -1,
    ease: 'power1.inOut',
    transformOrigin: '50% 50%',
    duration: 1.1,
    scrollTrigger: {
      trigger: '.started',
      toggleActions: 'play pause resume pause',
    },
  }
  const moveMultiple = 2
  const rotateMultiple = 1

  // left tree
  {
    const leftOptions: gsap.TweenVars = {
      ...options,
    }

    gsap.fromTo(
      '.tree-path.tree-path-left.tree-path-top',
      {
        rotate: rotateMultiple * 4,
        x: moveMultiple * 4,
      },
      {
        rotate: rotateMultiple * -4,
        x: moveMultiple * -4,
        ...leftOptions,
      }
    )
    gsap.fromTo(
      '.tree-path.tree-path-left.tree-path-middle-1',
      {
        rotate: rotateMultiple * 3,
        x: moveMultiple * 3,
      },
      {
        rotate: rotateMultiple * -3,
        x: moveMultiple * -3,
        ...leftOptions,
      }
    )
    gsap.fromTo(
      '.tree-path.tree-path-left.tree-path-middle-2',
      {
        rotate: rotateMultiple * 2,
        x: moveMultiple * 2,
      },
      {
        rotate: rotateMultiple * -2,
        x: moveMultiple * -2,
        ...leftOptions,
      }
    )
    gsap.fromTo(
      '.tree-path.tree-path-left.tree-path-bottom',
      {
        rotate: rotateMultiple * 1,
        x: moveMultiple * 1,
      },
      {
        rotate: rotateMultiple * -1,
        x: moveMultiple * -1,
        ...leftOptions,
      }
    )
  }

  // front tree
  {
    const frontOptions: gsap.TweenVars = {
      ...options,
      delay: 0.1,
    }

    gsap.fromTo(
      '.tree-path.tree-path-front.tree-path-top',
      {
        rotate: rotateMultiple * 4,
        x: moveMultiple * 4,
      },
      {
        rotate: rotateMultiple * -4,
        x: moveMultiple * -4,
        ...frontOptions,
      }
    )
    gsap.fromTo(
      '.tree-path.tree-path-front.tree-path-middle-1',
      {
        rotate: rotateMultiple * 3,
        x: moveMultiple * 3,
      },
      {
        rotate: rotateMultiple * -3,
        x: moveMultiple * -3,
        ...frontOptions,
      }
    )
    gsap.fromTo(
      '.tree-path.tree-path-front.tree-path-middle-2',
      {
        rotate: rotateMultiple * 2,
        x: moveMultiple * 2,
      },
      {
        rotate: rotateMultiple * -2,
        x: moveMultiple * -2,
        ...frontOptions,
      }
    )
    gsap.fromTo(
      '.tree-path.tree-path-front.tree-path-bottom',
      {
        rotate: rotateMultiple * 1,
        x: moveMultiple * 1,
      },
      {
        rotate: rotateMultiple * -1,
        x: moveMultiple * -1,
        ...frontOptions,
      }
    )
  }

  // back tree
  {
    const backOptions = {
      ...options,
      delay: 0.2,
    }

    gsap.fromTo(
      '.tree-path.tree-path-back.tree-path-top',
      {
        rotate: rotateMultiple * 4,
        x: moveMultiple * 4,
      },
      {
        rotate: rotateMultiple * -4,
        x: moveMultiple * -4,
        ...backOptions,
      }
    )
    gsap.fromTo(
      '.tree-path.tree-path-back.tree-path-middle-1',
      {
        rotate: rotateMultiple * 3,
        x: moveMultiple * 3,
      },
      {
        rotate: rotateMultiple * -3,
        x: moveMultiple * -3,
        ...backOptions,
      }
    )
    gsap.fromTo(
      '.tree-path.tree-path-back.tree-path-middle-2',
      {
        rotate: rotateMultiple * 2,
        x: moveMultiple * 2,
      },
      {
        rotate: rotateMultiple * -2,
        x: moveMultiple * -2,
        ...backOptions,
      }
    )
    gsap.fromTo(
      '.tree-path.tree-path-back.tree-path-bottom',
      {
        rotate: rotateMultiple * 1,
        x: moveMultiple * 1,
      },
      {
        rotate: rotateMultiple * -1,
        x: moveMultiple * -1,
        ...backOptions,
      }
    )
  }

  // right tree
  {
    const rightOptions = {
      ...options,
      delay: 0.3,
    }

    gsap.fromTo(
      '.tree-path.tree-path-right.tree-path-top',
      {
        rotate: rotateMultiple * 4,
        x: moveMultiple * 4,
      },
      {
        rotate: rotateMultiple * -4,
        x: moveMultiple * -4,
        ...rightOptions,
      }
    )
    gsap.fromTo(
      '.tree-path.tree-path-right.tree-path-middle-1',
      {
        rotate: rotateMultiple * 3,
        x: moveMultiple * 3,
      },
      {
        rotate: rotateMultiple * -3,
        x: moveMultiple * -3,
        ...rightOptions,
      }
    )
    gsap.fromTo(
      '.tree-path.tree-path-right.tree-path-middle-2',
      {
        rotate: rotateMultiple * 2,
        x: moveMultiple * 2,
      },
      {
        rotate: rotateMultiple * -2,
        x: moveMultiple * -2,
        ...rightOptions,
      }
    )
    gsap.fromTo(
      '.tree-path.tree-path-right.tree-path-bottom',
      {
        rotate: rotateMultiple * 1,
        x: moveMultiple * 1,
      },
      {
        rotate: rotateMultiple * -1,
        x: moveMultiple * -1,
        ...rightOptions,
      }
    )
  }

  const flakes = document.querySelectorAll('.snowman-flakes path')

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
}
