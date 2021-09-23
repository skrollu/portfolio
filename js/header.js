gsap.registerPlugin(TextPlugin)

// PRESENTATION TIMELINE
const cursor = document.querySelectorAll('.cursor')
gsap.to(cursor, { duration: 0.7, opacity: 0, repeat: -1, ease: 'power3.in'})

const words = [ "<Hello :)", "My name is Mathieu, a fullstack developper !", "You can find me as Skrollu on Github !", "This website presents every projects I worked on, during my free time...", "<- Here, you can contact me.", "Or scroll down and follow me for the visit :)" ]

const presentationCompleted = (event) => {
    
    const finishPresentationTL = gsap.timeline();

    //erase cursor
    finishPresentationTL.to(cursor, { duration: 1, opacity: 0, onComplete: () => { cursor.parentNode.removeChild(cursor) }})
    
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

    finishPresentationTL.add(arrowTimeline, '>');
}

const presentationTimeline = gsap.timeline({ onComplete: presentationCompleted});
presentationTimeline.to('cursor', { duration: 1, y: 50, ease: "none"})

words.forEach((word, index) => {
    let tl = gsap.timeline({ repeat: 1, yoyo: true, repeatDelay: 1});
    tl.to(".text", {
            duration: 1,
            text: {
                value: word,
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
