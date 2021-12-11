import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

let timelineSectionOne = null
let timelineSectionTwo = null

export function mountProjects3() {
	gsap.registerPlugin(ScrollTrigger)
	mountSectionOne()
	//mountSectionTwo()
}

function mountSectionOne() {
	const sectionOne = document.querySelector('#section-one')
	const card = document.querySelector('#section-one .card-container')
	const scaffoldCards = document.querySelectorAll(
		'#section-one .scaffold-container .scaffold-card'
	)

	timelineSectionOne = gsap.timeline()

	/** LEFT CARD ANIMATION */
	timelineSectionOne.to(card, {
		scrollTrigger: {
			trigger: sectionOne,
			scrub: 0.5,
			start: 'top 30%',
			markers: true,
		},

		yPercent: 50,
	})

	/** RIGHT SCAFFOLD ANIMATION */
	timelineSectionOne.to(scaffoldCards, {
		scrollTrigger: {
			trigger: sectionOne,
			scrub: 1,
			start: 'top 30%',
			markers: true,
		},

		xPercent: -35,
		stagger: 0.15,
	})
}

function mountSectionTwo() {
	timelineSectionTwo = gsap.from('.grid-panel', {
		scrollTrigger: '.grid-panel',
		duration: 1,
		x: -500,
	})
}

export function unmountProjects3() {
	timelineSectionOne = timelineSectionTwo = null
}
