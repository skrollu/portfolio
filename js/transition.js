function mountHeaderPresentation() {
    gsap.registerPlugin(TextPlugin)

    // PRESENTATION TIMELINE
    const cursor = document.querySelector('.cursor')
    gsap.to(cursor, { duration: 0.7, opacity: 0, repeat: -1, ease: 'power3.in'})

    const sentences = [ "Hello :)", "I'm Mathieu, a fullstack developper !", "You can find me as Skrollu on Github !", "This website presents every projects I worked on, during my free time...", "<- Here, you can contact me.", "Or scroll down and follow me for the visit :)" ]
    //const sentences = [ "coucou" ];

    // event triggered when presentation is finished
    const presentationCompleted = (event) => {
        const finishPresentationTL = gsap.timeline();

        //erase cursor
        finishPresentationTL.to(cursor, { duration: 1, opacity: 0, onComplete: () => {
                let presentationText = document.querySelector('.presentation-text');
                presentationText.removeChild(cursor) 
            }});
        
        //ARROWS 
        let header = document.querySelector('header');
        let arrowsDiv = document.createElement('div');
        arrowsDiv.className += "arrows-container"
        let arrow1Div = document.createElement('div')
        let arrow2Div = document.createElement('div')
        arrow1Div.className += "arrow"
        arrow2Div.className += "arrow"
        arrowsDiv.appendChild(arrow1Div)
        arrowsDiv.appendChild(arrow2Div)
        header.appendChild(arrowsDiv)

        //Arrows infinite timeline
        const arrowTimeline = gsap.timeline();
        arrowTimeline.from(arrowsDiv,{ duration: 0.5, alpha: 0 })
        arrowTimeline.to(arrowsDiv, { duration: 0.7, y: 20, yoyo: true, repeat: -1, ease: 'power2.in' })

        finishPresentationTL.add(arrowTimeline, '+0.1');

        // resize header
        const resizeHeaderTimeline = gsap.timeline();
        resizeHeaderTimeline.to('.header', { duration: 1, height: 250}) //be carefull height can't be lower than min-height  property
        finishPresentationTL.add(resizeHeaderTimeline, '+0.1')
    }

    const presentationTimeline = gsap.timeline({ onComplete: presentationCompleted});

    //Manage every sentence timeline (duration, repeatDelay settings...)
    sentences.forEach((sentence, index) => {
        let tl = gsap.timeline({ repeat: 1, yoyo: true, repeatDelay: 1});
        tl.to(".text", {
                duration: 1,
                text: {
                    value: sentence,
                },
            },
            "+=0.1"
        )

        switch(index) {
            case 0: 
                break;
            case 1: 
                tl.duration(2)
                tl.repeatDelay(2)
                break;
            case 2:
                tl.duration(1.5)
                tl.repeatDelay(2)
                break;
            case 3:
                tl.duration(3.5)
                tl.repeatDelay(2)
                break;
            case 4:
                tl.duration(2)
                tl.repeatDelay(1)
                break;
            case 5:
                tl.duration(2)
                tl.repeatDelay(1)
                break;
            default: 
                tl.repeatDelay(1)
                break;
        }
        presentationTimeline.add(tl);
    })
}

function mountProjectDescriptions() {
    let cards = document.querySelectorAll('.card');
    const description = document.querySelector('.description');
    const cardTitle = document.querySelector('.card-title')
    
    const descriptions = [
        { index: 1, title: "Gaumont Angular", description: "<a class=\"description-link\" href=\"https://github.com/skrollu/angular-gaumont\">Gaumont</a> is a work in progress project to recreate the real Gaumont website in Angular. With it I learned about the leaflet library to display points on a map and interact with them. This project is also where I discovered lots of CSS tricks and my love for styling website. Recently I worked on third party connection with passport.js but I didn't find the time to finish it... Every datas of this project come from my own API-project: <a class=\"description-link\" href=\"https://github.com/skrollu/express-mongo-api\">express-mongo-api</a>"},
        { index: 2, title: "Arduino Lego Controller", description: "<a class=\"description-link\" href=\"https://github.com/skrollu/arduino-mern-lego-controller\">Lego Controller</a> is a project made in IOT class courses during my 2nd year of MSc. It's a FullStack project using React client and Node.js server communicating with an Arduino Uno and a Mongo database. We also a sliding door in Lego combined with a motor branched on the Arduino. A physical button allows us to open/close the door or, we can do it on the React application. Every interaction are register in DB and displayed on and LCD screen and computer screen."},
        { index: 3, title: "Immob Annouce",  description: "<a class=\"description-link\" href=\"https://github.com/skrollu/angular-gaumont\">Immob Announce</a> is a project made during my 2nd year of MSc. It reproduces the concept of the famous website: Leboncoin.fr. Classic CRUD ad management for super user and Q&A possibility for the \"client\". Immob Annouce is also able to manage image files thanks to file thank to multer library. This project run with a Node Express server with a MongoDB and expose html template with pug technology." }
    ];
    
    // list of object: {index, card html element, description}
    let cardsList = [];
    cards.forEach((card, index) => {
        cardsList.push({ index: index, card: card, value: descriptions[index]} );
    })
    
    function activeCard(element){
        element.card.classList.add('active');
        cardTitle.innerHTML = element.value.title
        description.innerHTML = element.value.description
    }
    
    //By default active the middle card
    activeCard(cardsList[1])
    
    cardsList.forEach(elem => {
        elem.card.addEventListener('mouseover', e => {
            //remove active class for every card
            cardsList.forEach( item => {
                item.card.classList.remove('active')
            });
            
            activeCard(elem);
        });
    })
}

/*
function unmountProjectDescriptions() {
    console.log("test unmount 1")
    console.log(cards)
    if(cards) {
        console.log("test unmount 2")
        cards.forEach((card, index) => {
            console.log(card)
            card.removeEventListener('mouseover', () => {
                console.log("unmount card description " + index);
            })
        })
    }
}
*/

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

let count = 0;

const init = () => {
    count++;
    console.log("bonjour " + count)

    if(document.querySelector('#header-presentation')) {
        console.log("mount header presentation");
        mountHeaderPresentation();
    }
    
    if(document.querySelector('#project-descriptions')) {
        console.log("mount project description")
        mountProjectDescriptions();
    }
}

function unload() {
    /*
    if(document.querySelector('#project-descriptions')) {
        console.log("unmount project description")
        unmountProjectDescriptions();
    }
    */
}

// run once 
init();
// this event runs for every page view after initial load
swup.on('contentReplaced', init);
swup.on('willReplaceContent', unload);

