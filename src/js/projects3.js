import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

let timelineSectionOne = null

export function mountProjects3() {
	gsap.registerPlugin(ScrollTrigger)
	mountSectionOne()
	mountSectionTwo()
	mountSectionThree()
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
		},

		yPercent: 50,
	})

	/** RIGHT SCAFFOLD ANIMATION */
	timelineSectionOne.to(scaffoldCards, {
		scrollTrigger: {
			trigger: sectionOne,
			scrub: 1,
			start: 'top 30%',
		},

		xPercent: -35,
		stagger: 0.15,
	})
}

function mountSectionTwo() {
	const sectionTwo = document.querySelector('#section-two')
	const gridPanel = document.querySelector('#section-two .grid-panel')
	const sectionTitle = document.querySelector(
		'#section-two .section-title .title'
	)

	/** ANIMATE LEFT GRID PANEL */
	gsap.from(gridPanel, {
		scrollTrigger: sectionTwo,
		duration: 1,
		x: -500,
	})

	/** ANIMATE RIGHT SECTION TITLE */
	gsap.to(sectionTitle, {
		scrollTrigger: {
			trigger: sectionTwo,
			scrub: true,
		},
		yPercent: -80,
	})

	/**ANIMATE SECTION TWO */
	/*
	gsap.to(sectionTwo, {
		scrollTrigger: {
			trigger: sectionTwo,
			scrub: true,
			start: '20% center',
		},
		yPercent: 30,
	})
	*/
}

function mountSectionThree() {
	const sectionThree = document.querySelector('#section-three')
	const gridCardsLeft = document.querySelectorAll(
		'#section-three .grid-panel .left'
	)
	const gridCardsRight = document.querySelectorAll(
		'#section-three .grid-panel .right'
	)
	const sectionTitle = document.querySelector(
		'#section-three .section-title .title'
	)

	gsap.from(gridCardsLeft, {
		scrollTrigger: {
			trigger: sectionThree,
			scrub: false,
			start: 'top center',
		},
		duration: 1.5,
		x: -700,
		skewX: 20,
		skewY: 30,
		opacity: 0,
		ease: 'power2.out',
		stagger: 0.3,
	})

	gsap.from(gridCardsRight, {
		scrollTrigger: {
			trigger: sectionThree,
			scrub: false,
			start: 'top center',
		},
		duration: 1.5,
		x: 700,
		skewX: -20,
		skewY: -30,
		opacity: 0,
		ease: 'power2.out',
		stagger: 0.3,
	})
}

export function unmountProjects3() {
	timelineSectionOne = null
}
