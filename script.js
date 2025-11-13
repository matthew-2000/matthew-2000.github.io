const SUPPORTED_LANGUAGES = ['it', 'en'];

const translations = {
  it: {
    'meta.title': 'Matteo Ercolino — Software Engineer',
    'meta.description': 'Matteo Ercolino — Software Engineer specializzato in Mobile, Web ed Extended Reality. Scopri portfolio, progetti, pubblicazioni e contatti.',
    'meta.keywords': 'Matteo Ercolino, Software Engineer, Mobile, Web, XR, Extended Reality, Portfolio',
    'nav.about': 'Chi sono',
    'nav.skills': 'Competenze',
    'nav.experience': 'Esperienze',
    'nav.projects': 'Progetti',
    'nav.contact': 'Contatti',
    'nav.education': 'Formazione',
    'nav.music': 'Music',
    'nav.viewCv': 'Visualizza CV',
    'nav.languageAria': 'Cambia lingua',
    'nav.languageItalian': 'Italiano',
    'nav.languageEnglish': 'Inglese',
    'nav.themeAria': 'Cambia tema',
    'nav.themeDark': 'Dark',
    'nav.themeLight': 'Light',
    'nav.menuOpen': 'Apri il menu mobile',
    'nav.menuClose': 'Chiudi il menu mobile',
    'hero.badge': 'Disponibile per collaborazioni selezionate',
    'hero.location': 'Salerno · Italia',
    'hero.role': 'Software Engineer — Mobile • Web • XR',
    'hero.subtitle': 'Costruisco esperienze digitali che uniscono tecnologia, creatività e interazione umana.',
    'hero.downloadCv': 'Download CV',
    'hero.previewCv': 'Preview CV',
    'hero.exploreProjects': 'Esplora i miei progetti',
    'hero.contactMe': 'Contattami',
    'hero.statExperience': 'anni tra mobile e web',
    'hero.statXr': 'anni in extended reality',
    'hero.statUsers': 'utenti raggiunti',
    'hero.cardTitle': 'Realtime Experience Designer',
    'hero.cardQuote': '“Tecnologia, empatia e narrazione si intrecciano per dare forma a prodotti memorabili.”',
    'hero.cardTagUx': 'Immersive UX',
    'hero.cardTagSpatial': 'Spatial Computing',
    'hero.cardTagAi': 'AI + XR',
    'hero.widgetDesignTitle': 'Design Systems',
    'hero.widgetDesignCaption': 'Workflow fluidi tra team cross-funzionali.',
    'hero.widgetXrTitle': 'XR Innovation',
    'hero.widgetXrCaption': 'Prototipazione rapida di esperienze immersive.',
    'hero.scroll': 'Scroll',
    'hero.scrollAria': 'Scorri verso il basso',
    'about.kicker': 'Chi Sono',
    'about.title': 'Ricerca, usabilità ed esperienze immersive',
    'about.subtitle': "Un approccio olistico allo sviluppo: strategia, design dell'interazione e realizzazione tecnica.",
    'about.visionTitle': 'Visione',
    'about.visionText': 'Sviluppatore con esperienza 6+ anni tra mobile e web, 3+ anni in realtà estesa. Guardo oltre l’interfaccia, costruendo ecosistemi digitali coerenti.',
    'about.researchTitle': 'Ricerca & Teaching',
    'about.researchText': 'Forte orientamento alla ricerca, all’usabilità e alla progettazione di esperienze digitali immersive. Esperienza come docente universitario per corsi Python.',
    'about.passionTitle': 'Passione',
    'about.passionText': 'Affascinato da tecnologie emergenti, interaction design e nuovi modelli di narrazione interattiva.',
    'about.pillResearch': 'Ricerca applicata',
    'about.pillUx': "Design centrato sull'utente",
    'about.pillLeadership': 'Team leadership',
    'about.openCv': 'Apri il CV',
    'skills.kicker': 'Competenze',
    'skills.title': 'Stack completo per prodotti scalabili e immersivi',
    'skills.subtitle': 'Dal concept alla delivery con un mix bilanciato di competenze tecniche e soft skills.',
    'skills.hardTitle': 'Hard Skills Core',
    'skills.mobile': 'Mobile development',
    'skills.web': 'Web development',
    'skills.xr': 'Extended Reality',
    'skills.swift': 'Swift',
    'skills.java': 'Java',
    'skills.python': 'Python',
    'skills.csharp': 'C#',
    'skills.javascript': 'JavaScript',
    'skills.html': 'HTML / CSS',
    'skills.c': 'C',
    'skills.toolsTitle': 'Tecnologie',
    'skills.toolIntellij': 'IntelliJ IDEA',
    'skills.toolXcode': 'Xcode',
    'skills.toolUnity': 'Unity',
    'skills.toolAndroidStudio': 'Android Studio',
    'skills.toolMongo': 'MongoDB',
    'skills.toolMysql': 'MySQL',
    'skills.toolFirebase': 'Firebase',
    'skills.toolFigma': 'Figma',
    'skills.toolSlack': 'Slack',
    'skills.toolDocker': 'Docker',
    'skills.toolSonar': 'SonarCloud',
    'skills.toolNode': 'NodeJS',
    'skills.toolFlask': 'Flask',
    'skills.toolOpenAI': 'OpenAI API',
    'skills.softTitle': 'Soft Skills',
    'skills.softCommunication': 'Comunicazione',
    'skills.softLeadership': 'Leadership',
    'skills.softOrganization': 'Organizzazione',
    'skills.softProblemSolving': 'Problem Solving',
    'skills.softCollaboration': 'Collaborazione',
    'experience.kicker': 'Esperienze',
    'experience.title': 'Impatto misurabile in progetti accademici e industriali',
    'experience.subtitle': 'Timeline interattiva con outcome, tecnologie chiave e responsabilità.',
    'experience.item1.date': '2025 — In corso',
    'experience.item1.org': 'UNISA · Progetto PRIN MediArSI',
    'experience.item1.title': 'Sviluppatore Web — MediArSI',
    'experience.item1.text': 'Web app responsive per committenze artistiche XI-XIII secolo. Gestione autonoma di architettura, sviluppo e UX.',
    'experience.item1.tag1': 'Next.js',
    'experience.item1.tag2': 'GSAP',
    'experience.item1.tag3': 'Design System',
    'experience.item2.date': '2023 — In corso',
    'experience.item2.org': 'HCI-USE Lab',
    'experience.item2.title': 'Collaborazione accademica · Pubblicazione',
    'experience.item2.text': 'Ricerca su tecnologie immersive, progettazione e sviluppo di prototipi XR. Tesi triennale e magistrale in Extended Reality.',
    'experience.item2.tag1': 'Unity',
    'experience.item2.tag2': 'UX Research',
    'experience.item2.tag3': 'XR',
    'experience.item3.date': '2024 — 2025',
    'experience.item3.org': 'UNINT Roma',
    'experience.item3.title': 'Docente Python',
    'experience.item3.text': 'Corsi “Introduzione alla Programmazione in Python” e “Python Programming for Hacking”. Percorsi hands-on con focus su creatività computazionale.',
    'experience.item3.tag1': 'Didattica',
    'experience.item3.tag2': 'Python',
    'experience.item3.tag3': 'Interactive Labs',
    'experience.item4.date': '2023 — 2024',
    'experience.item4.org': 'Fondazione Formit · UNINT',
    'experience.item4.title': 'Sviluppatore VR — CLASS',
    'experience.item4.text': 'App VR basata su REBT per abilità metacognitive. Progettazione experience flow, sviluppo Unity e ottimizzazione Meta Quest.',
    'experience.item4.tag1': 'Unity',
    'experience.item4.tag2': 'Oculus SDK',
    'experience.item4.tag3': 'XR Research',
    'education.kicker': 'Formazione',
    'education.title': 'Accademia e ricerca per una visione completa',
    'education.item1.date': 'Laurea Magistrale in Informatica — 110 e lode',
    'education.item1.title': 'Università di Salerno',
    'education.item1.thesis': 'Tesi: “Agenti virtuali adattivi: studio e design di agenti conversazionali in Extended Reality”.',
    'education.item2.date': 'Laurea Triennale in Informatica',
    'education.item2.title': 'Università di Salerno',
    'education.item2.thesis': 'Tesi: “Progettazione e sviluppo di un’app in realtà aumentata in ambienti culturali”.',
    'publications.kicker': 'Pubblicazioni',
    'publications.title': 'Disseminare conoscenza',
    'publications.subtitle': 'Ricerca applicata alla user experience e alla realtà estesa.',
    'publications.badge': "ACM CHIGREECE '23",
    'publications.year': '2023',
    'publications.titlePaper': 'Designing Virtual Interactive Objects to Enhance Visitors’ Experience in Cultural Exhibits',
    'publications.description': 'Studio e progettazione di oggetti interattivi virtuali per mostre culturali, con focus su engagement e narrazione.',
    'publications.cta': 'Leggi la pubblicazione',
    'projects.kicker': 'Progetti selezionati',
    'projects.title': 'Esperienze immersive e prodotti digitali real-world',
    'projects.subtitle': 'Card animate con approfondimenti e link diretti.',
    'projects.class.type': 'XR · Meta Quest',
    'projects.class.title': 'CLASS',
    'projects.class.text': 'Esperienza VR basata su REBT per supportare abilità metacognitive. Realizzata con Unity e Oculus SDK.',
    'projects.class.tag1': 'Unity',
    'projects.class.tag2': 'Oculus SDK',
    'projects.class.tag3': 'XR Research',
    'projects.class.cta': "Esplora l'esperienza",
    'projects.wakeapp.type': 'AI · Mobile · Flutter',
    'projects.wakeapp.title': 'WakeApp',
    'projects.wakeapp.text': 'Supporto alle persone con depressione maggiore tramite AI e riconoscimento emozionale. Vincitore “Giuria Coach”.',
    'projects.wakeapp.tag1': 'Flutter',
    'projects.wakeapp.tag2': 'Python',
    'projects.wakeapp.tag3': 'AI',
    'projects.wakeapp.cta': 'Apri il repository',
    'projects.campus.type': 'Mobile · iOS & Android',
    'projects.campus.title': 'CampUs Unisa',
    'projects.campus.text': 'App multipiattaforma per studenti universitari con oltre 30.000 download complessivi.',
    'projects.campus.tag1': 'Swift',
    'projects.campus.tag2': 'Kotlin',
    'projects.campus.tag3': 'Firebase',
    'projects.campus.android': 'Android',
    'projects.campus.ios': 'iOS',
    'music.kicker': 'Music',
    'music.title': 'Groove e tecnologia',
    'music.subtitle': 'Il basso elettrico come strumento per esplorare ritmo, ascolto e improvvisazione. Energia che porto anche nei team.',
    'music.role': 'Bassista · Live & Studio',
    'music.text': 'Performance live con band jazz-funk e session in studio per progetti indipendenti. Collaborazioni con artisti emergenti, cura degli arrangiamenti e sound design.',
    'music.tag1': 'Improvisation',
    'music.tag2': 'Teamwork',
    'music.tag3': 'Stage Presence',
    'contact.kicker': 'Contatti',
    'contact.title': 'Costruiamo il prossimo progetto',
    'contact.subtitle': 'Scrivimi per collaborazioni, consulenze o talk.',
    'contact.email': 'matteo.ercolino01@gmail.com',
    'contact.github': 'github.com/matthew-2000',
    'contact.linkedin': 'linkedin.com/in/matteo-ercolino',
    'contact.phone': '+39 351 770 6576',
    'contact.meeting': 'Calendario meeting su richiesta',
    'contact.bookCall': 'Prenota una call',
    'contact.form.nameLabel': 'Nome',
    'contact.form.namePlaceholder': 'Il tuo nome',
    'contact.form.emailLabel': 'Email',
    'contact.form.emailPlaceholder': 'nome@email.com',
    'contact.form.messageLabel': 'Messaggio',
    'contact.form.messagePlaceholder': 'Raccontami la tua idea',
    'contact.form.submit': 'Invia messaggio',
    'contact.form.feedback': '',
    'contact.form.error': 'Compila tutti i campi per inviare il messaggio.',
    'contact.form.success': 'Grazie! Si aprirà il tuo client di posta per completare l’invio.',
    'contact.form.mailSubject': 'Nuovo contatto dal portfolio',
    'contact.form.mailBody': 'Ciao Matteo,\n\nSono {name} ({email}).\n\n{message}',
    'footer.copy': '&copy; <span id="year"></span> Matteo Ercolino. Crafted with passione, design e codice.',
    'footer.backToTop': 'Torna su',
    'footer.projects': 'Progetti',
    'footer.contact': 'Contatti',
    'modal.title': 'Curriculum Vitae',
    'modal.closeAria': 'Chiudi la modale',
    'modal.profileTitle': 'Profilo',
    'modal.profileText': 'Software Engineer specializzato in esperienze immersive e prodotti digitali full-stack. Forte attitudine al lavoro cross-disciplinare, mentorship e ricerca accademica.',
    'modal.experienceTitle': 'Esperienza',
    'modal.experienceItem1': '<strong>2025—</strong> Sviluppatore Web, Progetto PRIN MediArSI – UNISA',
    'modal.experienceItem2': '<strong>2023—</strong> Collaboratore accademico, HCI-USE Lab',
    'modal.experienceItem3': '<strong>2024—2025</strong> Docente Python, UNINT Roma',
    'modal.experienceItem4': '<strong>2023—2024</strong> Sviluppatore VR, Fondazione Formit / UNINT',
    'modal.skillsTitle': 'Competenze',
    'modal.skill1': 'Mobile &amp; Web',
    'modal.skill2': 'Extended Reality',
    'modal.skill3': 'Unity',
    'modal.skill4': 'Swift',
    'modal.skill5': 'Python',
    'modal.skill6': 'Design System',
    'modal.skill7': 'Team Leadership',
    'modal.download': 'Scarica PDF',
    'modal.close': 'Chiudi',
  },
  en: {
    'meta.title': 'Matteo Ercolino — Software Engineer',
    'meta.description': 'Matteo Ercolino — Software Engineer specialising in Mobile, Web and Extended Reality. Explore portfolio, projects, publications and contact details.',
    'meta.keywords': 'Matteo Ercolino, Software Engineer, Mobile, Web, XR, Extended Reality, Portfolio',
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.experience': 'Experience',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    'nav.education': 'Education',
    'nav.music': 'Music',
    'nav.viewCv': 'View résumé',
    'nav.languageAria': 'Switch language',
    'nav.languageItalian': 'Italian',
    'nav.languageEnglish': 'English',
    'nav.themeAria': 'Toggle theme',
    'nav.themeDark': 'Dark',
    'nav.themeLight': 'Light',
    'nav.menuOpen': 'Open mobile menu',
    'nav.menuClose': 'Close mobile menu',
    'hero.badge': 'Available for selected collaborations',
    'hero.location': 'Salerno · Italy',
    'hero.role': 'Software Engineer — Mobile • Web • XR',
    'hero.subtitle': 'I craft digital experiences that blend technology, creativity and human interaction.',
    'hero.downloadCv': 'Download résumé',
    'hero.previewCv': 'Preview résumé',
    'hero.exploreProjects': 'Explore my projects',
    'hero.contactMe': 'Get in touch',
    'hero.statExperience': 'years across mobile and web',
    'hero.statXr': 'years in extended reality',
    'hero.statUsers': 'users reached',
    'hero.cardTitle': 'Realtime Experience Designer',
    'hero.cardQuote': '“Technology, empathy and storytelling come together to shape memorable products.”',
    'hero.cardTagUx': 'Immersive UX',
    'hero.cardTagSpatial': 'Spatial Computing',
    'hero.cardTagAi': 'AI + XR',
    'hero.widgetDesignTitle': 'Design Systems',
    'hero.widgetDesignCaption': 'Seamless workflows for cross-functional teams.',
    'hero.widgetXrTitle': 'XR Innovation',
    'hero.widgetXrCaption': 'Rapid prototyping of immersive experiences.',
    'hero.scroll': 'Scroll',
    'hero.scrollAria': 'Scroll down',
    'about.kicker': 'About',
    'about.title': 'Research, usability and immersive experiences',
    'about.subtitle': 'A holistic approach: strategy, interaction design and technical execution.',
    'about.visionTitle': 'Vision',
    'about.visionText': 'Developer with 6+ years across mobile and web and 3+ years in extended reality. I look beyond the interface to build cohesive digital ecosystems.',
    'about.researchTitle': 'Research & Teaching',
    'about.researchText': 'Strong focus on research, usability and immersive digital experiences. University lecturer for Python courses.',
    'about.passionTitle': 'Passion',
    'about.passionText': 'Fascinated by emerging technologies, interaction design and new forms of interactive storytelling.',
    'about.pillResearch': 'Applied research',
    'about.pillUx': 'Human-centred design',
    'about.pillLeadership': 'Team leadership',
    'about.openCv': 'Open résumé',
    'skills.kicker': 'Skills',
    'skills.title': 'Full-stack toolkit for scalable and immersive products',
    'skills.subtitle': 'From concept to delivery with a balanced mix of technical and soft skills.',
    'skills.hardTitle': 'Core hard skills',
    'skills.mobile': 'Mobile development',
    'skills.web': 'Web development',
    'skills.xr': 'Extended Reality',
    'skills.swift': 'Swift',
    'skills.java': 'Java',
    'skills.python': 'Python',
    'skills.csharp': 'C#',
    'skills.javascript': 'JavaScript',
    'skills.html': 'HTML / CSS',
    'skills.c': 'C',
    'skills.toolsTitle': 'Tools',
    'skills.toolIntellij': 'IntelliJ IDEA',
    'skills.toolXcode': 'Xcode',
    'skills.toolUnity': 'Unity',
    'skills.toolAndroidStudio': 'Android Studio',
    'skills.toolMongo': 'MongoDB',
    'skills.toolMysql': 'MySQL',
    'skills.toolFirebase': 'Firebase',
    'skills.toolFigma': 'Figma',
    'skills.toolSlack': 'Slack',
    'skills.toolDocker': 'Docker',
    'skills.toolSonar': 'SonarCloud',
    'skills.toolNode': 'NodeJS',
    'skills.toolFlask': 'Flask',
    'skills.toolOpenAI': 'OpenAI API',
    'skills.softTitle': 'Soft skills',
    'skills.softCommunication': 'Communication',
    'skills.softLeadership': 'Leadership',
    'skills.softOrganization': 'Organisation',
    'skills.softProblemSolving': 'Problem solving',
    'skills.softCollaboration': 'Collaboration',
    'experience.kicker': 'Experience',
    'experience.title': 'Measurable impact across academic and industry projects',
    'experience.subtitle': 'Interactive timeline with outcomes, core technologies and responsibilities.',
    'experience.item1.date': '2025 — Ongoing',
    'experience.item1.org': 'UNISA · PRIN MediArSI project',
    'experience.item1.title': 'Web Developer — MediArSI',
    'experience.item1.text': 'Responsive web app for XI-XIII century art commissions. Sole ownership of architecture, development and UX.',
    'experience.item1.tag1': 'Next.js',
    'experience.item1.tag2': 'GSAP',
    'experience.item1.tag3': 'Design System',
    'experience.item2.date': '2023 — Ongoing',
    'experience.item2.org': 'HCI-USE Lab',
    'experience.item2.title': 'Academic collaboration · Publication',
    'experience.item2.text': 'Research on immersive technologies, design and development of XR prototypes. Bachelor’s and Master’s theses in Extended Reality.',
    'experience.item2.tag1': 'Unity',
    'experience.item2.tag2': 'UX Research',
    'experience.item2.tag3': 'XR',
    'experience.item3.date': '2024 — 2025',
    'experience.item3.org': 'UNINT Rome',
    'experience.item3.title': 'Python Lecturer',
    'experience.item3.text': 'Courses “Introduzione alla Programmazione in Python” and “Python Programming for Hacking”. Hands-on paths focused on computational creativity.',
    'experience.item3.tag1': 'Teaching',
    'experience.item3.tag2': 'Python',
    'experience.item3.tag3': 'Interactive Labs',
    'experience.item4.date': '2023 — 2024',
    'experience.item4.org': 'Fondazione Formit · UNINT',
    'experience.item4.title': 'VR Developer — CLASS',
    'experience.item4.text': 'VR app based on REBT to support metacognitive skills. Experience flow design, Unity development and Meta Quest optimisation.',
    'experience.item4.tag1': 'Unity',
    'experience.item4.tag2': 'Oculus SDK',
    'experience.item4.tag3': 'XR Research',
    'education.kicker': 'Education',
    'education.title': 'Academic background and research for a 360° vision',
    'education.item1.date': 'Master’s Degree in Computer Science — 110 cum laude',
    'education.item1.title': 'University of Salerno',
    'education.item1.thesis': 'Thesis: “Adaptive virtual agents: study and design of conversational agents in Extended Reality.”',
    'education.item2.date': 'Bachelor’s Degree in Computer Science',
    'education.item2.title': 'University of Salerno',
    'education.item2.thesis': 'Thesis: “Design and development of an augmented reality app for cultural venues.”',
    'publications.kicker': 'Publications',
    'publications.title': 'Sharing knowledge',
    'publications.subtitle': 'Applied research on user experience and extended reality.',
    'publications.badge': "ACM CHIGREECE '23",
    'publications.year': '2023',
    'publications.titlePaper': 'Designing Virtual Interactive Objects to Enhance Visitors’ Experience in Cultural Exhibits',
    'publications.description': 'Study and design of virtual interactive objects for cultural exhibitions, focused on engagement and storytelling.',
    'publications.cta': 'Read the publication',
    'projects.kicker': 'Selected projects',
    'projects.title': 'Immersive experiences and real-world digital products',
    'projects.subtitle': 'Animated cards with insights and direct links.',
    'projects.class.type': 'XR · Meta Quest',
    'projects.class.title': 'CLASS',
    'projects.class.text': 'VR experience based on REBT to support metacognitive skills. Built with Unity and Oculus SDK.',
    'projects.class.tag1': 'Unity',
    'projects.class.tag2': 'Oculus SDK',
    'projects.class.tag3': 'XR Research',
    'projects.class.cta': 'Explore the experience',
    'projects.wakeapp.type': 'AI · Mobile · Flutter',
    'projects.wakeapp.title': 'WakeApp',
    'projects.wakeapp.text': 'Support for people with major depression through AI and emotion recognition. Winner of the “Giuria Coach” award.',
    'projects.wakeapp.tag1': 'Flutter',
    'projects.wakeapp.tag2': 'Python',
    'projects.wakeapp.tag3': 'AI',
    'projects.wakeapp.cta': 'Open the repository',
    'projects.campus.type': 'Mobile · iOS & Android',
    'projects.campus.title': 'CampUs Unisa',
    'projects.campus.text': 'Cross-platform app for university students with over 30,000 downloads.',
    'projects.campus.tag1': 'Swift',
    'projects.campus.tag2': 'Kotlin',
    'projects.campus.tag3': 'Firebase',
    'projects.campus.android': 'Android',
    'projects.campus.ios': 'iOS',
    'music.kicker': 'Music',
    'music.title': 'Groove meets technology',
    'music.subtitle': 'The electric bass as a tool to explore rhythm, listening and improvisation. Energy I also bring to teams.',
    'music.role': 'Bass player · Live & Studio',
    'music.text': 'Live performances with jazz-funk bands and studio sessions for independent projects. Collaborations with emerging artists, arrangement care and sound design.',
    'music.tag1': 'Improvisation',
    'music.tag2': 'Teamwork',
    'music.tag3': 'Stage presence',
    'contact.kicker': 'Contact',
    'contact.title': 'Let’s build the next project',
    'contact.subtitle': 'Reach out for collaborations, consulting or talks.',
    'contact.email': 'matteo.ercolino01@gmail.com',
    'contact.github': 'github.com/matthew-2000',
    'contact.linkedin': 'linkedin.com/in/matteo-ercolino',
    'contact.phone': '+39 351 770 6576',
    'contact.meeting': 'Meeting calendar on request',
    'contact.bookCall': 'Book a call',
    'contact.form.nameLabel': 'Name',
    'contact.form.namePlaceholder': 'Your name',
    'contact.form.emailLabel': 'Email',
    'contact.form.emailPlaceholder': 'name@email.com',
    'contact.form.messageLabel': 'Message',
    'contact.form.messagePlaceholder': 'Tell me about your idea',
    'contact.form.submit': 'Send message',
    'contact.form.feedback': '',
    'contact.form.error': 'Please fill in every field before sending your message.',
    'contact.form.success': 'Thank you! Your email client will open to finish sending.',
    'contact.form.mailSubject': 'New contact from the portfolio',
    'contact.form.mailBody': 'Hi Matteo,\n\nI am {name} ({email}).\n\n{message}',
    'footer.copy': '&copy; <span id="year"></span> Matteo Ercolino. Crafted with passion, design and code.',
    'footer.backToTop': 'Back to top',
    'footer.projects': 'Projects',
    'footer.contact': 'Contact',
    'modal.title': 'Résumé',
    'modal.closeAria': 'Close modal',
    'modal.profileTitle': 'Profile',
    'modal.profileText': 'Software Engineer focused on immersive experiences and full-stack digital products. Strong cross-disciplinary collaboration, mentorship and academic research.',
    'modal.experienceTitle': 'Experience',
    'modal.experienceItem1': '<strong>2025—</strong> Web Developer, PRIN MediArSI project – UNISA',
    'modal.experienceItem2': '<strong>2023—</strong> Academic collaborator, HCI-USE Lab',
    'modal.experienceItem3': '<strong>2024—2025</strong> Python Lecturer, UNINT Rome',
    'modal.experienceItem4': '<strong>2023—2024</strong> VR Developer, Fondazione Formit / UNINT',
    'modal.skillsTitle': 'Skills',
    'modal.skill1': 'Mobile &amp; Web',
    'modal.skill2': 'Extended Reality',
    'modal.skill3': 'Unity',
    'modal.skill4': 'Swift',
    'modal.skill5': 'Python',
    'modal.skill6': 'Design System',
    'modal.skill7': 'Team leadership',
    'modal.download': 'Download PDF',
    'modal.close': 'Close',
  },
};

const getStoredLanguage = () => {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem('language-preference');
};

const getDefaultLanguage = () => {
  const stored = getStoredLanguage();
  if (stored && SUPPORTED_LANGUAGES.includes(stored)) {
    return stored;
  }
  if (typeof navigator !== 'undefined') {
    const browserLang = navigator.language?.slice(0, 2).toLowerCase();
    if (SUPPORTED_LANGUAGES.includes(browserLang)) {
      return browserLang;
    }
  }
  return 'it';
};

let currentLanguage = getDefaultLanguage();
let languageToggleButtons = [];
let currentTheme = 'dark';
const themeToggleElements = { label: null, icon: null };

const getTranslation = (key, lang = currentLanguage) => {
  const dictionary = translations[lang] ?? translations.it;
  return dictionary?.[key] ?? translations.it?.[key] ?? '';
};

function updateLanguageToggleState() {
  languageToggleButtons.forEach((button) => {
    const isActive = button.dataset.lang === currentLanguage;
    button.classList.toggle('active', isActive);
    button.setAttribute('aria-pressed', isActive ? 'true' : 'false');
  });
}

function updateThemeToggleLabel() {
  if (!themeToggleElements.label) return;
  const labelKey = currentTheme === 'light' ? 'nav.themeLight' : 'nav.themeDark';
  themeToggleElements.label.textContent = getTranslation(labelKey);
}

const applyTranslations = (lang) => {
  currentLanguage = SUPPORTED_LANGUAGES.includes(lang) ? lang : 'it';
  if (typeof window !== 'undefined') {
    localStorage.setItem('language-preference', currentLanguage);
  }
  document.documentElement.setAttribute('lang', currentLanguage);

  document.title = getTranslation('meta.title');
  const metaDescription = document.querySelector('meta[name="description"]');
  const metaKeywords = document.querySelector('meta[name="keywords"]');
  const titleTag = document.querySelector('title[data-i18n="meta.title"]');
  if (metaDescription) {
    metaDescription.setAttribute('content', getTranslation('meta.description'));
  }
  if (metaKeywords) {
    metaKeywords.setAttribute('content', getTranslation('meta.keywords'));
  }
  if (titleTag) {
    titleTag.textContent = getTranslation('meta.title');
  }

  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const key = element.dataset.i18n;
    const translation = getTranslation(key);
    if (translation === undefined) return;
    const attr = element.dataset.i18nAttr;
    if (attr) {
      element.setAttribute(attr, translation);
    } else {
      element.innerHTML = translation;
    }
  });

  const feedback = document.querySelector('.form-feedback');
  if (feedback?.dataset.messageKey) {
    feedback.textContent = getTranslation(feedback.dataset.messageKey);
  }

  const mobileNav = document.getElementById('mobileNav');
  const menuToggle = document.querySelector('.menu-toggle');
  if (menuToggle) {
    const isOpen = mobileNav?.classList.contains('open');
    menuToggle.setAttribute('aria-label', getTranslation(isOpen ? 'nav.menuClose' : 'nav.menuOpen'));
    menuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  }

  updateLanguageToggleState();
  updateThemeToggleLabel();
  initYear();
};

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
  themeToggleElements.icon = toggle?.querySelector('i');
  themeToggleElements.label = toggle?.querySelector('span');
  const stored = localStorage.getItem('theme-preference');

  const applyTheme = (theme) => {
    document.body.classList.toggle('theme-light', theme === 'light');
    document.body.classList.toggle('theme-dark', theme !== 'light');
    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.style.setProperty('color-scheme', theme === 'light' ? 'light' : 'dark');
    if (themeToggleElements.icon) {
      themeToggleElements.icon.setAttribute('data-lucide', theme === 'light' ? 'sun' : 'moon-star');
      lucide.createIcons();
    }
  };

  currentTheme = stored || (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
  applyTheme(currentTheme);
  updateThemeToggleLabel();

  toggle?.addEventListener('click', () => {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme-preference', currentTheme);
    applyTheme(currentTheme);
    updateThemeToggleLabel();
  });
};

const initLanguageToggle = () => {
  languageToggleButtons = Array.from(document.querySelectorAll('.lang-button'));
  updateLanguageToggleState();
  languageToggleButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const { lang } = button.dataset;
      if (lang && lang !== currentLanguage) {
        applyTranslations(lang);
      }
    });
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
    toggle?.setAttribute('aria-label', getTranslation(isOpen ? 'nav.menuClose' : 'nav.menuOpen'));
    toggle?.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    lucide.createIcons();
  });

  navLinks?.forEach((link) =>
    link.addEventListener('click', () => {
      mobileNav?.classList.remove('open');
      toggle?.querySelector('i')?.setAttribute('data-lucide', 'menu');
      toggle?.setAttribute('aria-label', getTranslation('nav.menuOpen'));
      toggle?.setAttribute('aria-expanded', 'false');
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
      feedback.textContent = getTranslation('contact.form.error');
      feedback.dataset.messageKey = 'contact.form.error';
      return;
    }

    const subject = getTranslation('contact.form.mailSubject');
    const bodyTemplate = getTranslation('contact.form.mailBody');
    const body = bodyTemplate
      .replace('{name}', name)
      .replace('{email}', email)
      .replace('{message}', message);
    const mailto = `mailto:matteo.ercolino01@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    feedback.textContent = getTranslation('contact.form.success');
    feedback.dataset.messageKey = 'contact.form.success';
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
  initThemeToggle();
  applyTranslations(currentLanguage);
  initLenis();
  initLanguageToggle();
  initMobileNav();
  initGSAP();
  initContactForm();
  initCVModal();
  initCanvas();
});
