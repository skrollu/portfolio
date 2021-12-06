import LocomotiveScroll from 'locomotive-scroll'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export function mountProjects3() {
	console.log('Projects 3 mount method')
	const bbb = new LocomotiveScroll({
		el: document.querySelector('[data-scroll-container3]'),
		smooth: true,
		firefoxMultiplier: 100,
	})

	mountSectionTwo()
}

function mountSectionTwo() {
	console.log('gsap')
	gsap.registerPlugin(ScrollTrigger)
	gsap.from('.grid-panel', {
		scrollTrigger: '.grid-panel',
		duration: 1,
		x: -500,
	})
}
