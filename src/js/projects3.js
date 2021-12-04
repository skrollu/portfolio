import LocomotiveScroll from 'locomotive-scroll'

export function mountProjects3() {
	console.log('Projects 3 mount method')
	const bbb = new LocomotiveScroll({
		el: document.querySelector('[data-scroll-container3]'),
		smooth: true,
	})
}
