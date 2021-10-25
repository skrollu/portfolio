import { mountHeaderPresentation } from "./header";
import { mountProjectDescriptions } from "./main";
import Swup from 'swup';
import SwupHeadPlugin from '@swup/head-plugin';
import SwupFadeTheme from '@swup/fade-theme';

/**
 * Swup init
 */
const options = {
    plugins: [
        new SwupFadeTheme(),
        new SwupHeadPlugin()
    ],
    linkSelector:
        'a[href^="' +
        window.location.origin +
        '"]:not([data-no-swup]),' + 
        'a[href^="/"]:not([data-no-swup]),' +
        'a[href^="#"]:not([data-no-swup])' 
        /*+ 'a[href^="./"]:not([data-no-swup])', */
};

const swup = new Swup(options);

const init = () => {
    if(document.querySelector('#header-presentation')) {
        console.log("mount header presentation");
        mountHeaderPresentation();
    }
    
    if(document.querySelector('#project-descriptions')) {
        console.log("mount project description")
        mountProjectDescriptions();
    }
}

// run once 
init();
// this event runs for every page view after initial load
swup.on('contentReplaced', init);
swup.on('willReplaceContent', unload);

