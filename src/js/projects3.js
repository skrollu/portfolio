import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function mountProjects3() {
	mountSectionOne()
	mountSectionTwo()
}

function mountSectionOne() {
	const sectionOne = document.querySelector('#section-one')
	const card = document.querySelector('#section-one .card-container')
	const scaffoldCards = document.querySelectorAll(
		'#section-one .scaffold-container .scaffold-card'
	)

	console.log(scaffoldCards)
	const timeline = gsap.timeline()

	/**LEFT CARD ANIMATION */
	timeline.to(card, {
		scrollTrigger: {
			trigger: sectionOne,
			scrub: 0.5,
			start: 'top 30%',
			markers: true,
		},

		yPercent: 50,
	})

	//scaffoldCards.forEach((element) => {})

	timeline.to(scaffoldCards, {
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
	console.log('gsap')
	gsap.from('.grid-panel', {
		scrollTrigger: '.grid-panel',
		duration: 1,
		x: -500,
	})
}
