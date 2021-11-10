import LocomotiveScroll from 'locomotive-scroll'

export function mountAboutMe() {
  console.log('aboutme')
  const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    direction: 'horizontal',
    repeat: true,
    getSpeed: !1,
  })
}
