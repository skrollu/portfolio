import gsap from 'gsap'

export function mountMenu() {
	const letters = document.querySelectorAll('.letter')
	const numberOfLetters = letters.length
	const circleSize = 360 //360 deg in a circle

	letters.forEach((el, index) => {
		el.style.transform =
			'rotate(' + index * (circleSize / numberOfLetters) + 'deg)'
	})

	animateSocials()
}

function animateSocials() {
	const socialsLinks = document.querySelectorAll('.social-link')
	const timeline = gsap.timeline({})

	socialsLinks.forEach((link, index) => {
		timeline.from(link, { y: 100, duration: 0.5 }, '+=0.1')
	})
}
