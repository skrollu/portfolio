/*
const one = document.querySelector('#one')

one.addEventListener("mouseover", (e) => {
    var popDesc = document.createElement("div");
    popDesc.setAttribute('class', 'pop-desc')
    popDesc.setAttribute('style', `top: ${e.pageY}px; left: ${e.pageX}px;`)
    one.appendChild(popDesc)
})
*/

const cards = document.querySelectorAll('.card');
const description = document.querySelector('.description');
let selectedElement = null;

const descriptions = [
    "Gaumont is a work in progress project to recreate the real Gaumont website in Angular. With it I learned about the leaflet library to display points on a map and interact with them. This project is also where I discovered lots of CSS tricks and my love for styling website. Recently I worked on third party connection with passport.js but I didn't find the time to finish it... Every datas of this project come from my own API-project: <a href=\"https://github.com/skrollu/express-mongo-api\">express-mongo-api</a>",
    "Immob Announce is a project made in my 2nd year of MSc. It reproduces the concept of the famous website: Leboncoin.fr. Classic CRUD ad management for super user and Q&A possibility for the \"client\". Immob Annouce is also able to manage image files thanks to file thank to multer library. This project run with a Node Express server with a MongoDB and expose html template with pug technology."
]

let cardsList = [];
cards.forEach((card, index) => {
    cardsList.push({ index: index, card: card, value: descriptions[index]} );
})

cardsList.forEach(elem => {
    elem.card.addEventListener('click', e => {
        selectedElement != null && selectedElement.classList.remove('selected');
        elem.card.classList.add('selected');
        selectedElement = elem.card;

        description.innerHTML = elem.value
    })
})


