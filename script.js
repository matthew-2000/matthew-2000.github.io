const SUPPORTED_LANGUAGES = ['it', 'en'];

const translations = {
  it: {
    'meta.title': 'Matteo Ercolino — Software Engineer',
    'meta.description': 'Matteo Ercolino — Software Engineer specializzato in Mobile, Web ed Extended Reality. Scopri portfolio, progetti, pubblicazioni e contatti.',
    'meta.keywords': 'Matteo Ercolino, Software Engineer, Mobile, Web, XR, Extended Reality, Portfolio',
    'nav.about': 'Chi sono',
    'nav.skills': 'Competenze',
    'nav.experience': 'Esperienze',
    'nav.education': 'Formazione',
    'nav.publications': 'Pubblicazioni',
    'nav.languages': 'Lingue',
    'nav.extracurricular': 'Attività',
    'nav.projects': 'Progetti',
    'nav.contact': 'Contatti',
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
    'experience.item1.date': '08/2025 — In corso',
    'experience.item1.org': 'DISPAC · Università degli Studi di Salerno',
    'experience.item1.title': 'Sviluppatore Web — MediArSI',
    'experience.item1.text': "Sviluppo di web application responsive per la geolocalizzazione e consultazione delle committenze artistiche nel Sud Italia (XI-XIII secolo), nell'ambito del progetto PRIN 2022 MediArSI.",
    'experience.item1.tag1': 'Web application',
    'experience.item1.tag2': 'Geolocalizzazione',
    'experience.item1.tag3': 'Responsive UX',
    'experience.item2.date': '2023 — In corso',
    'experience.item2.org': 'HCI-USE Lab',
    'experience.item2.title': 'Collaborazione accademica, pubblicazioni e ricerca',
    'experience.item2.text': 'Collaborazione continuativa con il laboratorio HCI-USE su Extended Reality e agenti conversazionali, con sviluppo di prototipi, sperimentazioni e produzione scientifica.',
    'experience.item2.tag1': 'Unity',
    'experience.item2.tag2': 'UX Research',
    'experience.item2.tag3': 'XR',
    'experience.item3.date': '11/2024 — 12/2025',
    'experience.item3.org': 'Scuola di Alta Formazione UNINT · Università UNINT',
    'experience.item3.title': 'Docente Python',
    'experience.item3.text': 'Docente dei corsi “Introduzione alla programmazione con Python” e “Python Programming for Cybersecurity (Ethical Hacking)”, con progettazione materiali didattici, esercitazioni e supporto agli studenti.',
    'experience.item3.tag1': 'Didattica',
    'experience.item3.tag2': 'Python',
    'experience.item3.tag3': 'Interactive Labs',
    'experience.item4.date': '12/2023 — 10/2024',
    'experience.item4.org': 'Fondazione Formit · UNINT',
    'experience.item4.title': 'Sviluppatore VR — CLASS',
    'experience.item4.text': "Sviluppo dell'app VR CLASS, basata su Rational Emotive Behavior Therapy (REBT), per il potenziamento di abilità metacognitive tramite scenari immersivi e interazione guidata.",
    'experience.item4.tag1': 'Unity',
    'experience.item4.tag2': 'Oculus SDK',
    'experience.item4.tag3': 'XR Research',
    'education.kicker': 'Formazione',
    'education.title': 'Percorso accademico e ricerca',
    'education.item0.date': '2025 — In corso',
    'education.item0.title': 'Dottorato di Ricerca in Informatica · Università di Salerno',
    'education.item0.thesis': 'Progetto di ricerca: “AI-powered Digital Twins for Sustainable Urban Transformation”.',
    'education.item1.date': '2022 — 2025 · Laurea Magistrale in Informatica',
    'education.item1.title': 'Università di Salerno · Curriculum Software Engineering & IT Management',
    'education.item1.thesis': 'Votazione 110/110 e lode. Tesi: “Agenti virtuali adattivi: studio e design di agenti conversazionali in Extended Reality”.',
    'education.item2.date': '2018 — 2022 · Laurea Triennale in Informatica',
    'education.item2.title': 'Università di Salerno',
    'education.item2.thesis': 'Votazione 95/110. Tesi: “Progettazione e sviluppo di un’applicazione in realtà aumentata per il coinvolgimento di utenti in ambienti culturali”.',
    'publications.kicker': 'Pubblicazioni',
    'publications.title': 'Disseminare conoscenza',
    'publications.subtitle': 'Ricerca applicata alla user experience e alla realtà estesa.',
    'publications.badge': "ACM CHIGREECE '23",
    'publications.year': '2023',
    'publications.titlePaper': 'Designing Virtual Interactive Objects to Enhance Visitors’ Experience in Cultural Exhibits',
    'publications.description': 'Studio e progettazione di oggetti interattivi virtuali per mostre culturali, con focus su engagement e narrazione.',
    'publications.cta': 'Leggi la pubblicazione',
    'languages.kicker': 'Lingue',
    'languages.title': 'Competenze linguistiche',
    'languages.item1.level': 'English — B2',
    'languages.item1.details': 'Reading: ottimo · Writing: ottimo · Speaking: buono.',
    'languages.item2.level': 'Italiano — Madrelingua',
    'languages.item2.details': 'Competenza professionale completa.',
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
    'projects.campus.text': 'App multipiattaforma per studenti universitari con oltre 30.000 download complessivi e oltre 1.000 utenti attivi quotidianamente.',
    'projects.campus.tag1': 'Swift',
    'projects.campus.tag2': 'Kotlin',
    'projects.campus.tag3': 'Firebase',
    'projects.campus.android': 'Android',
    'projects.campus.ios': 'iOS',
    'extracurricular.kicker': 'Attività extracurriculari',
    'extracurricular.title': 'Esperienze oltre il lavoro',
    'extracurricular.item1.date': '2018 — 2020',
    'extracurricular.item1.title': 'Servizio Civile Nazionale · Comune di Monteforte Irpino (AV)',
    'extracurricular.item1.text': "Collaboratore nel progetto “Noi giovani risorse per Monteforte” a supporto dell'organizzazione di eventi culturali e sociali.",
    'extracurricular.item2.date': 'Musica',
    'extracurricular.item2.title': 'Bassista in band pop/rock',
    'extracurricular.item2.text': 'Suono il basso elettrico in una band pop/rock con esibizioni live in provincia di Avellino; ho inciso un album di cover rock a Napoli con una band locale.',
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
    'modal.profileText': 'Software Engineer specializzato in Mobile, Web e Extended Reality, con esperienza in ricerca accademica, didattica e sviluppo prodotto.',
    'modal.summaryTitle': 'Versione completa',
    'modal.summaryText': 'Per dettagli completi su esperienza, formazione, pubblicazioni e progetti, scarica il CV PDF aggiornato.',
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
    'nav.education': 'Education',
    'nav.publications': 'Publications',
    'nav.languages': 'Languages',
    'nav.extracurricular': 'Activities',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
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
    'experience.item1.date': '08/2025 — Ongoing',
    'experience.item1.org': 'DISPAC · University of Salerno',
    'experience.item1.title': 'Web Developer — MediArSI',
    'experience.item1.text': 'Development of a responsive web application for geolocating and exploring art commissions in Southern Italy (11th-13th century), within the PRIN 2022 MediArSI project.',
    'experience.item1.tag1': 'Web application',
    'experience.item1.tag2': 'Geolocation',
    'experience.item1.tag3': 'Responsive UX',
    'experience.item2.date': '2023 — Ongoing',
    'experience.item2.org': 'HCI-USE Lab',
    'experience.item2.title': 'Academic collaboration, publications and research',
    'experience.item2.text': 'Ongoing collaboration with the HCI-USE lab on Extended Reality and conversational agents, including prototyping, experimentation and scientific output.',
    'experience.item2.tag1': 'Unity',
    'experience.item2.tag2': 'UX Research',
    'experience.item2.tag3': 'XR',
    'experience.item3.date': '11/2024 — 12/2025',
    'experience.item3.org': 'UNINT Higher Education School · UNINT University',
    'experience.item3.title': 'Python Lecturer',
    'experience.item3.text': 'Lecturer for “Introduzione alla programmazione con Python” and “Python Programming for Cybersecurity (Ethical Hacking)”, including course design, exercises and student support.',
    'experience.item3.tag1': 'Teaching',
    'experience.item3.tag2': 'Python',
    'experience.item3.tag3': 'Interactive Labs',
    'experience.item4.date': '12/2023 — 10/2024',
    'experience.item4.org': 'Fondazione Formit · UNINT',
    'experience.item4.title': 'VR Developer — CLASS',
    'experience.item4.text': 'Development of the CLASS VR app, based on Rational Emotive Behavior Therapy (REBT), to enhance metacognitive skills through immersive scenarios and guided interaction.',
    'experience.item4.tag1': 'Unity',
    'experience.item4.tag2': 'Oculus SDK',
    'experience.item4.tag3': 'XR Research',
    'education.kicker': 'Education',
    'education.title': 'Academic path and research',
    'education.item0.date': '2025 — Ongoing',
    'education.item0.title': 'PhD in Computer Science · University of Salerno',
    'education.item0.thesis': 'Research project: “AI-powered Digital Twins for Sustainable Urban Transformation”.',
    'education.item1.date': '2022 — 2025 · Master’s Degree in Computer Science',
    'education.item1.title': 'University of Salerno · Software Engineering & IT Management curriculum',
    'education.item1.thesis': 'Final grade: 110/110 cum laude. Thesis: “Adaptive virtual agents: study and design of conversational agents in Extended Reality.”',
    'education.item2.date': '2018 — 2022 · Bachelor’s Degree in Computer Science',
    'education.item2.title': 'University of Salerno',
    'education.item2.thesis': 'Final grade: 95/110. Thesis: “Design and development of an augmented reality app for engaging users in cultural environments.”',
    'publications.kicker': 'Publications',
    'publications.title': 'Sharing knowledge',
    'publications.subtitle': 'Applied research on user experience and extended reality.',
    'publications.badge': "ACM CHIGREECE '23",
    'publications.year': '2023',
    'publications.titlePaper': 'Designing Virtual Interactive Objects to Enhance Visitors’ Experience in Cultural Exhibits',
    'publications.description': 'Study and design of virtual interactive objects for cultural exhibitions, focused on engagement and storytelling.',
    'publications.cta': 'Read the publication',
    'languages.kicker': 'Languages',
    'languages.title': 'Language skills',
    'languages.item1.level': 'English — B2',
    'languages.item1.details': 'Reading: excellent · Writing: excellent · Speaking: good.',
    'languages.item2.level': 'Italian — Native',
    'languages.item2.details': 'Full professional proficiency.',
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
    'projects.campus.text': 'Cross-platform app for university students with over 30,000 downloads and over 1,000 daily active users.',
    'projects.campus.tag1': 'Swift',
    'projects.campus.tag2': 'Kotlin',
    'projects.campus.tag3': 'Firebase',
    'projects.campus.android': 'Android',
    'projects.campus.ios': 'iOS',
    'extracurricular.kicker': 'Extracurricular activities',
    'extracurricular.title': 'Experiences beyond work',
    'extracurricular.item1.date': '2018 — 2020',
    'extracurricular.item1.title': 'National Civil Service · Monteforte Irpino Municipality',
    'extracurricular.item1.text': 'Collaborator in the “Noi giovani risorse per Monteforte” project, supporting the organisation of cultural and social events.',
    'extracurricular.item2.date': 'Music',
    'extracurricular.item2.title': 'Bass player in a pop/rock band',
    'extracurricular.item2.text': 'I play electric bass in a pop/rock band with live performances in the Avellino area; I also recorded a rock cover album in Naples with a local band.',
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
    'modal.profileText': 'Software Engineer focused on Mobile, Web and Extended Reality, with experience in academic research, teaching and product development.',
    'modal.summaryTitle': 'Full version',
    'modal.summaryText': 'For complete details on experience, education, publications and projects, download the updated PDF résumé.',
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
