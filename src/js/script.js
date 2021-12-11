import { mountHeaderPresentation } from './projects-header'
import { mountProjectDescriptions } from './projects-main'
import { mountAboutMe, unmountAboutMe } from './aboutme'
import { mountMenu, unmountMenu } from './menu'
import { mountProjects3, unmountProjects3 } from './projects3'
import Swup from 'swup'
import SwupHeadPlugin from '@swup/head-plugin'
import SwupFadeTheme from '@swup/fade-theme'

/**
 * Swup init
 */
const options = {
	plugins: [new SwupFadeTheme(), new SwupHeadPlugin()],
	linkSelector:
		'a[href^="' +
		window.location.origin +
		'"]:not([data-no-swup]),' +
		'a[href^="/"]:not([data-no-swup]),' +
		'a[href^="#"]:not([data-no-swup])',
	/*+ 'a[href^="./"]:not([data-no-swup])', */
}

const swup = new Swup(options)

const init = () => {
	if (document.querySelector('.menu-container')) {
		console.log('mount infinite circular text menu')
		mountMenu()
	}

	if (document.querySelector('.projects2-container')) {
		console.log('mount Projects 2')
		mountProjects2()
	}

	if (document.querySelector('.projects3-container')) {
		console.log('mount Projects 3')
		mountProjects3()
	}

	if (document.querySelector('#header-presentation')) {
		console.log('mount header presentation')
		mountHeaderPresentation()
	}

	if (document.querySelector('#project-descriptions')) {
		console.log('mount project description')
		mountProjectDescriptions()
	}

	if (document.querySelector('.aboutme-swup-init')) {
		console.log('mount about me page')
		mountAboutMe()
	}
}

const unload = () => {
	if (document.querySelector('.menu-container')) {
		console.log('unmount infinite circular text menu')
		unmountMenu()
	}

	if (document.querySelector('.aboutme-swup-init')) {
		console.log('unmount about me page')
		unmountAboutMe()
	}

	if (document.querySelector('.projects3-container')) {
		unmountProjects3()
	}
}

// run once
init()
// this event runs for every page view after initial load
swup.on('contentReplaced', init)
swup.on('willReplaceContent', unload)
