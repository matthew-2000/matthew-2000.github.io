// GSAP Animations
gsap.from("header", {
    y: -80, opacity: 0, duration: 1, ease: "power4.out"
});

gsap.from("#hero h1 span", {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power4.out",
    stagger: 0.2
});

gsap.from("#hero p", {
    opacity: 0,
    y: 30,
    duration: 1,
    delay: 1.2,
    ease: "power4.out"
});

gsap.from("#hero .btn", {
    opacity: 0,
    scale: 0.95,
    duration: 1,
    delay: 1.5,
    ease: "power4.out"
});

// Fade-in sezioni scorrendo la pagina
function fadeInOnScroll(trigger) {
    gsap.from(trigger, {
        scrollTrigger: {
            trigger: trigger,
            start: "top 80%",
        },
        opacity: 0,
        y: 50,
        duration: 1.2,
        ease: "power4.out"
    });
}

fadeInOnScroll("#about");
fadeInOnScroll("h1");
fadeInOnScroll(".project-card");
