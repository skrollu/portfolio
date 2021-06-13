const sideBar = document.querySelector('.side-bar');
const openCloseBtn = document.querySelector('.btn-openCloseContact')

let openClose = 0; //1 for open

const openCloseContact = (e) => {
    if(openClose == 0) {
        openClose = 1
        sideBar.style.transform = `translateX(0px)`;
        openCloseBtn.style.left = `410px`
    } else {
        openClose = 0
        sideBar.style.transform = `translateX(${-400}px)`;
        openCloseBtn.style.left = `10px`
    }
    console.log("héhé", openClose)
}