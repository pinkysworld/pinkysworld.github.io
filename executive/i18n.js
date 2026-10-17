/* German layer for the executive portfolio.
 *
 * English lives in the HTML and is the source of truth; this file maps exact
 * English strings to German. A missing key simply leaves the English in place,
 * so a gap degrades to "untranslated", never to "empty".
 *
 * Publication titles, venues and abstracts are intentionally NOT translated:
 * they are citations. Those subtrees carry data-i18n-skip and are never touched.
 *
 * This dictionary is consumed at BUILD time by tools/build-de.mjs, which writes
 * the German pages under /de/. Change a string here, then re-run that script and
 * commit the regenerated /de/ — CI fails if the two drift apart.
 */
(() => {
  'use strict';

  const DE = {
    'Reliable IT services and applied research.': 'IT-Services verantworten. Forschung voranbringen.',
    'For a job opportunity, please include the role, the working arrangement and a short description of the work. LinkedIn works well for a first introduction.': 'Bei Stellenangeboten helfen Angaben zu Position, Aufgaben, Arbeitsmodell und Ansprechpartner. Für einen ersten Kontakt eignet sich auch LinkedIn.',
    'Interested in discussing a role, a technical project or a research collaboration? Send a message with the form below or connect on LinkedIn. I usually reply within 72 hours.': 'Sie möchten über eine Stelle, ein IT-Projekt oder eine Forschungsfrage sprechen? Schreiben Sie mir über das Formular oder auf LinkedIn. Ich antworte normalerweise innerhalb von 72 Stunden.',
    'Publications and projects': 'Veröffentlichungen und Projekte',
    'My journal articles and preprints, with publication status and a link to the public record for each. The list matches my ORCID profile.': 'Meine Zeitschriftenartikel und Preprints, jeweils mit Veröffentlichungsstatus und Link zum öffentlichen Nachweis. Die Liste entspricht meinem ORCID-Profil.',
    'Peer review and research': 'Gutachtertätigkeit und Forschung',
    'How I use this training in projects.': 'So setze ich diese Kenntnisse in Projekten ein.',
    'Thirteen certifications in service management, project and agile methods, and security, plus one cloud course completion.': 'Dreizehn Zertifizierungen in Service-Management, Projekt- und agilen Methoden sowie IT-Sicherheit, dazu ein Kursabschluss im Cloud-Bereich.',
    'I completed a B.Sc. in Computer Science at the University of the People summa cum laude, with a GPA of 3.91 and seven President’s List awards. Before that I earned a First Class B.A. in Business Administration. I hold 13 professional certifications and am preparing a cybersecurity research proposal for an MPhil.': 'Meinen B.Sc. in Informatik an der University of the People habe ich summa cum laude abgeschlossen, mit einem GPA von 3,91 und sieben Einträgen auf der President’s List. Davor habe ich einen B.A. in Betriebswirtschaft mit First Class erworben. Ich habe 13 berufliche Zertifizierungen und bereite ein MPhil-Forschungsvorhaben in Cybersicherheit vor.',
    'Education, certifications and research.': 'Ausbildung, Weiterbildung und wissenschaftliche Arbeit.',
    'Architecture and implementation notes': 'Architektur und Implementierung',
    'For technical readers': 'Für technisch Interessierte',
    '20 public projects, plus two games in development.': '20 öffentliche Projekte, dazu zwei Spiele in Entwicklung.',
    'Independent research preparation — MPhil in cybersecurity': 'Unabhängige Forschungsvorbereitung — MPhil in Cybersicherheit',
    'Third-line application support, troubleshooting, release coordination and work with the development team.': '3rd-Level-Anwendungssupport, Fehleranalyse, Release-Koordination und Zusammenarbeit mit der Entwicklung.',
    'I work in healthcare software operations and continue my research alongside the job.': 'Ich arbeite im Betrieb und Support von Gesundheitssoftware. Meine Forschung führe ich daneben weiter.',
    'Service delivery and account management, presales solution design, team leadership across Germany, Austria and Switzerland, project management and hands-on third-line infrastructure work. My work has covered banking, telecommunications, manufacturing, insurance and healthcare software.': 'Service Delivery und Account Management, Lösungsdesign im Presales, Teamführung in Deutschland, Österreich und der Schweiz, Projektmanagement und praktische Infrastrukturarbeit im 3rd-Level-Support. Meine Kunden kamen unter anderem aus dem Banken- und Versicherungswesen, der Telekommunikation, der Industrie und der Gesundheits-IT.',
    'More than 15 years in IT service delivery and technical projects.': 'Mehr als 15 Jahre Verantwortung für IT-Services und technische Projekte.',
    'Roles I am looking for': 'Aufgaben, die mich interessieren',
    'Each figure comes from the employer’s own reporting for the role named.': 'Jede Zahl stammt aus dem Reporting des Arbeitgebers für die genannte Rolle.',
    'Selected professional results': 'Ausgewählte berufliche Ergebnisse',
    'Bid architecture, cost and governance models, client presentations, and turning requirements into a clear, commercially viable proposal.': 'Angebotsarchitektur, Kosten- und Governance-Modelle, Kundenpräsentationen und aus Anforderungen ein klares, wirtschaftlich tragfähiges Angebot machen.',
    'Rust, C/C++, databases, storage and protocols, third-line support, and release and deployment work with development teams.': 'Rust, C/C++, Datenbanken, Speicher und Protokolle, 3rd-Level-Support sowie Release- und Deployment-Arbeit mit Entwicklungsteams.',
    'Each area is backed by a role on the experience page or a project in the portfolio.': 'Zu jedem Bereich gibt es eine Station im Werdegang oder ein Projekt im Portfolio.',
    'In research I have to say clearly what my data shows and what it does not. I apply the same standard to technical projects.': 'In der Forschung muss ich klar sagen, was meine Daten zeigen und was nicht. Denselben Maßstab lege ich an technische Projekte an.',
    'Whether a solution works shows in day-to-day operation: reliable services, satisfied clients, sound margins and a clean handover. That is where I learned to explain technical decisions so that commercial decision-makers can follow them.': 'Ob eine Lösung trägt, zeigt sich im Alltag: verlässliche Services, zufriedene Kunden, wirtschaftliche Ergebnisse und eine saubere Übergabe. Dabei habe ich gelernt, technische Entscheidungen so zu erklären, dass auch kaufmännische Entscheider sie nachvollziehen können.',
    'How my service and project work connects to the research.': 'Wie meine Arbeit in Service und Projekten mit der Forschung zusammenhängt.',
    'Where operations and research meet': 'Wo Betrieb und Forschung zusammenkommen',
    'For job offers, project work and research questions.': 'Für Stellenangebote, Projektanfragen und Forschungsfragen.',
    '20 public projects across research systems, Apple apps, tools and games, plus two games in development.': '20 öffentliche Projekte aus Forschungssystemen, Apple-Apps, Tools und Spielen, dazu zwei Spiele in Entwicklung.',
    'More than 15 years of service delivery, presales, team leadership and infrastructure work.': 'Mehr als 15 Jahre Service Delivery, Presales, Teamführung und Infrastrukturarbeit.',
    'What I have been responsible for, what came of it, and the work I am looking for now.': 'Wofür ich verantwortlich war, was dabei herauskam und welche Aufgaben mich heute interessieren.',
    'Experience, projects, qualifications and publications, each on its own page.': 'Werdegang, Projekte, Qualifikationen und Veröffentlichungen, jeweils auf einer eigenen Seite.',
    'Degrees and honours, research preparation, peer review, 13 certifications and one course completion.': 'Abschlüsse und Auszeichnungen, Forschungsvorbereitung, Gutachtertätigkeit, 13 Zertifizierungen und ein Kursabschluss.',
    '13 certifications · 1 course completion': '13 Zertifizierungen · 1 Kursabschluss',
    'Portfolio profitability': 'Profitabilität im Portfolio',
    'Contract value won': 'Gewonnenes Auftragsvolumen',
    'Preparing a cybersecurity research proposal for an MPhil, after the completed B.Sc.': 'Vorbereitung eines MPhil-Forschungsvorhabens in Cybersicherheit, nach dem abgeschlossenen B.Sc.',
    'Third-line application support and release coordination at nursIT Institute': '3rd-Level-Anwendungssupport und Release-Koordination bei der nursIT Institute GmbH',
    'At work: application support, troubleshooting and releases. On my own: databases and security tools.': 'Im Beruf: Anwendungssupport, Fehleranalyse und Releases. Daneben: eigene Datenbank- und Sicherheitssoftware.',
    'Open to roles in service delivery, technical project management and systems or security engineering': 'Interessiert an Aufgaben im IT-Service-Management, im technischen Projektmanagement und im Systems- oder Security-Engineering',
    'I have worked in enterprise IT for more than 15 years. I have led service delivery for managed-service clients in Germany, Austria and Switzerland, designed solutions in presales, and taken projects through to stable operation. Alongside my job I build software and publish research on security and database systems.': 'Seit mehr als 15 Jahren arbeite ich in der Unternehmens-IT. Ich habe Managed Services für Kunden in Deutschland, Österreich und der Schweiz verantwortet, im Presales technische Lösungen konzipiert und Projekte bis in den stabilen Betrieb begleitet. Neben dem Beruf entwickle ich eigene Software und veröffentliche Forschung zu IT-Sicherheit und Datenbanksystemen.',
    'and applied research.': 'Forschung voranbringen.',
    'Reliable IT services': 'IT-Services verantworten,',
    'IT service delivery · technical projects · applied research': 'IT-Service-Management · Technische Projekte · Angewandte Forschung',
    '15+ years': '15+ Jahre',
    'Time in IT': 'Berufserfahrung',
    '3.96': '3,96',
    '3.91': '3,91',
    'Portfolio ': 'Portfolio ',
    'Executive view · Switch to Operator for the full technical record': 'Executive-Ansicht · Der technische Teil steht in der Operator-Ansicht',
    '© 2026 Michél Nguyen · Germany': '© 2026 Michél Nguyen · Deutschland',
    'The contact form is the most direct route. Typical response time is within 72 hours.': 'Das Kontaktformular ist der direkteste Weg. Antwort meist innerhalb von 72 Stunden.',
    'Recruiting, research, or technical collaboration': 'Recruiting, Forschung oder technische Zusammenarbeit',
    'Twelve public records with abstracts, venues, and direct DOI links.': 'Zwölf öffentliche Einträge mit Abstracts, Publikationsorten und direkten DOI-Links.',
    'Choose a section': 'Bereich wählen',
    'Summa cum laude · GPA 3.91 · 7× President’s List': 'Summa cum laude · GPA 3,91 · 7× President’s List',
    'Selected credentials & current focus': 'Ausgewählte Nachweise & aktuelle Schwerpunkte',
    'years in IT': 'Jahre in der IT',
    'public projects': 'öffentliche Projekte',
    'research papers': 'Forschungsarbeiten',
    'SkeinDB database engine and Wardex XDR platform': 'Datenbank-Engine SkeinDB und XDR-Plattform Wardex',
    'Current work · 2026': 'Aktuell · 2026',
    'Enterprise IT delivery': 'Enterprise-IT-Delivery',
    /* ---- section numbering ---- */
    '01 · Positioning': '01 · Positionierung',
    '02 · Core areas': '02 · Kernbereiche',
    '03 · Selected outcomes': '03 · Ausgewählte Ergebnisse',
    '04 · Role direction': '04 · Rollenausrichtung',
    '01 · Current': '01 · Aktuell',
    '02 · Delivery & leadership': '02 · Delivery & Führung',
    '03 · Engineering foundation': '03 · Technische Basis',
    '01 · Education': '01 · Ausbildung',
    '02 · Honours': '02 · Auszeichnungen',
    '03 · Certifications': '03 · Zertifizierungen',
    '04 · Capabilities': '04 · Kompetenzen',
    '05 · Academic service': '05 · Akademischer Dienst',
    '01 · Portfolio': '01 · Portfolio',
    '02 · Context': '02 · Kontext',
    '01 · Record': '01 · Nachweis',

    /* ---- dates ---- */
    'Jan 2026 — now': 'Jan. 2026 — heute',
    'Apr 2025 — now': 'Apr. 2025 — heute',
    'Nov 2025 — now': 'Nov. 2025 — heute',
    'Nov 2025 — Oct 2026': 'Nov. 2025 — Okt. 2026',
    'Q3 2025 — now': 'Q3 2025 — heute',
    'Oct 2024 — Mar 2025': 'Okt. 2024 — März 2025',
    'May 2024 — Sep 2024': 'Mai 2024 — Sep. 2024',
    '2022 — May 2024': '2022 — Mai 2024',
    'Nov 2024 — Nov 2025': 'Nov. 2024 — Nov. 2025',
    'Nov 2024 – Aug 2026': 'Nov. 2024 – Aug. 2026',

    /* ---- short chips & numeric labels ---- */
    'GPA / 4.0': 'GPA / 4,0',
    '3rd level': '3rd Level',
    'Bid': 'Angebot',
    '6th Student Symposium': '6. Student Symposium',
    'Risk models': 'Risikomodelle',
    'PDF / CSV export': 'PDF-/CSV-Export',
    'Signed receipts': 'Signierte Quittungen',
    'Append-only audit': 'Append-only-Audit',
    'Single binary': 'Single Binary',
    'Content-addressed': 'Content-Addressed',
    'Differential privacy': 'Differential Privacy',
    'Policy engine': 'Policy Engine',
    'On-device AI': 'On-Device-KI',
    'Merkle frontier': 'Merkle-Frontier',
    'SkeinDB deep dive ↗': 'SkeinDB Deep Dive ↗',
    'Wardex deep dive ↗': 'Wardex Deep Dive ↗',
    'NexusFS deep dive ↗': 'NexusFS Deep Dive ↗',
    'Full operator view ↗': 'Vollständige Operator-Ansicht ↗',
    'Language / Sprache': 'Sprache / Language',

    /* ---- navigation & chrome ---- */
    'Skip to content': 'Zum Inhalt springen',
    'Menu': 'Menü',
    'Home': 'Start',
    'Profile': 'Profil',
    'Experience': 'Werdegang',
    'Projects': 'Projekte',
    'Academic': 'Studium',
    'Publications': 'Publikationen',
    'Contact': 'Kontakt',
    'Get in touch': 'Kontakt aufnehmen',
    'Public record': 'Öffentliche Profile',
    'Service delivery & project management': 'Service Delivery & Projektmanagement',
    'Applied computer-science research': 'Angewandte Informatikforschung',
    'Thuringia, Germany': 'Thüringen, Deutschland',
    'Michél Nguyen · Thuringia, Germany': 'Michél Nguyen · Thüringen, Deutschland',
    'Portrait of Michél Nguyen': 'Porträt von Michél Nguyen',
    'Remote · CET/CEST · DE / EN': 'Remote · MEZ/MESZ · DE / EN',
    'Remote · CET/CEST': 'Remote · MEZ/MESZ',
    'Operator view →': 'Operator-Ansicht →',
    'Executive portfolio navigation': 'Navigation Executive-Portfolio',
    'Executive portfolio pages': 'Seiten des Executive-Portfolios',

    /* ---- shared labels ---- */
    'Location': 'Standort',
    'Working model': 'Arbeitsmodell',
    'Languages': 'Sprachen',
    'German (native) · English (C2)': 'Deutsch (Muttersprache) · Englisch (C2)',
    'Experience ': 'Erfahrung ',
    'Response': 'Antwortzeit',
    'Usually within 72 hours': 'Meist innerhalb von 72 Stunden',
    'Career record': 'Werdegang',
    'Career record ↗': 'Werdegang ↗',
    'Full career record': 'Vollständiger Werdegang',
    'Academic & certifications': 'Studium & Zertifizierungen',
    'Academic & certifications ↗': 'Studium & Zertifizierungen ↗',
    'Projects ↗': 'Projekte ↗',
    'Contact ↗': 'Kontakt ↗',
    'Publications ↗': 'Publikationen ↗',
    'Publication record': 'Publikationsverzeichnis',
    'Publication record ↗': 'Publikationsverzeichnis ↗',
    'Full record ↗': 'Vollständiger Werdegang ↗',
    'Career': 'Werdegang',
    'Research': 'Forschung',
    'Germany': 'Deutschland',
    'Sectors': 'Branchen',
    'Continue through the record': 'Weiterlesen',
    'Continue through the Executive portfolio': 'Weiter im Executive-Portfolio',

    /* ---- metrics ---- */
    'Enterprise solutions as Lead Deal Architect': 'Enterprise-Lösungen als Lead Deal Architect',
    'Enterprise solution bids': 'Enterprise-Angebotsprojekte',
    'Profit increase': 'Profitsteigerung',
    'On a managed-service account portfolio': 'Auf einem Managed-Service-Kundenportfolio',
    'Service portfolio': 'Serviceportfolio',
    'Added billing': 'Zusätzliche Abrechnung',
    'Monthly, same portfolio': 'Monatlich, gleiches Portfolio',
    'Monthly revenue': 'Monatsumsatz',
    'Managed account base': 'Betreuter Kundenstamm',
    'Specialists led': 'Geführte Spezialisten',
    'Field service across DE, AT, CH': 'Field Service in DE, AT, CH',
    'Germany, Austria, Switzerland': 'Deutschland, Österreich, Schweiz',
    'Publications ': 'Publikationen ',
    '4 journal articles · 8 preprints': '4 Fachartikel · 8 Preprints',
    'B.Sc. Computer Science, summa cum laude': 'B.Sc. Informatik, summa cum laude',
    'University of the People': 'University of the People',
    'Certifications': 'Zertifizierungen',
    'Delivery, agile, security': 'Delivery, Agile, Security',
    'Figures are drawn from delivery roles at Getronics and NSC Global and from the public academic record.':
      'Die Kennzahlen stammen aus meinen Delivery-Rollen bei Getronics und NSC Global sowie aus dem öffentlichen akademischen Teil.',
    'Record at a glance': 'Auf einen Blick',
    'Career outcomes at a glance': 'Ergebnisse auf einen Blick',
    'Academic standing at a glance': 'Akademischer Stand auf einen Blick',

    /* ---- profile page ---- */
    'Professional profile': 'Berufsprofil',
    'Enterprise IT delivery and applied research.': 'Enterprise-IT-Delivery und angewandte Forschung.',
    'Two kinds of work': 'Zwei Standbeine',
    'Delivery and account ownership': 'Delivery- und Kundenverantwortung',
    'I have run enterprise services end to end. That meant SLAs and escalations for a global investment bank, two international telecoms carriers and a large IT services provider. On the presales side I built solution designs and bids for a global car maker, a multinational chemicals group, a German insurer and a European bank, plus infrastructure projects for a European retail group and a global insurance broker.': 'Enterprise-Services habe ich durchgängig verantwortet: SLAs und Eskalationen für eine global tätige Investmentbank, zwei internationale Telekommunikationsanbieter und einen großen IT-Dienstleister. Im Presales kamen Solution Designs und Angebote für einen globalen Automobilhersteller, einen multinationalen Chemiekonzern, einen deutschen Versicherer und eine europäische Bank dazu, außerdem Infrastrukturprojekte für eine europäische Handelsgruppe und einen global tätigen Versicherungsmakler.',
    'Research and engineering': 'Forschung und Engineering',
    'I also publish peer-reviewed work on cyber risk, systems security and database systems, and I build the systems behind it: a database engine, an XDR platform, an evidence engine for edge telemetry, and a set of shipped iOS and macOS apps.': 'Daneben veröffentliche ich peer-reviewte Arbeiten zu Cyber-Risiko, Systemsicherheit und Datenbanksystemen und entwickle die zugehörigen Systeme: eine Datenbank-Engine, eine XDR-Plattform, eine Evidence-Engine für Edge-Telemetrie sowie mehrere veröffentlichte iOS- und macOS-Apps.',
    'Understand the problem first': 'Erst das Problem klären',
    'Work out which parts are requirements and which are assumptions, before quoting a solution or a price.': 'Bevor ich eine Lösung oder einen Preis zusage, trenne ich sauber zwischen dem, was gefordert ist, und dem, was wir bislang nur annehmen.',
    'Design for how it will be run': 'Für den Betrieb bauen',
    'The people on the support rota have to be able to operate it, so their constraints belong in the design.': 'Eine Lösung muss von den Kollegen betrieben werden können, die später in der Rufbereitschaft sitzen. Deren Rahmenbedingungen fließen deshalb von Anfang an in den Entwurf ein.',
    'Write decisions down': 'Entscheidungen dokumentieren',
    'The next engineer, the customer and the auditor all end up reading it. Sprint notes are not enough.': 'Was heute entschieden wird, lesen später Nachfolger, Kunden und im Zweifel auch Prüfer. Dafür reichen Notizen im Sprint nicht aus.',
    'Finish the handover': 'Bis zur Übergabe liefern',
    'A green local build is not a delivery. I check the release that customers actually get.': 'Fertig ist ein Projekt nicht mit dem grünen Build, sondern wenn das Release beim Kunden läuft und die Übergabe steht.',
    'Say what is not proven': 'Offenlegen, was offen ist',
    'A prototype, a tested result and a proposal are three different things, and I say which one it is.': 'Zwischen Prototyp, belastbarem Ergebnis und bloßem Vorschlag liegen Welten. Ich schreibe jeweils dazu, worum es sich handelt.',
    'What I work on': 'Woran ich arbeite',
    'Delivery': 'Delivery',
    'Service delivery & ITSM': 'Service Delivery & ITSM',
    'ITIL-based service ownership, SLAs and KPIs, service reviews, escalation management, and transition into steady-state operations.':
      'ITIL-basierte Serviceverantwortung, SLAs und KPIs, Service Reviews, Eskalationsmanagement und Überführung in den Regelbetrieb.',
    'Project & programme work': 'Projekt- & Programmarbeit',
    'PRINCE2 and agile delivery, budget and risk control, stakeholder communication, and coordination across vendors and internal teams.':
      'PRINCE2 und agile Delivery, Budget- und Risikosteuerung, Stakeholder-Kommunikation sowie Koordination über Dienstleister und interne Teams hinweg.',
    'Systems': 'Systeme',
    'Infrastructure & platforms': 'Infrastruktur & Plattformen',
    'Security': 'Security',
    'Security & assurance': 'Security & Assurance',
    'Threat detection, network defence, IAM, digital forensics basics, risk analysis, and reproducible technical evidence.':
      'Threat Detection, Network Defence, IAM, Grundlagen der digitalen Forensik, Risikoanalyse und nachvollziehbare technische Nachweise.',
    'Commercial': 'Kommerziell',
    'Presales & solution design': 'Presales & Solution Design',
    'Research engineering': 'Research Engineering',
    'Literature synthesis, experimental design, academic writing, peer review, and explicit limits on what a prototype proves.':
      'Literaturarbeit, Versuchsdesign, wissenschaftliches Schreiben, Peer Review und die klare Grenze dessen, was ein Prototyp belegt.',
    'Numbers from the job': 'Belegte Zahlen',
    'Won enterprise solution deals': 'Gewonnene Enterprise-Abschlüsse',
    'Lead Deal Architect and presales project manager at Getronics Germany. I wrote the architecture, cost, risk and governance concepts for DAX-listed and international corporate accounts.': 'Lead Deal Architect und Presales-Projektmanager bei Getronics Germany. Ich habe die Architektur-, Kosten-, Risiko- und Governance-Konzepte für DAX-notierte und internationale Konzernkunden erstellt.',
    'Profit on a service portfolio': 'Profit auf einem Serviceportfolio',
    'Account & Service Delivery Manager at NSC Global, alongside +€600K additional monthly billing volume and a £3M monthly revenue account base.':
      'Als Account & Service Delivery Manager bei NSC Global, zusammen mit 600 Tsd. € zusätzlichem monatlichem Abrechnungsvolumen und einem Kundenstamm von 3 Mio. £ Monatsumsatz.',
    'Specialists in a D-A-CH team': 'Spezialisten in einem D-A-CH-Team',
    'Manager GIS D-A-CH. Resource planning, escalations, process improvement, and a training framework for stable service transitions.': 'Manager GIS D-A-CH. Ressourcenplanung, Eskalationen, Prozessverbesserung und ein Schulungsrahmen für stabile Service-Übergänge.',
    'Servers and clients, four countries': 'Server und Clients, vier Länder',
    'Sole administrator of the complete IT infrastructure at ALTEC Solartechnik, including 3rd-level support and rollout planning.':
      'Alleinverantwortlicher Administrator der gesamten IT-Infrastruktur bei ALTEC Solartechnik, inklusive 3rd-Level-Support und Rollout-Planung.',
    'Roles that fit': 'Passende Rollen',
    'Positions that need both commercial ownership and technical depth.': 'Positionen, in denen kaufmännische Verantwortung und technische Tiefe zusammenkommen müssen.',
    'Service delivery management': 'Service Delivery Management',
    'Account & service management': 'Account & Service Management',
    'Technical project management': 'Technisches Projektmanagement',
    'Presales / solution architecture': 'Presales / Solution Architecture',
    'IT operations management': 'IT-Betriebsmanagement',
    'Systems engineering': 'Systems Engineering',
    'Security engineering': 'Security Engineering',
    'Implementation management': 'Implementierungsmanagement',
    '3rd-level support lead': '3rd-Level-Support-Leitung',
    'Working languages and model': 'Arbeitssprachen und Arbeitsmodell',
    'German is my first language and I work in English at C2. The accounts above ran bilingually across Germany, Austria, Switzerland and the UK. I work remote-first from Thuringia and travel for delivery and transition phases.': 'Deutsch ist meine Muttersprache, Englisch auf C2-Niveau. Die genannten Kunden habe ich zweisprachig betreut, über Deutschland, Österreich, die Schweiz und Großbritannien hinweg. Ich arbeite überwiegend remote aus Thüringen und reise für Delivery- und Übergabephasen an.',
    'Positioning': 'Positionierung',

    /* ---- experience page ---- */
    'Fifteen years of services that had to run.': 'Fünfzehn Jahre Services, die laufen mussten.',
    'Largest account base': 'Größter Kundenstamm',
    '£3M monthly revenue': '3 Mio. £ Monatsumsatz',
    'Team leadership': 'Teamführung',
    '16 specialists, D-A-CH': '16 Spezialisten, D-A-CH',
    'Current role': 'Aktuelle Rolle',
    'IT Administrator, nursIT': 'IT-Administrator, nursIT',
    'Current work': 'Aktuelle Tätigkeit',
    'IT Administrator': 'IT-Administrator',
    'Healthcare software, Germany': 'Healthcare-Software, Deutschland',
    'Fault analysis, reproduction, log and data inspection, and coordination with development.':
      'Fehleranalyse, Reproduktion, Log- und Datenprüfung sowie Abstimmung mit der Entwicklung.',
    'FHIR R4, SQL and REST integration logic, plus test, release and customer coordination.':
      'FHIR R4, SQL und REST-Integrationslogik sowie Test-, Release- und Kundenkoordination.',
    'healthcare interop': 'Healthcare-Interoperabilität',
    'application support': 'Application Support',
    'Independent, Sri Lanka': 'Eigenständig, Sri Lanka',
    'Focused academic phase Apr 2025 – Jan 2026; continued alongside employment since.':
      'Akademische Schwerpunktphase Apr 2025 – Jan 2026; seitdem berufsbegleitend fortgeführt.',
    'MPhil preparation in cybersecurity and malware classification, alongside the B.Sc. Computer Science (completed August 2026, GPA 3.91, summa cum laude).':
      'MPhil-Vorbereitung in Cybersecurity und Malware-Klassifikation, neben dem B.Sc. Informatik (abgeschlossen im August 2026, GPA 3,91, summa cum laude).',
    'Two peer-reviewed IJRC articles, further preprints, and peer-review service for the Faculty of Computing.':
      'Zwei peer-reviewte IJRC-Artikel, weitere Preprints und Peer-Review-Tätigkeit für die Faculty of Computing.',
    'public records': 'öffentliche Nachweise',
    'journal articles': 'Fachartikel',
    'Enterprise delivery record': 'Enterprise-Delivery-Nachweis',
    'Presales architecture, project management, team leadership and service ownership for enterprise accounts.':
      'Presales-Architektur, Projektmanagement, Teamführung und Serviceverantwortung für Enterprise-Kunden.',
    'Specialist IT Consulting': 'Specialist IT-Consulting',
    'IT project coordination and internal 3rd-level support for network, infrastructure and database.':
      'IT-Projektkoordination und interner 3rd-Level-Support für Netzwerk, Infrastruktur und Datenbank.',
    'DevOps interface between development and IT operations, including user and system administration.':
      'DevOps-Schnittstelle zwischen Entwicklung und IT-Operations, inklusive User- und Systemadministration.',
    'Tests, rollouts, escalations and process improvements during live operations.':
      'Tests, Rollouts, Eskalationen und Prozessverbesserungen im laufenden Betrieb.',
    'Professional development — delivery, agile & cybersecurity': 'Weiterbildung — Delivery, Agile & Cybersecurity',
    'Certification programme: Scrum Master, Product Owner, PRINCE2 7 Foundation & Practitioner, ITIL 4, DevOps Foundation, EC-Council Security Essentials.':
      'Zertifizierungsprogramm: Scrum Master, Product Owner, PRINCE2 7 Foundation & Practitioner, ITIL 4, DevOps Foundation, EC-Council Security Essentials.',
    'IT project coordination with agile project management, Kanban/Jira, risk management and stakeholder communication.':
      'IT-Projektkoordination mit agilem Projektmanagement, Kanban/Jira, Risikomanagement und Stakeholder-Kommunikation.',
    'Cybersecurity, network defence, ethical hacking, digital forensics and cloud/IT support.':
      'Cybersecurity, Network Defence, Ethical Hacking, digitale Forensik und Cloud-/IT-Support.',
    'Lead Deal Architect / Presales Project Manager': 'Lead Deal Architect / Presales-Projektmanager',
    'Enterprise IT services': 'Enterprise-IT-Services',
    'Enterprise solutions and bid architecture for DAX-listed and international corporate accounts; won projects representing more than €40M in revenue.':
      'Enterprise-Lösungen und Angebotsarchitektur für DAX-notierte und internationale Konzernkunden; gewonnene Projekte mit über 40 Mio. € Umsatz.',
    'Led presales, solution design and proposal projects from qualification through to award.':
      'Leitung von Presales-, Solution-Design- und Angebotsprojekten von der Qualifizierung bis zum Zuschlag.',
    'Architecture, cost, risk and governance concepts, including customer presentations at decision level.':
      'Architektur-, Kosten-, Risiko- und Governance-Konzepte inklusive Kundenpräsentationen auf Entscheiderebene.',
    'won deal volume': 'gewonnenes Volumen',
    'architecture & governance': 'Architektur & Governance',
    'Global automotive manufacturing · Multinational chemicals · German insurance · European banking':
      'Globale Automobilfertigung · Multinationale Chemie · Deutsche Versicherung · Europäisches Bankwesen',
    'Project Manager': 'Projektmanager',
    'Managed IT & field services': 'Managed IT & Field Services',
    'Steered IT and field-service projects from planning through to operational handover.':
      'Steuerung von IT- und Field-Service-Projekten von der Planung bis zur Betriebsübergabe.',
    'Customer coordination across a multi-account portfolio of retail, industrial and insurance clients.':
      'Kundenkoordination über ein Portfolio aus Handels-, Industrie- und Versicherungskunden.',
    'Budget, risk, resource and financial control with early escalation.':
      'Budget-, Risiko-, Ressourcen- und Finanzcontrolling mit früher Eskalation.',
    'European retail · Industrial engineering · Automotive · Global insurance broking':
      'Europäischer Handel · Industrietechnik · Automotive · Globales Versicherungsmakler-Geschäft',
    'Led 16 technical specialists across Germany, Austria and Switzerland.':
      'Führung von 16 technischen Spezialisten in Deutschland, Österreich und der Schweiz.',
    'Resource planning, escalation handling and process optimisation in infrastructure and field service.':
      'Ressourcenplanung, Eskalationsbearbeitung und Prozessoptimierung in Infrastruktur und Field Service.',
    'Built a training and development framework for delivery quality and stable transitions.':
      'Aufbau eines Schulungs- und Entwicklungsrahmens für Delivery-Qualität und stabile Übergaben.',
    'specialists': 'Spezialisten',
    'countries': 'Länder',
    'Managed services, DACH & UK': 'Managed Services, DACH & UK',
    'Managed services with level 2/3 escalation ownership for banking, telecommunications and IT-services accounts.':
      'Managed Services mit Level-2/3-Eskalationsverantwortung für Banken-, Telekommunikations- und IT-Service-Kunden.',
    'Customer, SLA, contract and service communication bridging delivery and engineering.':
      'Kunden-, SLA-, Vertrags- und Servicekommunikation als Brücke zwischen Delivery und Technik.',
    'Commercial ownership of the account portfolio: profitability, billing volume and contract steering.':
      'Kommerzielle Verantwortung für das Kundenportfolio: Profitabilität, Abrechnungsvolumen und Vertragssteuerung.',
    'profit': 'Profit',
    'monthly billing': 'monatliche Abrechnung',
    'monthly revenue': 'Monatsumsatz',
    'Global investment banking · International telecommunications · Enterprise IT services':
      'Globales Investmentbanking · Internationale Telekommunikation · Enterprise-IT-Services',
    'Where the technical depth comes from': 'Woher die technische Tiefe kommt',
    'Hands-on infrastructure, systems engineering and e-commerce operations before the delivery roles.':
      'Praktische Infrastruktur-, Systems-Engineering- und E-Commerce-Arbeit vor den Delivery-Rollen.',
    'IT Consultant / E-Commerce Administrator': 'IT-Consultant / E-Commerce-Administrator',
    'CRM, database, backend-shop and e-commerce administration.':
      'CRM-, Datenbank-, Backend-Shop- und E-Commerce-Administration.',
    'Linux and Windows server operations plus technical webshop support.':
      'Linux- und Windows-Serverbetrieb sowie technische Webshop-Betreuung.',
    'SEO, webshop and IT optimisation with a cost-reduction focus.':
      'SEO-, Webshop- und IT-Optimierung mit Fokus auf Kostensenkung.',
    'Founder & Consultant': 'Gründer & Berater',
    'Full ownership of customer and supplier relationships.':
      'Vollständige Verantwortung für Kunden- und Lieferantenbeziehungen.',
    'Managed worldwide import and export processes.': 'Steuerung der weltweiten Import- und Exportprozesse.',
    'Global sales and marketing of medical and IT devices; pimiTool is registered as a software copyright.':
      'Weltweiter Vertrieb und Marketing medizinischer und IT-Geräte; pimiTool ist als Software-Urheberrecht registriert.',
    'Senior Systems Engineer': 'Senior Systems Engineer',
    'IT infrastructure development and customer-side operations.':
      'IT-Infrastrukturentwicklung und Betreuung beim Kunden.',
    'Microsoft Lync, SharePoint and customer-facing infrastructure support.':
      'Microsoft Lync, SharePoint und kundennaher Infrastruktur-Support.',
    'System Administrator': 'Systemadministrator',
    'Managed the complete IT infrastructure: 25 servers and 350 clients across four countries.':
      'Verantwortung für die gesamte IT-Infrastruktur: 25 Server und 350 Clients in vier Ländern.',
    '3rd-level support, maintenance, fault analysis and rollout planning for new software.':
      '3rd-Level-Support, Wartung, Störungsanalyse und Rollout-Planung für neue Software.',
    'servers': 'Server',
    'clients': 'Clients',
    'Earlier roles (2004 — 2010)': 'Frühere Stationen (2004 — 2010)',
    'Team Leader Production / Business Consultant': 'Teamleiter Produktion / Business Consultant',
    'Support Specialist': 'Support Specialist',
    'Customer Service Professional': 'Customer Service Professional',
    'Sorter / Coder': 'Sortierer / Codierer',
    'Apprenticeship — Office Communications Clerk (IHK)': 'Ausbildung — Kaufmann für Bürokommunikation (IHK)',
    'Education, honours and the full certification list are on the academic page. The systems and products I built alongside these roles are on the projects page.': 'Ausbildung, Auszeichnungen und die vollständige Zertifikatsliste stehen unter Studium & Zertifizierungen. Die Systeme und Produkte, die parallel zu diesen Rollen entstanden sind, finden sich unter Projekte.',
    'Permanent': 'Festanstellung',
    'Contract': 'Projektvertrag',
    'Development': 'Weiterbildung',
    'Leadership': 'Führung',
    'Self-employed': 'Selbstständig',
    'Shenzhen, CN': 'Shenzhen, CN',

    /* ---- academic page ---- */
    'Academic record & certifications': 'Studium & Zertifizierungen',
    'Degrees, research and certifications.': 'Abschlüsse, Forschung und Zertifizierungen.',
    'Latest degree': 'Letzter Abschluss',
    'B.Sc. Computer Science': 'B.Sc. Informatik',
    'Standing': 'Leistungsstand',
    'GPA 3.91 / 4.0': 'GPA 3,91 / 4,0',
    'Summa cum laude · GPA 3.91 / 4.0': 'Summa cum laude · GPA 3,91 / 4,0',
    'Research track': 'Forschungsschwerpunkt',
    'Cybersecurity, MPhil prep': 'Cybersecurity, MPhil-Vorbereitung',
    '14 held': '14 vorhanden',
    'Degrees and research preparation': 'Abschlüsse und Forschungsvorbereitung',
    'Current and completed academic work, most recent first.': 'Laufende und abgeschlossene akademische Arbeit, neueste zuerst.',
    'University of the People, Pasadena, California · completed.':
      'University of the People, Pasadena, Kalifornien · abgeschlossen.',
    'Pre-doctoral research preparation — Cybersecurity (MPhil track)':
      'Prädoktorale Forschungsvorbereitung — Cybersecurity (MPhil)',
    'General Sir John Kotelawala Defence University, Sri Lanka. Research synopsis and topic development on malware classification with machine learning: literature review, static and dynamic feature engineering, model training, and evaluation for robustness and concept drift.':
      'General Sir John Kotelawala Defence University, Sri Lanka. Forschungssynopse und Themenentwicklung zur Malware-Klassifikation mit maschinellem Lernen: Literaturarbeit, statische und dynamische Feature-Entwicklung, Modelltraining sowie Evaluation auf Robustheit und Concept Drift.',
    'A.S. Computer Science': 'A.S. Informatik',
    'High Honors': 'High Honors',
    'B.A. Business Administration': 'B.A. Betriebswirtschaft',
    'University of Hertfordshire, United Kingdom.': 'University of Hertfordshire, Vereinigtes Königreich.',
    'First Class': 'First Class',
    'Office Communications Clerk — vocational qualification': 'Kaufmann für Bürokommunikation — Berufsausbildung',
    'IHK (German Chamber of Industry and Commerce) · dual apprenticeship.':
      'IHK (Industrie- und Handelskammer) · duale Ausbildung.',
    'Academic distinctions': 'Akademische Auszeichnungen',
    'Awards recorded by the awarding institution.': 'Von der vergebenden Institution dokumentierte Auszeichnungen.',
    'University of the People. Awarded in November 2024, January 2025, September 2025, November 2025, January 2026, March 2026 and August 2026.': 'University of the People. Verliehen im November 2024, Januar 2025, September 2025, November 2025, Januar 2026, März 2026 und August 2026.',
    'Grade point average': 'Notendurchschnitt',
    'B.Sc. Computer Science at University of the People, completed in August 2026 with a GPA of 3.91 out of 4.0. The preceding A.S. was completed with High Honors.':
      'B.Sc. Informatik an der University of the People, abgeschlossen im August 2026 mit einem GPA von 3,91 von 4,0. Der vorangegangene A.S. wurde mit High Honors abgeschlossen.',
    'Class honours': 'Class-Auszeichnung',
    'B.A. Business Administration at the University of Hertfordshire. First Class is the highest UK undergraduate classification.': 'B.A. Betriebswirtschaft an der University of Hertfordshire. First Class ist die höchste britische Bachelor-Einstufung.',
    'Article of the issue': 'Artikel der Ausgabe',
    'ShieldLink opened issue 5(2) of the International Journal of Research in Computing as the lead article.':
      'ShieldLink eröffnete Ausgabe 5(2) des International Journal of Research in Computing als Leitartikel.',
    'Professional certifications': 'Berufliche Zertifizierungen',
    'AWS Solutions Architect — course completion': 'AWS Solutions Architect — Kursabschluss',
    'Applied competencies': 'Angewandte Kompetenzen',
    'Project & product methods': 'Projekt- & Produktmethoden',
    'Systems & operations': 'Systeme & Betrieb',
    'SLA / KPI management': 'SLA-/KPI-Management',
    'Service reviews': 'Service Reviews',
    'Escalation management': 'Eskalationsmanagement',
    'Transition & handover': 'Transition & Übergabe',
    'Contract steering': 'Vertragssteuerung',
    'Profitability ownership': 'Profitabilitätsverantwortung',
    'Product ownership': 'Product Ownership',
    'Risk & budget control': 'Risiko- & Budgetsteuerung',
    'Stakeholder communication': 'Stakeholder-Kommunikation',
    '3rd-level support': '3rd-Level-Support',
    'Release & deployment': 'Release & Deployment',
    'Threat modelling': 'Threat Modelling',
    'Network defence': 'Network Defence',
    'Penetration testing basics': 'Grundlagen Penetration Testing',
    'Digital forensics basics': 'Grundlagen digitale Forensik',
    'Risk analysis': 'Risikoanalyse',
    'Security documentation': 'Security-Dokumentation',
    'Academic service': 'Akademischer Dienst',
    'Academic activity beyond degree work.': 'Akademische Tätigkeit über das Studium hinaus.',
    'Peer review': 'Peer Review',
    'Reviewer for the 6th Student Symposium of the Faculty of Computing at General Sir John Kotelawala Defence University in 2025.':
      'Reviewer für das 6. Student Symposium der Faculty of Computing an der General Sir John Kotelawala Defence University im Jahr 2025.',
    'In write-ups I keep implemented work, experimental results, prototypes and proposed directions clearly apart, the same way the project pages do.': 'In Ausarbeitungen halte ich auseinander, was umgesetzt, was experimentell belegt, was Prototyp und was bloß ein Vorschlag ist. Auf den Projektseiten halte ich es genauso.',
    'Research themes': 'Forschungsthemen',
    'Cybersecurity and detection, database and storage systems, and formal methods where they genuinely strengthen a claim. Some of the work sits closer to philosophy of computation than to engineering.': 'Cybersecurity und Detection, Datenbank- und Storage-Systeme sowie formale Methoden dort, wo sie eine Aussage wirklich stärken. Ein Teil der Arbeit liegt eher in der Wissenschaftstheorie als im Engineering.',
    'Research identifiers': 'Forschungs-Identifikatoren',
    'Public identifiers are the cleanest route to the authorship record; the publication page mirrors ORCID and links every DOI directly.':
      'Wer die Autorenschaft prüfen will, nutzt am besten die öffentlichen Kennungen. Die Publikationsseite spiegelt ORCID und verlinkt jede DOI direkt.',
    'Education': 'Ausbildung',
    'Honours': 'Auszeichnungen',
    'Capabilities': 'Kompetenzen',
    'Degrees': 'Abschlüsse',
    'Journal articles': 'Fachartikel',
    'Peer-reviewed': 'Peer-reviewt',
    'Preprints': 'Preprints',
    'Public DOI records': 'Öffentliche DOI-Nachweise',

    /* ---- projects page ---- */
    'Project portfolio': 'Projektportfolio',
    'Twenty-two projects, twenty of them public.': 'Zweiundzwanzig Projekte, zwanzig davon öffentlich.',
    'Seven research systems: a database engine, an XDR platform, distributed storage, an evidence engine, secure file delivery and a programming language, plus a Python workbench for connectome pharmacology. Then seven Apple-platform apps, two developer tools and six games, two of which are still in development. Each released project links to its source code, a demo or its release page.': 'Sieben Forschungssysteme: eine Datenbank-Engine, eine XDR-Plattform, verteilter Speicher, eine Evidence-Engine, sichere Dateizustellung und eine Programmiersprache, dazu eine Python-Umgebung für Konnektom-Pharmakologie. Außerdem sieben Apple-Apps, zwei Entwickler-Tools und sechs Spiele, zwei davon noch in Entwicklung. Für veröffentlichte Projekte verlinke ich den Quellcode, eine Demo oder die Release-Seite.',
    'Publications behind the work': 'Publikationen dahinter',
    'Discuss a project': 'Projekt besprechen',
    '20 public': '20 öffentlich',
    'Primary stack': 'Haupt-Stack',
    'Backed by papers': 'Durch Paper belegt',
    '4 systems': '4 Systeme',
    'Evidence': 'Nachweis',
    'Code · papers · tests': 'Code · Paper · Tests',
    'Selected project work': 'Ausgewählte Projektarbeit',
    'Filter by category. The research systems link to a profile with scope, architecture and what the work does and does not show. The products link to their release page.': 'Nach Kategorie filtern. Hinter den Forschungssystemen liegt jeweils ein Profil zu Umfang, Architektur und Aussagekraft der Arbeit. Die Produkte verlinken auf ihre Release-Seite.',
    'All · 22': 'Alle · 22',
    'Research systems · 7': 'Forschungssysteme · 7',
    'iOS & macOS · 7': 'iOS & macOS · 7',
    'Tools · 2': 'Tools · 2',
    'Games · 6': 'Spiele · 6',
    '22 projects': '22 Projekte',
    'Filter projects by category': 'Projekte nach Kategorie filtern',
    'Database systems': 'Datenbanksysteme',
    'A single-binary database engine with cell-interned MVCC, MySQL compatibility, partial PostgreSQL support, and twenty research tracks.':
      'Eine Single-Binary-Datenbank-Engine mit Cell-Interned MVCC, MySQL-Kompatibilität, teilweiser PostgreSQL-Unterstützung und zwanzig Forschungstracks.',
    'Security operations': 'Security Operations',
    'A Rust-built XDR and SIEM platform for detections, fleet operations, incident response, and threat hunting.':
      'Eine in Rust gebaute XDR- und SIEM-Plattform für Detections, Flottenbetrieb, Incident Response und Threat Hunting.',
    'Distributed systems': 'Verteilte Systeme',
    'An offline-first distributed filesystem with signed operations, deterministic replication, and proof-ready storage semantics.':
      'Ein Offline-First-Dateisystem mit signierten Operationen, deterministischer Replikation und nachweisbarer Speichersemantik.',
    'Edge evidence': 'Edge Evidence',
    'An edge-native evidence engine that turns device telemetry into tamper-evident logs with signed checkpoints.':
      'Eine Edge-native Evidence-Engine, die Gerätetelemetrie in manipulationssichere Logs mit signierten Checkpoints überführt.',
    'Secure file delivery': 'Sichere Dateizustellung',
    'A home-hosted secure file drop with content-addressed storage, delivery receipts, and path-aware reachability evidence.':
      'Ein selbst gehosteter sicherer Dateitransfer mit Content-Addressed Storage, Zustellquittungen und nachvollziehbarem Erreichbarkeitsnachweis.',
    'Programming languages': 'Programmiersprachen',
    'A change-oriented programming language and browser IDE with inferred contracts, provenance, and selected Lean-checked evidence.':
      'Eine änderungsorientierte Programmiersprache mit Browser-IDE, abgeleiteten Verträgen, Provenienz und in Teilen mit Lean geprüften Nachweisen.',
    'iOS application': 'iOS-Anwendung',
    'macOS application': 'macOS-Anwendung',
    'Private photo decluttering for iPhone. Duplicates, screenshots and bursts are detected entirely on-device.':
      'Private Foto-Bereinigung für das iPhone. Duplikate, Screenshots und Serienbilder werden vollständig auf dem Gerät erkannt.',
    'Mushroom cultivation companion with strain guides, grow journals, AI contamination scans and PDF export.':
      'Begleit-App für die Pilzzucht mit Strain-Guides, Grow-Journalen, KI-Kontaminationsscans und PDF-Export.',
    'Plant propagation tracker with rooting forecasts, visual journals, weather context, reminders and exportable records.':
      'Tracker für Pflanzenvermehrung mit Bewurzelungsprognosen, visuellen Journalen, Wetterbezug, Erinnerungen und exportierbaren Aufzeichnungen.',
    'Pomodoro and deep-work timer with streak systems, widgets and lightweight productivity insights.':
      'Pomodoro- und Deep-Work-Timer mit Streak-System, Widgets und schlanken Produktivitätsauswertungen.',
    'Universal macOS updater that unifies Sparkle, GitHub Releases and Mac App Store sources into one flow.':
      'Universeller macOS-Updater, der Sparkle, GitHub Releases und Mac App Store in einem Ablauf zusammenführt.',
    'Private macOS productivity tracker with local focus tools plus automatic timelines and analytics in Pro.':
      'Privater macOS-Produktivitätstracker mit lokalen Fokus-Tools sowie automatischen Timelines und Analysen in Pro.',
    'Native macOS drive-health monitoring with local history, trend analysis and transparent compatibility reporting.':
      'Native macOS-Überwachung der Laufwerksgesundheit mit lokaler Historie, Trendanalyse und transparentem Kompatibilitätsbericht.',
    'Web tool': 'Web-Tool',
    'Analysis tool': 'Analyse-Tool',
    'German-language violin tuner with A=442 Hz, pure-fifth checks, reference tones and on-device microphone analysis.':
      'Deutschsprachiges Geigenstimmgerät mit A=442 Hz, Quintenreinheit-Prüfung, Referenztönen und lokaler Mikrofonanalyse.',
    'Local trading scanner with out-of-sample-gated recommendations, risk sizing, live TP/SL tracking and an HTML dashboard.':
      'Lokaler Trading-Scanner mit Out-of-Sample-geprüften Empfehlungen, Risikogrößenbestimmung, Live-TP/SL-Tracking und HTML-Dashboard.',
    'Game · iOS': 'Spiel · iOS',
    'Game · Web': 'Spiel · Web',
    'Post-apocalyptic survival strategy with progression systems, dynamic events and escalating pressure.':
      'Postapokalyptische Survival-Strategie mit Progressionssystemen, dynamischen Ereignissen und steigendem Druck.',
    'Food truck management sim with rush gameplay, rival trucks, loyalty rewards and truck financing across two cities.':
      'Food-Truck-Management-Simulation mit Rush-Gameplay, Konkurrenztrucks, Treueprämien und Truck-Finanzierung in zwei Städten.',
    'Medieval barber-surgeon life sim: care, trade, travel, household, staff and civic ambition in 1382.':
      'Mittelalterliche Bader-Chirurg-Lebenssimulation: Heilkunst, Handel, Reisen, Haushalt, Personal und städtischer Aufstieg im Jahr 1382.',
    'Computational neuroscience': 'Computational Neuroscience',
    'A provenance-first pharmacology workbench on the Drosophila MaleCNS connectome that tests whether each prediction actually depends on the wiring.':
      'Eine provenienzorientierte Pharmakologie-Workbench auf dem MaleCNS-Konnektom von Drosophila, die prüft, ob eine Vorhersage tatsächlich von der Verschaltung abhängt.',
    'Coming soon': 'Demnächst',
    'Game · Steam': 'Spiel · Steam',
    'In development': 'In Entwicklung',
    'A hospital management sim set in Hamburg, 1875–1892. Build wards, hire staff and push germ theory past a profession that still believes in miasma, up to the cholera of 1892.':
      'Eine Krankenhaus-Aufbausimulation in Hamburg, 1875–1892. Stationen bauen, Personal einstellen und die Keimtheorie gegen eine Ärzteschaft durchsetzen, die noch an Miasmen glaubt, bis zur Cholera von 1892.',
    'A strategy game about the invention of insurance, Hamburg 1590–1850. Price risk from letters, rumours and ship lists, and build the statistics yourself.':
      'Ein Strategiespiel über die Erfindung der Versicherung, Hamburg 1590–1850. Risiko aus Briefen, Gerüchten und Schiffslisten bepreisen und die Statistik selbst aufbauen.',
    'A quiet puzzle about tree rings: place climate cards on a timeline, cut the trunk and match the target cross-section. 78 levels and a daily puzzle.':
      'Ein ruhiges Puzzle über Jahresringe: Klimakarten auf eine Zeitleiste legen, den Stamm sägen und den Zielquerschnitt treffen. 78 Level und ein tägliches Rätsel.',
    'Two levels of detail': 'Zwei Detailtiefen',
    'These profiles stay short. Three of the systems also have a longer technical write-up.': 'Diese Profile bleiben kurz. Drei der Systeme haben zusätzlich eine ausführlichere technische Beschreibung.',
    'Need implementation detail?': 'Mehr Implementierungsdetails nötig?',
    'The operator pages cover architecture, operating surfaces and benchmark numbers for SkeinDB, Wardex and NexusFS. The full operator view has the rest of the technical portfolio.': 'Die Operator-Seiten behandeln Architektur, Betriebsoberflächen und Benchmark-Zahlen für SkeinDB, Wardex und NexusFS. Die vollständige Operator-Ansicht enthält das übrige technische Portfolio.',
    'Portfolio': 'Portfolio',
    'Context': 'Kontext',
    'Pre-launch': 'Vor dem Launch',
    'Local-only': 'Nur lokal',
    'Paper · TechRxiv 2026': 'Paper · TechRxiv 2026',
    'Paper · Federated IDS, TechRxiv 2025': 'Paper · Federated IDS, TechRxiv 2025',

    /* ---- publications page ---- */
    'Publications and public research.': 'Publikationen und öffentliche Forschung.',
    'Publications and public research': 'Publikationen und öffentliche Forschung',
    'Public records': 'Öffentliche Nachweise',
    'Record source': 'Quelle des Nachweises',
    'Full publication list': 'Vollständige Publikationsliste',
    'Use the filters to focus on journal articles or preprints. Select a title or the Abstract control to read a short summary without leaving the page.':
      'Über die Filter lassen sich Fachartikel oder Preprints eingrenzen. Ein Klick auf den Titel oder auf „Abstract“ zeigt eine kurze Zusammenfassung, ohne die Seite zu verlassen.',
    'Journal articles use their current published form; the ShieldLink abstract also links to its public preprint version.':
      'Fachartikel erscheinen in ihrer aktuellen veröffentlichten Fassung; das ShieldLink-Abstract verlinkt zusätzlich die öffentliche Preprint-Version.',
    'Filter publication record': 'Publikationsnachweis filtern',
    'All · 12': 'Alle · 12',
    'Journal · 4': 'Fachartikel · 4',
    'Preprint · 8': 'Preprint · 8',
    'The publication record is complementary to the implementation portfolio: project pages show system scope and evidence boundaries, while this page keeps the academic record in one recruiter-friendly view.':
      'Publikationen und Projekte ergänzen sich: Die Projektseiten zeigen Umfang und Aussagekraft der Systeme, diese Seite bündelt den akademischen Teil an einer Stelle.',
    'Explore the systems and research projects or review the academic background behind the record.':
      'Weiter zu den Systemen und Forschungsprojekten oder zum akademischen Hintergrund.',
    'Record': 'Nachweis',

    /* ---- contact page ---- */
    'Recruiting · collaboration · research': 'Recruiting · Zusammenarbeit · Forschung',
    'Direct channels': 'Direkte Wege',
    'Choose the route that fits.': 'Wählen Sie den passenden Weg.',
    'For a role, it helps if the first message names the position and the working model. A full CV is available on request.': 'Bei einer Stellenanfrage hilft es, wenn schon die erste Nachricht Position und Arbeitsmodell nennt. Einen vollständigen Lebenslauf schicke ich auf Anfrage zu.',
    'Inspect work ↗': 'Arbeit ansehen ↗',
    'Connect ↗': 'Vernetzen ↗',
    'Send a message': 'Nachricht senden',
    'Send message': 'Nachricht senden',
    'Name': 'Name',
    'Email': 'E-Mail',
    'Subject': 'Betreff',
    'Message': 'Nachricht',
    'Role, research, or project question': 'Rolle, Forschung oder Projektfrage',
    'Leave empty': 'Leer lassen',
    'Your message goes straight to my inbox. If delivery fails it stays in the form so nothing is lost. See the':
      'Ihre Nachricht geht direkt in mein Postfach. Falls der Versand fehlschlägt, bleibt sie im Formular stehen, damit nichts verloren geht. Siehe die',
    'Message delivery failed. Your text is still in the form — please try again in a moment, or reach me on':
      'Zustellung fehlgeschlagen. Ihr Text steht noch im Formular — bitte versuchen Sie es gleich noch einmal oder erreichen Sie mich über',
    'privacy notice': 'Datenschutzhinweis',
    'Privacy': 'Datenschutz',
    'Message': 'Nachricht',
    'Use the form ↗': 'Formular nutzen ↗',
    'directly.': 'schreiben.',
    'Professional enquiries': 'Berufliche Anfragen',
    'One-pager (PDF)': 'One-Pager (PDF)',
    'Overview ↗': 'Übersicht ↗',

    /* ---- runtime strings from executive.js ---- */
    'Sending…': 'Wird gesendet…',
    'Message sent': 'Nachricht gesendet',
    'Try again': 'Erneut versuchen',
    'Thank you. The message was accepted for delivery.': 'Vielen Dank. Die Nachricht wurde zur Zustellung angenommen.',
    'Your message is still in the form.': 'Ihre Nachricht steht weiterhin im Formular.',
    'projects': 'Projekte',
    'project': 'Projekt'
  };

  const PAGE_META = {
    'profile.html': {
      title: 'Berufsprofil — Michél Nguyen',
      description: 'Berufsprofil von Michél Nguyen: 15 Jahre Enterprise-IT-Service-Delivery, Projektmanagement und Presales-Architektur, kombiniert mit peer-reviewter Informatikforschung.'
    },
    'experience.html': {
      title: 'Werdegang — Michél Nguyen',
      description: 'Werdegang von Michél Nguyen: Service Delivery und Account Management, Presales-Solution-Architektur, D-A-CH-Teamführung, Projektmanagement und 3rd-Level-Infrastrukturarbeit über 15 Jahre.'
    },
    'projects.html': {
      title: 'Projekte — Michél Nguyen',
      description: 'Zwanzig öffentliche Projekte von Michél Nguyen: Forschungssysteme in Rust und Python, iOS- und macOS-Anwendungen, Entwickler-Tools und Spiele.'
    },
    'academic.html': {
      title: 'Studium & Zertifizierungen — Michél Nguyen',
      description: 'Akademischer Nachweis von Michél Nguyen: B.Sc. Informatik summa cum laude (GPA 3,91), sieben President’s-List-Auszeichnungen, B.A. First Class, Forschungsvorbereitung in Cybersicherheit und 13 Zertifizierungen.'
    },
    'publications.html': {
      title: 'Publikationen — Michél Nguyen',
      description: 'Publikationsverzeichnis von Michél Nguyen: Fachartikel und öffentliche Preprints zu Cyber-Risiko, Systemsicherheit, Datenbanksystemen und weiteren Feldern.'
    },
    'contact.html': {
      title: 'Kontakt — Michél Nguyen',
      description: 'Kontakt zu Michél Nguyen für Rollen in Service Delivery und Projektmanagement, Systems- und Security-Engineering, Forschung oder Projektzusammenarbeit.'
    },
    'index.html': {
      title: 'Michél Nguyen — Enterprise-Delivery und angewandte Forschung',
      description: 'Michél Nguyen: 15 Jahre Enterprise-IT-Service-Delivery und Projektmanagement, kombiniert mit peer-reviewter Informatikforschung und 20 öffentlichen Projekten.'
    }
  };

  /* The German pages are prerendered by tools/build-de.mjs, so nothing is
     translated in the browser any more: the language lives in the URL and the
     EN/DE control is a pair of links. What stays is the dictionary itself,
     which executive.js consults for the handful of strings it generates at
     runtime (filter counts and the like).

     DE and PAGE_META are the build's only inputs — edit German copy in this
     file and re-run: node tools/build-de.mjs */
  window.EX_I18N = {
    dict: DE,
    meta: PAGE_META,
    current: () => document.documentElement.lang,
  };
})();
