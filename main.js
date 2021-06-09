const arrows = document.querySelectorAll('.arrow')

const arrowTimeline = gsap.timeline({ yoyo: true, repeat: -1 });

arrowTimeline.to(arrows, { duration: 0.7, y: 20, ease: 'power2.in' })
