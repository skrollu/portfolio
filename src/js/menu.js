import gsap from 'gsap'
import { Power3 } from 'gsap/all'

let mounted = false
const circleSize = 360 //360 deg in a circle

export function mountMenu() {
	rotateCircularLetters()
	//avoid to animate every time we return to menu page
	if (!mounted) {
		animateSocialsAndLanguage()
	}
	mounted = true
}

function rotateCircularLetters() {
	const letters = document.querySelectorAll(
		'.menu-circular-infinite-text .img-letter-circular'
	)
	const numberOfLetters = letters.length

	letters.forEach((el, index) => {
		el.style.transform =
			'rotate(' + index * (circleSize / numberOfLetters) + 'deg)'
	})
}

function animateSocialsAndLanguage() {
	const socialsLinks = document.querySelectorAll('.social-link')
	const timeline = gsap.timeline({})

	socialsLinks.forEach((link, index) => {
		timeline.from(link, { y: 100, duration: 0.5 }, '+=0.1')
	})

	timeline.from(
		'.language-selector',
		{
			y: -100,
			duration: 1,
			ease: Power3.easeOut,
		},
		'+=0.1'
	)
}

export function unmountMenu() {}
