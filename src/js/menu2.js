export function mountMenu2() {
	console.log('coucou')
	const letters = document.querySelectorAll('.letter2')
	const numberOfLetters = letters.length
	const circleSize = 360 //360 deg in a circle

	letters.forEach((el, index) => {
		el.style.transform =
			'rotate(' + index * (circleSize / numberOfLetters) + 'deg)'
	})
}
