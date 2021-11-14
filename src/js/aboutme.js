import LocomotiveScroll from 'locomotive-scroll'
import { gsap } from 'gsap'
import { TextPlugin } from 'gsap/TextPlugin'

let scroll

export function mountAboutMe() {
	scroll = new LocomotiveScroll({
		el: document.querySelector('[data-scroll-container]'),
		smooth: true,
		direction: 'horizontal',
		repeat: true,
		getSpeed: !1,
	})

	// PRESENTATION TIMELINE
	gsap.registerPlugin(TextPlugin)
	const sentence = "Hello, I'm Mathieu Ibersien a young fullstack developer"
	const writeTextDuration = 3

	console.log(`+=${writeTextDuration / sentence.length}`)

	//erase cursor HTML element on presentation completed
	const presentationCompleted = (event) => {
		const finishPresentationTL = gsap.timeline()
		//erase cursor
		finishPresentationTL.to(cursor, {
			duration: 0.7,
			opacity: 0,
			onComplete: () => {
				let presentationText = document.querySelector(
					'.aboutme-presentation-text'
				)
				presentationText.removeChild(cursor)
			},
		})
	}

	//Cursor flash animation
	const cursor = document.querySelector('.cursor')
	gsap.to(cursor, {
		duration: 0.7,
		opacity: 0,
		repeat: -1,
		ease: 'power3.in',
	})

	let timeline = gsap.timeline({
		onComplete: presentationCompleted,
	})

	timeline.to(
		'.aboutme-text',
		{
			duration: writeTextDuration,
			text: {
				value: sentence,
			},
		},
		`+=${writeTextDuration / sentence.length}`
	)
}

export function unmountAboutMe() {
	if (scroll) {
		scroll.destroy()
		scroll = null
	}
}
