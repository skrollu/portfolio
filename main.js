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
console.log(cards)
let selectedElement = null;

cards.forEach(elem => {
    elem.addEventListener('click', e => {
        selectedElement != null && selectedElement.classList.remove('selected');
        elem.classList.add('selected');
        selectedElement = elem;
    })
})
