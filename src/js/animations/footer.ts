import gsap from 'gsap'

export function footer() {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: '.footer',
        start: 'center center',
      },
    })
    .to('.footer-santa-wheel', {
      rotate: 360 * 5 + 'deg',
      ease: 'power4.in',
      transformOrigin: 'center center',
      duration: 4,
    })
    .to(
      '.footer-santa',
      {
        x: 1000,
        ease: 'power4.in',
        transformOrigin: 'center center',
        duration: 4,
      },
      '<'
    )
    .fromTo(
      '.footer-gnomes',
      {
        yPercent: 100,
      },
      {
        yPercent: 0,
      }
    )
    .to(
      '.footer-tree-lights path',
      {
        filter: 'drop-shadow(0 0 15px #FDEBA9) drop-shadow(0 0 15px #FDEBA9) drop-shadow(0 0 15px #FDEBA9)',
        repeat: -1,
        yoyo: true,
        stagger: 0.05,
      },
      '<'
    )
}
