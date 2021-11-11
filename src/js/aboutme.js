import LocomotiveScroll from 'locomotive-scroll'

let scroll

export function mountAboutMe() {
  scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    direction: 'horizontal',
    repeat: true,
    getSpeed: !1,
  })
}

export function unmountAboutMe() {
  if (scroll) {
    scroll.destroy()
    scroll = null
  }
}
