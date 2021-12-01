import LocomotiveScroll from 'locomotive-scroll'

export function mountProjects2() {
	console.log('Projects 2 moutn method')
	initLocomotiveScroll()
}

const initLocomotiveScroll = () => {
	const scroll = new LocomotiveScroll({
		el: document.querySelector('[data-scroll-container]'),
		smooth: true,
	})
}
