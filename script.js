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

document.addEventListener("DOMContentLoaded", () => {
    // Per i Progetti
    const projectsContainer = document.getElementById("projects-container");
    if (projectsContainer) {
        fetch("projects.json")
            .then(response => response.json())
            .then(data => {
                data.forEach(project => {
                    const projectCard = document.createElement("div");
                    projectCard.className = "project-card relative p-8 rounded-xl border border-white/20 bg-white/10 backdrop-blur-md shadow-xl hover:shadow-2xl transition-transform transform hover:scale-105";
                    projectCard.innerHTML = `
            <h3 class="text-3xl font-semibold mb-4 drop-shadow-lg">${project.title}</h3>
            <p class="text-white/90 mb-8 leading-relaxed">${project.description}</p>
            <a href="${project.link}" target="_blank" class="btn btn-outline w-fit">Visualizza</a>
          `;
                    projectsContainer.appendChild(projectCard);
                });
            })
            .catch(error => console.error("Errore nel caricamento dei progetti:", error));
    }

    // Per le Pubblicazioni
    const publicationsContainer = document.getElementById("publications-container");
    if (publicationsContainer) {
        fetch("publications.json")
            .then(response => response.json())
            .then(data => {
                data.forEach(publication => {
                    const publicationCard = document.createElement("div");
                    publicationCard.className = "relative p-8 rounded-xl border border-white/20 bg-white/10 backdrop-blur-md shadow-xl hover:shadow-2xl transition-transform transform hover:scale-105";
                    publicationCard.innerHTML = `
            <h3 class="text-3xl font-semibold mb-4 drop-shadow-lg">${publication.title}</h3>
            <p class="text-white/90 italic mb-4">Autori: ${publication.authors}</p>
            <p class="text-white/90 mb-8 leading-relaxed">${publication.description}</p>
            <a href="${publication.link}" target="_blank" class="btn btn-outline w-fit">Leggi di più</a>
          `;
                    publicationsContainer.appendChild(publicationCard);
                });
            })
            .catch(error => console.error("Errore nel caricamento delle pubblicazioni:", error));
    }
});
