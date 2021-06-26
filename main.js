const one = document.querySelector('#one')

one.addEventListener("mouseover", (e) => {
    var popDesc = document.createElement("div");
    popDesc.setAttribute('class', 'pop-desc')
    popDesc.setAttribute('style', `top: ${e.pageY}px; left: ${e.pageX}px;`)
    one.appendChild(popDesc)
})