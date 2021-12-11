import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function mountProjects3() {
	mountSectionOne()
	mountSectionTwo()
}

function mountSectionOne() {}

function mountSectionTwo() {
	console.log('gsap')
	gsap.from('.grid-panel', {
		scrollTrigger: '.grid-panel',
		duration: 1,
		x: -500,
	})
}
