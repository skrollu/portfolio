import gsap from 'gsap'

export function mountMenu2() {
	const letters = document.querySelectorAll('.letter2')
	const numberOfLetters = letters.length
	const circleSize = 360 //360 deg in a circle

	letters.forEach((el, index) => {
		el.style.transform =
			'rotate(' + index * (circleSize / numberOfLetters) + 'deg)'
	})
}

export function animateSocials() {
	console.log('bonjour')
	const socialsLinks = document.querySelectorAll('.social-link')
	const timeline = gsap.timeline({})
	console.log(socialsLinks)

	socialsLinks.forEach((link, index) => {
		console.log('test2')
		timeline.from(link, { y: 100, duration: 0.7 }, '>') //${index}
	})

	timeline.startTime()
}
