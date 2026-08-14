/* German layer for the executive portfolio.
 *
 * English lives in the HTML and is the source of truth; this file maps exact
 * English strings to German. A missing key simply leaves the English in place,
 * so a gap degrades to "untranslated", never to "empty".
 *
 * Publication titles, venues and abstracts are intentionally NOT translated:
 * they are citations. Those subtrees carry data-i18n-skip and are never touched.
 */
(() => {
  'use strict';

  const DE = {
    '15+ years': '15+ Jahre',
    'Time in IT': 'Berufserfahrung',
    '3.96': '3,96',
    'Portfolio ': 'Portfolio ',
    'Executive view · Switch to Operator for the full technical record': 'Executive-Ansicht · Der technische Teil steht in der Operator-Ansicht',
    '© 2026 Michél Nguyen · Germany': '© 2026 Michél Nguyen · Deutschland',
    'Email is the most direct route. Typical response time is within 72 hours.': 'E-Mail ist der direkteste Weg. Antwort meist innerhalb von 72 Stunden.',
    'Recruiting, research, or technical collaboration': 'Recruiting, Forschung oder technische Zusammenarbeit',
    'Direct channels for roles, collaboration, and research enquiries.': 'Direkte Wege für Rollen, Zusammenarbeit und Forschungsanfragen.',
    'Twelve public records with abstracts, venues, and direct DOI links.': 'Zwölf öffentliche Einträge mit Abstracts, Publikationsorten und direkten DOI-Links.',
    'Degrees, GPA and honours, research preparation, peer review, and 14 certifications.': 'Abschlüsse, GPA und Auszeichnungen, Forschungsvorbereitung, Peer Review und 14 Zertifizierungen.',
    'Eighteen public projects across research systems, Apple platforms, tools, and games.': 'Achtzehn öffentliche Projekte: Forschungssysteme, Apple-Plattformen, Tools und Spiele.',
    'Fifteen years of delivery, presales architecture, team leadership, and infrastructure work.': 'Fünfzehn Jahre Delivery, Presales-Architektur, Teamführung und Infrastrukturarbeit.',
    'Positioning, core strengths, measured outcomes, and current role direction.': 'Positionierung, Stärken, belegte Ergebnisse und die aktuelle Rollenausrichtung.',
    'Profile, career record, project work, and the academic record are separated into focused pages for faster review.': 'Profil, Werdegang, Projekte und der akademische Teil liegen auf eigenen Seiten, damit man schneller findet, was man sucht.',
    'Choose a section': 'Bereich wählen',
    'GPA 3.96 · 6× President’s List': 'GPA 3,96 · 6× President’s List',
    '14 certifications held': '14 Zertifizierungen',
    'Selected credentials & current focus': 'Ausgewählte Nachweise & aktuelle Schwerpunkte',
    'years in IT': 'Jahre in der IT',
    'public projects': 'öffentliche Projekte',
    'research papers': 'Forschungsarbeiten',
    'Cybersecurity research on an MPhil track, alongside the B.Sc.': 'Cybersecurity-Forschung Richtung MPhil, parallel zum B.Sc.',
    'SkeinDB database engine and Wardex XDR platform': 'Datenbank-Engine SkeinDB und XDR-Plattform Wardex',
    '3rd-level application support and release operations, nursIT Institute': '3rd-Level-Application-Support und Release-Betrieb, nursIT Institute',
    'Delivery ownership and systems work, from design through to release.': 'Delivery-Verantwortung und Systemarbeit, vom Entwurf bis zum Release.',
    'Current work · 2026': 'Aktuell · 2026',
    'and applied research.': 'und angewandte Forschung.',
    'Enterprise IT delivery': 'Enterprise-IT-Delivery',
    'Service delivery · project management · applied research': 'Service Delivery · Projektmanagement · angewandte Forschung',
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
    'Q3 2025 — now': 'Q3 2025 — heute',
    'Oct 2024 — Mar 2025': 'Okt. 2024 — März 2025',
    'May 2024 — Sep 2024': 'Mai 2024 — Sep. 2024',
    '2022 — May 2024': '2022 — Mai 2024',
    'Nov 2024 — Nov 2025': 'Nov. 2024 — Nov. 2025',
    'Nov 2024 – Mar 2026': 'Nov. 2024 – März 2026',

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
    'Deal volume won': 'Gewonnenes Auftragsvolumen',
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
    'B.Sc. Computer Science, in progress': 'B.Sc. Informatik, laufend',
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
    'I have spent fifteen years in enterprise IT delivery: presales architecture, managed-service accounts, and field-service teams across Germany, Austria and Switzerland. Alongside that I publish computer-science research and build the systems it comes out of.': 'Seit fünfzehn Jahren arbeite ich in der Enterprise-IT: Presales-Architektur, Managed-Service-Kunden und Field-Service-Teams in Deutschland, Österreich und der Schweiz. Parallel dazu forsche ich in der Informatik und entwickle die Systeme, aus denen diese Arbeiten hervorgehen.',
    'Open to service delivery, technical project management, and systems/security engineering roles':
      'Offen für Rollen in Service Delivery, technischem Projektmanagement sowie Systems- und Security-Engineering',
    'Two kinds of work': 'Zwei Standbeine',
    'How the delivery work and the research fit together.': 'Warum sich Delivery und Forschung gegenseitig tragen.',
    'Delivery and account ownership': 'Delivery- und Kundenverantwortung',
    'I have run enterprise services end to end. That meant SLAs and escalations for a global investment bank, two international telecoms carriers and a large IT services provider. On the presales side I built solution designs and bids for a global car maker, a multinational chemicals group, a German insurer and a European bank, plus infrastructure projects for a European retail group and a global insurance broker.': 'Enterprise-Services habe ich durchgängig verantwortet: SLAs und Eskalationen für eine global tätige Investmentbank, zwei internationale Telekommunikationsanbieter und einen großen IT-Dienstleister. Im Presales kamen Solution Designs und Angebote für einen globalen Automobilhersteller, einen multinationalen Chemiekonzern, einen deutschen Versicherer und eine europäische Bank dazu, außerdem Infrastrukturprojekte für eine europäische Handelsgruppe und einen global tätigen Versicherungsmakler.',
    'That kind of work gets judged on profitability, billing volume, escalation rates and transition quality, not on how interesting the architecture is. It is where I learned to explain a technical position to the people who sign the contract.': 'Gemessen wird diese Arbeit an Profitabilität, Abrechnungsvolumen, Eskalationsquoten und Übergabequalität, nicht an der Eleganz der Architektur. Dort habe ich gelernt, einen technischen Standpunkt so zu vertreten, dass ihn auch derjenige nachvollzieht, der am Ende unterschreibt.',
    'Research and engineering': 'Forschung und Engineering',
    'I also publish peer-reviewed work on cyber risk, systems security and database systems, and I build the systems behind it: a database engine, an XDR platform, an evidence engine for edge telemetry, and a set of shipped iOS and macOS apps.': 'Daneben veröffentliche ich peer-reviewte Arbeiten zu Cyber-Risiko, Systemsicherheit und Datenbanksystemen und entwickle die zugehörigen Systeme: eine Datenbank-Engine, eine XDR-Plattform, eine Evidence-Engine für Edge-Telemetrie sowie mehrere veröffentlichte iOS- und macOS-Apps.',
    'Writing papers has made me stricter about saying what a result actually shows and what it does not.': 'Wissenschaftliches Arbeiten verlangt, genau zu benennen, wie weit ein Ergebnis trägt und wo es aufhört. Diese Genauigkeit nehme ich in Projekte mit.',
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
    'The areas where the delivery roles, the engineering and the research actually overlap.': 'Hier überschneiden sich Delivery, Engineering und Forschung am stärksten.',
    'Delivery': 'Delivery',
    'Service delivery & ITSM': 'Service Delivery & ITSM',
    'ITIL-based service ownership, SLAs and KPIs, service reviews, escalation management, and transition into steady-state operations.':
      'ITIL-basierte Serviceverantwortung, SLAs und KPIs, Service Reviews, Eskalationsmanagement und Überführung in den Regelbetrieb.',
    'Project & programme work': 'Projekt- & Programmarbeit',
    'PRINCE2 and agile delivery, budget and risk control, stakeholder communication, and coordination across vendors and internal teams.':
      'PRINCE2 und agile Delivery, Budget- und Risikosteuerung, Stakeholder-Kommunikation sowie Koordination über Dienstleister und interne Teams hinweg.',
    'Systems': 'Systeme',
    'Infrastructure & platforms': 'Infrastruktur & Plattformen',
    'Rust, C/C++, databases, storage, protocols, 3rd-level support, DevOps-adjacent release and deployment work.':
      'Rust, C/C++, Datenbanken, Storage, Protokolle, 3rd-Level-Support sowie DevOps-nahe Release- und Deployment-Arbeit.',
    'Security': 'Security',
    'Security & assurance': 'Security & Assurance',
    'Threat detection, network defence, IAM, digital forensics basics, risk analysis, and reproducible technical evidence.':
      'Threat Detection, Network Defence, IAM, Grundlagen der digitalen Forensik, Risikoanalyse und nachvollziehbare technische Nachweise.',
    'Commercial': 'Kommerziell',
    'Presales & solution design': 'Presales & Solution Design',
    'Bid architecture, cost and governance models, customer presentations, and translating requirements into a defensible offer.':
      'Angebotsarchitektur, Kosten- und Governance-Modelle, Kundenpräsentationen und die Überführung von Anforderungen in ein belastbares Angebot.',
    'Research engineering': 'Research Engineering',
    'Literature synthesis, experimental design, academic writing, peer review, and explicit limits on what a prototype proves.':
      'Literaturarbeit, Versuchsdesign, wissenschaftliches Schreiben, Peer Review und die klare Grenze dessen, was ein Prototyp belegt.',
    'Numbers from the job': 'Belegte Zahlen',
    'Each of these was tracked by the business, not compiled for this page.': 'Diese Zahlen wurden im Unternehmen erfasst, nicht für diese Seite zusammengestellt.',
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
    'Service delivery and account ownership, presales solution architecture, team leadership in D-A-CH, project management and hands-on 3rd-level infrastructure work. The clients came from banking, telecoms, manufacturing, insurance and healthcare software.': 'Service Delivery und Kundenverantwortung, Presales-Solution-Architektur, Teamleitung in D-A-CH, Projektmanagement und praktische 3rd-Level-Infrastrukturarbeit. Die Kunden kamen aus Banking, Telekommunikation, Industrie, Versicherung und Healthcare-Software.',
    'Largest account base': 'Größter Kundenstamm',
    '£3M monthly revenue': '3 Mio. £ Monatsumsatz',
    'Team leadership': 'Teamführung',
    '16 specialists, D-A-CH': '16 Spezialisten, D-A-CH',
    'Current role': 'Aktuelle Rolle',
    'IT Administrator, nursIT': 'IT-Administrator, nursIT',
    'Current work': 'Aktuelle Tätigkeit',
    'Healthcare software operations, with the research running alongside.': 'Healthcare-Softwarebetrieb, die Forschung läuft parallel dazu.',
    'IT Administrator': 'IT-Administrator',
    'Healthcare software, Germany': 'Healthcare-Software, Deutschland',
    '3rd-level application support and DevOps-adjacent release and operations topics.':
      '3rd-Level-Application-Support sowie DevOps-nahe Release- und Betriebsthemen.',
    'Fault analysis, reproduction, log and data inspection, and coordination with development.':
      'Fehleranalyse, Reproduktion, Log- und Datenprüfung sowie Abstimmung mit der Entwicklung.',
    'FHIR R4, SQL and REST integration logic, plus test, release and customer coordination.':
      'FHIR R4, SQL und REST-Integrationslogik sowie Test-, Release- und Kundenkoordination.',
    'healthcare interop': 'Healthcare-Interoperabilität',
    'application support': 'Application Support',
    'Research & academic development — MPhil track': 'Forschung & akademische Weiterbildung (MPhil)',
    'Independent, Sri Lanka': 'Eigenständig, Sri Lanka',
    'Focused academic phase Apr 2025 – Jan 2026; continued alongside employment since.':
      'Akademische Schwerpunktphase Apr 2025 – Jan 2026; seitdem berufsbegleitend fortgeführt.',
    'MPhil preparation in cybersecurity and malware classification, in parallel with the B.Sc. Computer Science (GPA 3.96).':
      'MPhil-Vorbereitung in Cybersecurity und Malware-Klassifikation, parallel zum B.Sc. Informatik (GPA 3,96).',
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
    'A computer-science degree in progress at a 3.96 GPA, with six President’s List awards and an earlier First Class business degree. Alongside it: cybersecurity research on an MPhil track, peer-review work, and fourteen professional certifications.': 'Ein laufendes Informatikstudium mit einem GPA von 3,96, sechs President’s-List-Auszeichnungen und ein früherer Wirtschaftsabschluss mit First Class. Dazu Cybersecurity-Forschung Richtung MPhil, Peer-Review-Arbeit und vierzehn berufliche Zertifizierungen.',
    'Current degree': 'Aktueller Abschluss',
    'B.Sc. Computer Science': 'B.Sc. Informatik',
    'Standing': 'Leistungsstand',
    'GPA 3.96 / 4.0': 'GPA 3,96 / 4,0',
    'Research track': 'Forschungsschwerpunkt',
    'Cybersecurity, MPhil prep': 'Cybersecurity, MPhil-Vorbereitung',
    '14 held': '14 vorhanden',
    'Degrees and research preparation': 'Abschlüsse und Forschungsvorbereitung',
    'Current and completed academic work, most recent first.': 'Laufende und abgeschlossene akademische Arbeit, neueste zuerst.',
    'University of the People, Pasadena, California · currently enrolled.':
      'University of the People, Pasadena, Kalifornien · aktuell eingeschrieben.',
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
    'University of the People. Awarded in November 2024, January 2025, September 2025, November 2025, January 2026 and March 2026.': 'University of the People. Verliehen im November 2024, Januar 2025, September 2025, November 2025, Januar 2026 und März 2026.',
    'Grade point average': 'Notendurchschnitt',
    'Out of 4.0 in the ongoing B.Sc. Computer Science programme; the preceding A.S. was completed with High Honors.':
      'Von 4,0 im laufenden B.Sc.-Informatikstudium; der vorangegangene A.S. wurde mit High Honors abgeschlossen.',
    'Class honours': 'Class-Auszeichnung',
    'B.A. Business Administration at the University of Hertfordshire. First Class is the highest UK undergraduate classification.': 'B.A. Betriebswirtschaft an der University of Hertfordshire. First Class ist die höchste britische Bachelor-Einstufung.',
    'Article of the issue': 'Artikel der Ausgabe',
    'ShieldLink opened issue 5(2) of the International Journal of Research in Computing as the lead article.':
      'ShieldLink eröffnete Ausgabe 5(2) des International Journal of Research in Computing als Leitartikel.',
    'Professional certifications': 'Berufliche Zertifizierungen',
    'Fourteen certifications spanning service delivery, project and agile methods, security, and cloud.':
      'Vierzehn Zertifizierungen aus Service Delivery, Projekt- und agilen Methoden, Security und Cloud.',
    'AWS Solutions Architect — course completion': 'AWS Solutions Architect — Kursabschluss',
    'Applied competencies': 'Angewandte Kompetenzen',
    'Where the training actually gets used.': 'Wo die Ausbildung tatsächlich zum Einsatz kommt.',
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
    'Review and research practice': 'Review- und Forschungspraxis',
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
    'Eighteen projects, all public.': 'Achtzehn Projekte, alle öffentlich.',
    'Six research systems written in Rust: a database engine, an XDR platform, distributed storage, an evidence engine, secure file delivery and a programming language. Then seven Apple-platform apps, two developer tools and three games. All of them are public and versioned, and the code or the release is there to look at.': 'Sechs Forschungssysteme in Rust: eine Datenbank-Engine, eine XDR-Plattform, verteilter Speicher, eine Evidence-Engine, sichere Dateizustellung und eine Programmiersprache. Dazu sieben Apple-Anwendungen, zwei Entwickler-Tools und drei Spiele. Alle sind öffentlich und versioniert; Code beziehungsweise Release sind einsehbar.',
    'Publications behind the work': 'Publikationen dahinter',
    'Discuss a project': 'Projekt besprechen',
    '18 public': '18 öffentlich',
    'Primary stack': 'Haupt-Stack',
    'Backed by papers': 'Durch Paper belegt',
    '4 systems': '4 Systeme',
    'Evidence': 'Nachweis',
    'Code · papers · tests': 'Code · Paper · Tests',
    'Selected project work': 'Ausgewählte Projektarbeit',
    'Filter by category. The research systems link to a profile with scope, architecture and what the work does and does not show. The products link to their release page.': 'Nach Kategorie filtern. Hinter den Forschungssystemen liegt jeweils ein Profil zu Umfang, Architektur und Aussagekraft der Arbeit. Die Produkte verlinken auf ihre Release-Seite.',
    'All · 18': 'Alle · 18',
    'Research systems · 6': 'Forschungssysteme · 6',
    'iOS & macOS · 7': 'iOS & macOS · 7',
    'Tools · 2': 'Tools · 2',
    'Games · 3': 'Spiele · 3',
    '18 projects': '18 Projekte',
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
    'Plant propagation tracker with visual journals, weather context, reminders and exportable records.':
      'Tracker für Pflanzenvermehrung mit visuellen Journalen, Wetterbezug, Erinnerungen und exportierbaren Aufzeichnungen.',
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
    'Food truck management sim with rush gameplay, district strategy, and truck and staff upgrade systems.':
      'Food-Truck-Management-Simulation mit Rush-Gameplay, Bezirksstrategie sowie Truck- und Personal-Upgrades.',
    'Medieval barber-surgeon life sim: care, trade, travel, household, staff and civic ambition in 1382.':
      'Mittelalterliche Bader-Chirurg-Lebenssimulation: Heilkunst, Handel, Reisen, Haushalt, Personal und städtischer Aufstieg im Jahr 1382.',
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
    'A concise academic record of journal articles and public preprints, reconciled against the public ORCID Works profile. Each entry is classified by its current publication status and links directly to its DOI, public record, or project context.':
      'Ein kompakter akademischer Nachweis aus Fachartikeln und öffentlichen Preprints, abgeglichen mit dem öffentlichen ORCID-Works-Profil. Jeder Eintrag ist nach aktuellem Publikationsstatus klassifiziert und verlinkt direkt auf DOI, öffentlichen Nachweis oder Projektkontext.',
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
    'Research alongside systems work': 'Forschung neben der Systemarbeit',
    'The publication record is complementary to the implementation portfolio: project pages show system scope and evidence boundaries, while this page keeps the academic record in one recruiter-friendly view.':
      'Publikationen und Projekte ergänzen sich: Die Projektseiten zeigen Umfang und Aussagekraft der Systeme, diese Seite bündelt den akademischen Teil an einer Stelle.',
    'Explore the systems and research projects or review the academic background behind the record.':
      'Weiter zu den Systemen und Forschungsprojekten oder zum akademischen Hintergrund.',
    'Record': 'Nachweis',

    /* ---- contact page ---- */
    'Recruiting · collaboration · research': 'Recruiting · Zusammenarbeit · Forschung',
    'For service delivery and project roles, systems or security engineering, research questions, or project collaboration, email is the most direct route. Typical response time is within 72 hours.':
      'Für Rollen in Service Delivery und Projektmanagement, Systems- oder Security-Engineering, für Forschungsfragen oder Projektzusammenarbeit ist E-Mail der direkteste Weg. Ich antworte in der Regel innerhalb von 72 Stunden.',
    'Direct channels': 'Direkte Wege',
    'Choose the route that fits.': 'Wählen Sie den passenden Weg.',
    'Email works best for role details, a project brief, or a specific technical question. LinkedIn is useful for an initial professional introduction.':
      'E-Mail eignet sich am besten für Rollendetails, ein Projektbriefing oder eine konkrete technische Frage. LinkedIn passt für eine erste berufliche Kontaktaufnahme.',
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
    'If delivery fails, your message remains in the form so you can try again or email directly.':
      'Falls der Versand fehlschlägt, bleibt Ihre Nachricht im Formular stehen. Sie können es erneut versuchen oder direkt eine E-Mail schreiben.',
    'Message delivery failed. Please email': 'Zustellung fehlgeschlagen. Bitte direkt an',
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
      description: 'Achtzehn ausgelieferte Projekte von Michél Nguyen: Forschungssysteme in Rust, iOS- und macOS-Anwendungen, Entwickler-Tools und Spiele.'
    },
    'academic.html': {
      title: 'Studium & Zertifizierungen — Michél Nguyen',
      description: 'Akademischer Nachweis von Michél Nguyen: B.Sc. Informatik mit GPA 3,96, sechs President’s-List-Auszeichnungen, B.A. First Class, Cybersecurity-Forschungsvorbereitung und 14 Zertifizierungen.'
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
      description: 'Michél Nguyen: 15 Jahre Enterprise-IT-Service-Delivery und Projektmanagement, kombiniert mit peer-reviewter Informatikforschung und 18 öffentlichen Projekten.'
    }
  };

  const STORAGE_KEY = 'minh.systems:lang';
  const ATTRS = ['placeholder', 'aria-label', 'title', 'alt'];

  const isSkipped = node => {
    for (let el = node.parentElement; el; el = el.parentElement) {
      if (el.hasAttribute && el.hasAttribute('data-i18n-skip')) return true;
      const tag = el.tagName;
      if (tag === 'SCRIPT' || tag === 'STYLE' || tag === 'SVG' || tag === 'svg') return true;
    }
    return false;
  };

  const collectTextNodes = () => {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) {
      const node = walker.currentNode;
      if (node.nodeValue.trim() && !isSkipped(node)) nodes.push(node);
    }
    return nodes;
  };

  const apply = lang => {
    const german = lang === 'de';

    collectTextNodes().forEach(node => {
      if (node.__en === undefined) node.__en = node.nodeValue;
      const source = node.__en;
      const key = source.trim();
      if (!german) { node.nodeValue = source; return; }
      const hit = DE[key];
      if (hit) node.nodeValue = source.replace(key, hit);
    });

    document.querySelectorAll('[placeholder],[aria-label],[title],[alt]').forEach(el => {
      if (el.hasAttribute('data-i18n-skip')) return;
      ATTRS.forEach(attr => {
        if (!el.hasAttribute(attr)) return;
        const store = '__en_' + attr;
        if (el[store] === undefined) el[store] = el.getAttribute(attr);
        const source = el[store];
        if (!german) { el.setAttribute(attr, source); return; }
        const hit = DE[source.trim()];
        if (hit) el.setAttribute(attr, hit);
      });
    });

    const page = (location.pathname.split('/').pop() || 'index.html');
    const meta = PAGE_META[page];
    if (meta) {
      if (document.__enTitle === undefined) document.__enTitle = document.title;
      const desc = document.querySelector('meta[name="description"]');
      if (desc && desc.__en === undefined) desc.__en = desc.getAttribute('content');
      document.title = german ? meta.title : document.__enTitle;
      if (desc) desc.setAttribute('content', german ? meta.description : desc.__en);
    }

    document.documentElement.lang = german ? 'de' : 'en';
    document.querySelectorAll('.ex-lang button').forEach(button => {
      button.setAttribute('aria-pressed', String(button.dataset.lang === lang));
    });
    // Let other scripts re-render language-dependent strings they own.
    document.dispatchEvent(new CustomEvent('ex:languagechange', { detail: { lang, dict: DE } }));
  };

  let initial = 'en';
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'de' || saved === 'en') initial = saved;
    else if ((navigator.language || '').toLowerCase().startsWith('de')) initial = 'de';
  } catch (_error) {
    if ((navigator.language || '').toLowerCase().startsWith('de')) initial = 'de';
  }

  const start = () => {
    apply(initial);
    document.querySelectorAll('.ex-lang button').forEach(button => {
      button.addEventListener('click', () => {
        const lang = button.dataset.lang === 'de' ? 'de' : 'en';
        apply(lang);
        try { localStorage.setItem(STORAGE_KEY, lang); } catch (_error) {}
      });
    });
  };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
  else start();

  window.EX_I18N = { apply, dict: DE, current: () => document.documentElement.lang };
})();
