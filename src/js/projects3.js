import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import charming from 'charming'

let timelineSectionOne = null

export function mountProjects3() {
	gsap.registerPlugin(ScrollTrigger)
	mountSectionOne()
	mountSectionTwo()
	mountSectionThree()
	mountSectionFour()
	mountSectionFive()
}

function mountSectionOne() {
	const sectionOne = document.querySelector('#section-one')
	const card = document.querySelector('#section-one .card-container')
	const scaffoldCards = document.querySelectorAll(
		'#section-one .scaffold-container .scaffold-card'
	)

	//timelineSectionOne = gsap.timeline()

	/** LEFT CARD ANIMATION */
	/* 	timelineSectionOne.to(card, {
		scrollTrigger: {
			trigger: sectionOne,
			scrub: 0.5,
			start: 'top 30%',
		},

		yPercent: 50,
	})
 */
	/** RIGHT SCAFFOLD ANIMATION */
	/* 	timelineSectionOne.to(scaffoldCards, {
		scrollTrigger: {
			trigger: sectionOne,
			scrub: 1,
			start: 'top 30%',
		},

		xPercent: -35,
		stagger: 0.15,
	}) */
}

function mountSectionTwo() {
	const sectionTwo = document.querySelector('#section-two')
	const gridPanel = document.querySelector('#section-two .grid-panel')
	const sectionTitle = document.querySelector(
		'#section-two .section-title .title'
	)

	/** ANIMATE LEFT GRID PANEL */
	gsap.from(gridPanel, {
		scrollTrigger: {
			trigger: sectionTwo,
			start: 'top 90%',
		},
		duration: 0.7,
		xPercent: -500,
	})

	/** ANIMATE RIGHT SECTION TITLE */
	/* 	gsap.to(sectionTitle, {
		scrollTrigger: {
			trigger: sectionTwo,
			scrub: true,
		},
		yPercent: -200,
		duration: 1,
	}) */
}

function mountSectionThree() {
	const sectionThree = document.querySelector('#section-three')
	const gridCardsLeft = document.querySelectorAll(
		'#section-three .grid-panel .left'
	)
	const gridCardsRight = document.querySelectorAll(
		'#section-three .grid-panel .right'
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

function mountSectionFour() {
	const sectionFour = document.querySelector('#section-four')
	const title = document.querySelector('#section-four .section-title .title')
	charming(title, {
		setClassName: (index) => `titleChar titleChar-${index}`,
	})
	const titleArray = document.querySelectorAll(
		'#section-four .section-title .title .titleChar'
	)
	const projectCards = document.querySelectorAll(
		'#section-four .grid-panel .project-card'
	)

	gsap.from(titleArray, {
		scrollTrigger: {
			trigger: sectionFour,
			start: 'top 60%',
		},
		stagger: {
			each: 0.035,
		},
		duration: 0.8,
		x: 1500,
		opacity: 0,
	})

	gsap.from(projectCards, {
		scrollTrigger: {
			trigger: sectionFour,
			start: 'top 35%',
		},
		stagger: {
			each: 0.1,
		},
		duration: 0.4,
		x: -2000,
		skewX: -20,
		skewY: 30,
	})
}

function mountSectionFive() {
	// Tried to add collapse scrub effect (gravity) cf locomotive scroll speed + delay
	/*
	const sectionFive = document.querySelector('#section-five')
	const title = document.querySelector('#section-five .section-title .title')
	charming(title, {
		setClassName: (index) => `titleChar titleChar-${index}`,
	})
	const titleNodeList = document.querySelectorAll(
		'#section-five .section-title .title .titleChar'
	)

	//convert Node List to Array and reverse the titleArray
	const titleArray = Array.from(titleNodeList)
	titleArray.reverse()

	gsap.to(titleNodeList, {
		scrollTrigger: {
			trigger: sectionFive,
			start: 'top 90%',
			end: 'bottom top',
			scrub: 0.5,
		},
		stagger: {
			each: 0.01,
		},
		yPercent: 150,
		duration: 1,
	})
	*/

	const sectionFive = document.querySelector('#section-five')
	const title = document.querySelector('#section-five .section-title .title')
	gsap.from(title, {
		scrollTrigger: {
			trigger: sectionFive,
			start: 'top center',
		},
		opacity: 0,
		scale: 3,
		xPercent: 100,
		duration: 0.4,
	})
}

export function unmountProjects3() {
	timelineSectionOne = null
}
