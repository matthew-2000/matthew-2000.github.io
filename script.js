const initLenis = () => {
  const lenis = new Lenis({
    smooth: true,
    lerp: 0.08,
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
};

const initThemeToggle = () => {
  const toggle = document.querySelector('.theme-toggle');
  const icon = toggle?.querySelector('i');
  const label = toggle?.querySelector('span');
  const stored = localStorage.getItem('theme-preference');

  const applyTheme = (theme) => {
    document.body.classList.toggle('theme-light', theme === 'light');
    document.body.classList.toggle('theme-dark', theme !== 'light');
    if (icon) {
      icon.setAttribute('data-lucide', theme === 'light' ? 'sun' : 'moon-star');
      lucide.createIcons();
    }
    if (label) {
      label.textContent = theme === 'light' ? 'Light' : 'Dark';
    }
  };

  let currentTheme = stored || (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
  applyTheme(currentTheme);

  toggle?.addEventListener('click', () => {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme-preference', currentTheme);
    applyTheme(currentTheme);
  });
};

const initMobileNav = () => {
  const toggle = document.querySelector('.menu-toggle');
  const mobileNav = document.getElementById('mobileNav');
  const navLinks = mobileNav?.querySelectorAll('a');

  toggle?.addEventListener('click', () => {
    mobileNav?.classList.toggle('open');
    const isOpen = mobileNav?.classList.contains('open');
    toggle?.querySelector('i')?.setAttribute('data-lucide', isOpen ? 'x' : 'menu');
    lucide.createIcons();
  });

  navLinks?.forEach((link) =>
    link.addEventListener('click', () => {
      mobileNav?.classList.remove('open');
      toggle?.querySelector('i')?.setAttribute('data-lucide', 'menu');
      lucide.createIcons();
    }),
  );
};

const initGSAP = () => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.from('.navbar', {
    y: -60,
    opacity: 0,
    duration: 1,
    ease: 'power4.out',
  });

  gsap.from('.hero-title', {
    y: 40,
    opacity: 0,
    duration: 1.4,
    ease: 'power4.out',
  });

  gsap.from(['.hero-role', '.hero-subtitle', '.hero-cta'], {
    y: 30,
    opacity: 0,
    duration: 1,
    delay: 0.2,
    ease: 'power4.out',
    stagger: 0.12,
  });

  gsap.from('.hero-stats .stat', {
    y: 30,
    opacity: 0,
    duration: 1,
    delay: 0.5,
    ease: 'power3.out',
    stagger: 0.15,
  });

  const sections = document.querySelectorAll('.section');
  sections.forEach((section) => {
    const cards = section.querySelectorAll('.about-card, .skill-block, .timeline-card, .education-card, .publication-card, .project-card, .music-card, .contact-card, .contact-form');
    if (cards.length) {
      gsap.from(cards, {
        scrollTrigger: {
          trigger: section,
          start: 'top 70%',
        },
        y: 40,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.15,
      });
    }
  });

  const skillBars = document.querySelectorAll('.skill-bar span');
  skillBars.forEach((bar) => {
    ScrollTrigger.create({
      trigger: bar,
      start: 'top 80%',
      onEnter: () => {
        gsap.to(bar, {
          scaleX: 1,
          duration: 1.2,
          ease: 'power3.out',
        });
      },
    });
  });
};

const initContactForm = () => {
  const form = document.getElementById('contactForm');
  if (!form) return;
  const feedback = form.querySelector('.form-feedback');

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    if (!name || !email || !message) {
      feedback.textContent = 'Compila tutti i campi per inviare il messaggio.';
      return;
    }

    const mailto = `mailto:matteo.ercolino01@gmail.com?subject=${encodeURIComponent('Nuovo contatto dal portfolio')}&body=${encodeURIComponent(`Ciao Matteo,%0D%0A%0D%0ASono ${name} (${email}).%0D%0A%0D%0A${message}`)}`;
    window.location.href = mailto;
    feedback.textContent = 'Grazie! Si aprirà il tuo client di posta per completare l’invio.';
    form.reset();
  });
};

const initCVModal = () => {
  const modal = document.getElementById('cvModal');
  const openers = document.querySelectorAll('[data-open-cv]');
  const closers = document.querySelectorAll('[data-close-cv]');

  if (!modal) return;

  openers.forEach((btn) =>
    btn.addEventListener('click', () => {
      modal.showModal();
      setTimeout(() => lucide.createIcons(), 10);
    }),
  );

  closers.forEach((btn) =>
    btn.addEventListener('click', () => {
      modal.close();
    }),
  );

  modal.addEventListener('click', (event) => {
    const dialogDimensions = modal.getBoundingClientRect();
    if (
      event.clientX < dialogDimensions.left ||
      event.clientX > dialogDimensions.right ||
      event.clientY < dialogDimensions.top ||
      event.clientY > dialogDimensions.bottom
    ) {
      modal.close();
    }
  });
};

const initCanvas = () => {
  const canvas = document.getElementById('hero-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const particles = [];
  const particleCount = 80;

  const resize = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };

  window.addEventListener('resize', resize);
  resize();

  class Particle {
    constructor() {
      this.reset();
    }

    reset() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.radius = Math.random() * 2 + 0.8;
      this.speedX = (Math.random() - 0.5) * 0.6;
      this.speedY = (Math.random() - 0.5) * 0.6;
      this.alpha = Math.random() * 0.4 + 0.2;
    }

    update() {
      this.x += this.speedX;
      this.y += this.speedY;

      if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
        this.reset();
      }
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(124, 101, 255, ${this.alpha})`;
      ctx.fill();
    }
  }

  for (let i = 0; i < particleCount; i += 1) {
    particles.push(new Particle());
  }

  const animate = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((particle, index) => {
      particle.update();
      particle.draw();

      for (let j = index + 1; j < particles.length; j += 1) {
        const other = particles[j];
        const dx = particle.x - other.x;
        const dy = particle.y - other.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 120) {
          ctx.beginPath();
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(other.x, other.y);
          ctx.strokeStyle = `rgba(110, 92, 231, ${0.1 - distance / 1200})`;
          ctx.lineWidth = 0.6;
          ctx.stroke();
        }
      }
    });

    requestAnimationFrame(animate);
  };

  animate();
};

const initYear = () => {
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
};

window.addEventListener('DOMContentLoaded', () => {
  lucide.createIcons();
  initLenis();
  initThemeToggle();
  initMobileNav();
  initGSAP();
  initContactForm();
  initCVModal();
  initCanvas();
  initYear();
});
