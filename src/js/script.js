import { mountHeaderPresentation } from './projects-header'
import { mountProjectDescriptions } from './projects-main'
import { mountAboutMe, unmountAboutMe } from './aboutme'
import { mountMenu } from './menu'
import { mountMenu2 } from './menu2'
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
	if (document.querySelector('.menu-circular-infinite-text')) {
		console.log('mount infinite circular text menu')
		mountMenu()
	}

	if (document.querySelector('.menu2-circular-infinite-text')) {
		console.log('mount infinite circular text menu2')
		mountMenu2()
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
	if (document.querySelector('.aboutme-swup-init')) {
		console.log('unmount about me page')
		unmountAboutMe()
	}
}

// run once
init()
// this event runs for every page view after initial load
swup.on('contentReplaced', init)
swup.on('willReplaceContent', unload)
