gsap.registerPlugin(TextPlugin)
gsap.registerPlugin(ScrollTrigger)

const cards = document.querySelectorAll('.card');
const description = document.querySelector('.description');
const cardTitle = document.querySelector('.card-title')

const descriptions = [
    { index: 1, title: "Gaumont Angular", description: "<a href=\"https://github.com/skrollu/angular-gaumont\">Gaumont</a> is a work in progress project to recreate the real Gaumont website in Angular. With it I learned about the leaflet library to display points on a map and interact with them. This project is also where I discovered lots of CSS tricks and my love for styling website. Recently I worked on third party connection with passport.js but I didn't find the time to finish it... Every datas of this project come from my own API-project: <a href=\"https://github.com/skrollu/express-mongo-api\">express-mongo-api</a>"},
    { index: 2, title: "Immob Annouce",  description: "<a href=\"https://github.com/skrollu/angular-gaumont\">Immob Announce</a> is a project made in my 2nd year of MSc. It reproduces the concept of the famous website: Leboncoin.fr. Classic CRUD ad management for super user and Q&A possibility for the \"client\". Immob Annouce is also able to manage image files thanks to file thank to multer library. This project run with a Node Express server with a MongoDB and expose html template with pug technology." },
    { index: 3, title: "Vuex", description: "<a href=\"https://github.com/skrollu/angular-gaumont\">Vuex-tuto</a> is a highly inspired by youtube tutorials project to try what's in my mind on new technologies to me."}
]

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


/*

//Helper on scroll

const helper = document.querySelector('.helper')
const timeline = gsap.timeline({
    scrollTrigger: {
        trigger: "#first-section",
        start: "top 80%",
        //markers: true,
    }
});

const textHelperWords = "Hover the different projects to learn more about them...";
timeline.from(helper, 1, { x: 600, ease: 'power3.inOut'})
        let tl = gsap.timeline({repeat: 1, yoyo: true, repeatDelay: 1});
        tl.to(".text-helper", {
                duration: 1.5,
                text: {
                    value: textHelperWords,
                },
            }
        )
        timeline.add(tl)
        .to(helper, 1, { x: 600, ease: 'power3.inOut'}, "+=.3");
*/