(function(){
  'use strict';

  // --- Configuration ---------------------------------------------------------
  // To enable real form submissions, set CONTACT_ENDPOINT to a Formspree /
  // Basin / Web3Forms URL. Leave empty to fall back to mailto:.
  //   e.g. 'https://formspree.io/f/XXXXXXXX'
  var CONTACT_ENDPOINT = '';

  // GitHub repo map for optional star-count metrics on project cards.
  // Unknown projects silently skip metrics.
  var GITHUB_REPOS = {
    skeindb:        'pinkysworld/SkeinDB',
    nexusfs:        'pinkysworld/NexusFS',
    wardex:         'pinkysworld/Wardex',
    verilog:        'pinkysworld/VeriLog',
    shotsift:       'pinkysworld/ShotSift',
    rootling:       'pinkysworld/Rootling',
    mushbloom:      'pinkysworld/MushBloom',
    ridgefocus:     'pinkysworld/RidgeFocus',
    appsweep:       'pinkysworld/AppSweep',
    shelterfall:    'pinkysworld/ShelterFall',
    nomadfoodtruck: 'pinkysworld/NomadKitchenTycoon',
    safedrop:       'pinkysworld/SafeDrop'
  };

  var state={lang:'en',activeProjectKey:null};
  var cardOrder=['skeindb','nexusfs','wardex','verilog','shotsift','rootling','mushbloom','ridgefocus','appsweep','shelterfall','nomadfoodtruck','safedrop'];
  var i18n={
    en:{
      meta:{
        title:'Michél Nguyen — Researcher & Engineer',
        description:'Portfolio of Michél Nguyen: independent researcher and software engineer building production apps, games, and systems research.'
      },
      nav:{projects:'Projects',publications:'Publications',writing:'Writing',skills:'Skills',education:'Education',contact:'Contact'},
      langSwitcher:{selectorAria:'Language selector',switchEn:'Switch to English',switchDe:'Switch to German'},
      hero:{
        eyebrow:'Independent Research + Product Engineering',
        accent:'Building systems, apps, and research that ship.',
        lede:'I design and deliver research-heavy software across database engines, iOS/macOS applications, and interactive systems. Scroll down to explore each project with visuals, technical context, and implementation highlights.',
        ctaPrimary:'Explore Projects',
        ctaSecondary:'Start a Conversation',
        focusLabel:'Focus Areas',
        focusValue:'Database systems • iOS/macOS • Applied research',
        trackLabel:'Current Track',
        trackValue:'B.Sc. Computer Science (University of the People)',
        outputLabel:'Output',
        outputValue:'Published research + production-ready software',
        scrollHint:'Scroll Down to See More'
      },
      sections:{
        projectsKicker:'Featured Work',
        projectsTitle:'Featured Projects',
        projectsNote:'Tap Show More to see project details and screenshots.',
        publicationsKicker:'Research',
        publicationsTitle:'Publications & Preprints',
        publicationsNote:'Peer-reviewed work, technical preprints, and creative publications across computing and theoretical domains.',
        writingKicker:'Notes & Essays',
        writingTitle:'Writing',
        writingNote:'Selected notes, explainers, and behind-the-paper reflections.',
        skillsKicker:'Expertise',
        skillsTitle:'Professional Skills',
        skillsNote:'Cross-functional capability from systems architecture to production app delivery and academic writing.',
        educationKicker:'Academic Profile',
        educationTitle:'Education & Professional Activities',
        educationNote:'Ongoing formal education, pre-doctoral cybersecurity research preparation, and peer-review activity aligned with active publication work.',
        contactKicker:'Get in Touch',
        contactTitle:'Contact',
        contactNote:'For collaboration, research opportunities, app partnerships, or speaking requests.'
      },
      cards:{
        showMore:'Show More',
        liveSite:'Live Site',
        relatedPub:'Related paper',
        skeindb:{badge:'Research',desc:'Single-binary database engine with MySQL and PostgreSQL wire compatibility, SkeinAdmin control panel, 14 hardened research tracks, and sandboxed Wasm extensions.'},
        nexusfs:{badge:'Research',desc:'Verifiable offline-first distributed filesystem with signed operations, deterministic replication, and proof-ready architecture.'},
        wardex:{badge:'Research',desc:'Unified XDR platform with cross-layer threat detection, automated response orchestration, and full-stack security telemetry across endpoints, networks, and cloud workloads.'},
        verilog:{badge:'Research',desc:'Edge-native evidence engine that turns telemetry into tamper-evident logs, signed checkpoints, and proof-ready trust layers.'},
        shotsift:{badge:'iOS App',desc:'Private photo decluttering experience for duplicates, screenshots, bursts, and large-media cleanup workflows.'},
          rootling:{badge:'iOS App',desc:'Plant propagation tracker with visual journals, reminders, weather context, and exportable records.'},
          mushbloom:{badge:'iOS App',desc:'Mushroom cultivation companion with strain guides, grow journals, AI contamination scans, and environmental logging.'},
          ridgefocus:{badge:'iOS App',desc:'Pomodoro and deep-work platform with streak systems, widgets, and lightweight personal productivity insights.'},
          appsweep:{badge:'macOS Tool',desc:'Universal macOS updater that merges multiple update sources into a single inventory and action flow.'},
          shelterfall:{badge:'Game',desc:'Post-apocalyptic strategy game with progression systems, dynamic events, and escalating survival pressure.'},
          nomadfoodtruck:{badge:'Game',desc:'Build your street food empire from a single van to a citywide fleet. Craft menus, master the lunch rush, hire staff, and conquer every district.'},
          safedrop:{badge:'Research',desc:'Home-hosted secure file sharing with proof-carrying delivery, reachability evidence, and explanation-first design.'}
        },
      secondary:{
        focusledgerDesc:'AI-assisted macOS productivity tracker with local timeline screenshots, focus sessions, and private analytics.',
        focusledgerLink:'Project Link',
        pimiDesc:'Proprietary software work formally registered as a copyright-protected system.',
        pimiLink:'View on ORCID'
      },
      publications:{
        types:[
          'Preprint · ResearchGate · 2026',
          'Journal · IJRC · 2026',
          'Preprint · TechRxiv · 2026',
          'Preprint · TechRxiv · 2025',
          'Preprint · TechRxiv · 2025',
          'Journal · Cognizance · 2025',
          'Preprint · TechRxiv · 2025',
          'Preprint · Research Square · 2025',
          'Preprint · TechRxiv · 2025',
          'Journal · Cognizance · 2025',
          'Book',
          'Software Copyright'
        ]
      },
      writing:{
        kicker:'Note',
        items:[
          {title:'Why SkeinDB ships a single binary',excerpt:'The operational case for merging admin UI, wire protocols, and research tracks into one executable.',cta:'Read note'},
          {title:'Proof-carrying file delivery, explained',excerpt:'What "path-aware reachability" means for home-hosted SafeDrop and why receipts beat logs.',cta:'Read note'},
          {title:'Federated IDS on constrained IoT nodes',excerpt:'Trade-offs, compression choices, and open problems from the 2025 TechRxiv preprint.',cta:'Read note'}
        ]
      },
      skillBlocks:['Systems & Databases','Apple Development','Protocols & Backend','Research Domains'],
      education:{
        preDoc:{year:'Q3 2025 - now',title:'Pre-doctoral Research Preparation — Cybersecurity (MPhil/PhD Track)',org:'General Sir John Kotelawala Defence University, Sri Lanka • Research preparation phase for graduate study.',bullets:['Research synopsis and topic development focused on malware classification with machine learning.','Literature review, static/dynamic feature engineering, model training, and evaluation for robustness and drift.','Outputs in progress: preprint manuscript, public GitHub artifacts, and curated dataset preparation.']},
        bsc:{year:'2025 - now',title:'Bachelor of Science — Computer Science',org:'University of the People, Pasadena, California, US • Currently enrolled'},
        asc:{year:'2024 - 2025',title:'Associate of Science — Computer Science',org:'University of the People, Pasadena, California, US • Completed with High Honors'},
        review:{year:'2025',title:'Reviewer — 6th Student Symposium (Faculty of Computing)',org:'General Sir John Kotelawala Defence University, Colombo, Sri Lanka • Peer review service'}
      },
      contact:{
        formTitle:'Send a Message',
        labels:{name:'Your Name',email:'Your Email',subject:'Subject',message:'Message'},
        placeholders:{name:'Jane Doe',email:'you@example.com',subject:'Research collaboration, app question, etc.',message:'Your message',captcha:'?'},
        send:'Send Message',
        sending:'Sending...',
        captcha:'Verify:'
      },
      detail:{overview:'Overview',tech:'Tech Stack',highlights:'Highlights',profile:'Build Profile',visit:'Visit Project',reference:'Reference Link',closeAria:'Close details'},
      form:{spam:'Spam detected.',required:'Please fill in all required fields.',captcha:'Incorrect captcha answer. Please try again.',opening:'Opening your email client...',sent:'Message sent — thanks, I\u2019ll reply soon.',failed:'Could not send. Opening your email client as a fallback...',subjectPrefix:'Contact from '}
    },
    de:{
      meta:{
        title:'Michél Nguyen — Forscher & Entwickler',
        description:'Portfolio von Michél Nguyen: unabhängige Forschung und Softwareentwicklung für produktive Apps, Games und Systemforschung.'
      },
      nav:{projects:'Projekte',publications:'Publikationen',writing:'Texte',skills:'Kompetenzen',education:'Ausbildung',contact:'Kontakt'},
      langSwitcher:{selectorAria:'Sprachauswahl',switchEn:'Zu Englisch wechseln',switchDe:'Zu Deutsch wechseln'},
      hero:{
        eyebrow:'Unabhaengige Forschung + Produktentwicklung',
        accent:'Systeme, Apps und Forschung mit realen Ergebnissen.',
        lede:'Ich entwickle forschungsnahe Software in Datenbanksystemen, iOS/macOS-Anwendungen und interaktiven Systemen. Scrolle nach unten, um Projekte mit Bildern, Technikdetails und Ergebnissen zu sehen.',
        ctaPrimary:'Projekte ansehen',
        ctaSecondary:'Kontakt aufnehmen',
        focusLabel:'Schwerpunkte',
        focusValue:'Datenbanksysteme • iOS/macOS • Angewandte Forschung',
        trackLabel:'Aktueller Studienweg',
        trackValue:'B.Sc. Informatik (University of the People)',
        outputLabel:'Ergebnisse',
        outputValue:'Publizierte Forschung + produktionsreife Software',
        scrollHint:'Nach unten scrollen'
      },
      sections:{
        projectsKicker:'Ausgewaehlte Arbeiten',
        projectsTitle:'Ausgewaehlte Projekte',
        projectsNote:'Tippe auf Mehr anzeigen, um Details und Screenshots zu sehen.',
        publicationsKicker:'Forschung',
        publicationsTitle:'Publikationen & Preprints',
        publicationsNote:'Peer-Review-Arbeiten, technische Preprints und weitere Veroeffentlichungen aus Informatik und Theorie.',
        writingKicker:'Notizen & Essays',
        writingTitle:'Texte',
        writingNote:'Ausgewaehlte Notizen, Erklaerungen und Gedanken rund um Paper und Projekte.',
        skillsKicker:'Kompetenzen',
        skillsTitle:'Fachliche Kompetenzen',
        skillsNote:'Breites Profil von Systemarchitektur bis App-Entwicklung und wissenschaftlichem Schreiben.',
        educationKicker:'Akademisches Profil',
        educationTitle:'Ausbildung & akademische Aktivitaeten',
        educationNote:'Laufendes Studium, praedoktorale Forschungsvorbereitung im Bereich Cybersecurity und Peer-Review-Aktivitaet.',
        contactKicker:'Kontakt',
        contactTitle:'Kontakt',
        contactNote:'Fuer Zusammenarbeit, Forschungsprojekte, App-Partnerschaften oder Vortraege.'
      },
      cards:{
        showMore:'Mehr anzeigen',
        liveSite:'Website',
        relatedPub:'Passendes Paper',
        skeindb:{badge:'Forschung',desc:'Single-Binary-Datenbank-Engine mit MySQL- und PostgreSQL-Wire-Kompatibilitaet, SkeinAdmin-Steuerungspanel, 14 gehaerteten Forschungstracks und sandboxed Wasm-Erweiterungen.'},
        nexusfs:{badge:'Forschung',desc:'Verifizierbares Offline-First-Dateisystem mit signierten Operationen, deterministischer Replikation und proof-ready Architektur.'},
        wardex:{badge:'Forschung',desc:'Einheitliche XDR-Plattform mit schichtuebergreifender Bedrohungserkennung, automatisierter Reaktionsorchestrierung und Full-Stack-Security-Telemetrie ueber Endpunkte, Netzwerke und Cloud-Workloads.'},
        verilog:{badge:'Forschung',desc:'Edge-native Evidence-Engine, die Telemetrie in manipulationssichere Logs, signierte Checkpoints und proof-ready Trust-Layer verwandelt.'},
        shotsift:{badge:'iOS-App',desc:'Datenschutzorientierte Foto-Bereinigung fuer Duplikate, Screenshots, Serienbilder und grosse Medien.'},
          rootling:{badge:'iOS-App',desc:'Plant-Propagation-Tracker mit visuellen Journalen, Erinnerungen, Wetterbezug und Exportfunktionen.'},
          mushbloom:{badge:'iOS-App',desc:'Pilzzucht-Begleiter mit Strain-Guides, Grow-Journalen, KI-Kontaminationsscanner und Umweltprotokollen.'},
          ridgefocus:{badge:'iOS-App',desc:'Pomodoro- und Deep-Work-App mit Streak-System, Widgets und schlanker Produktivitaetsanalyse.'},
          appsweep:{badge:'macOS-Tool',desc:'Universeller macOS-Updater, der mehrere Quellen in einer Uebersicht zusammenfuehrt.'},
          shelterfall:{badge:'Spiel',desc:'Postapokalyptisches Strategiespiel mit Progression, dynamischen Events und steigendem Schwierigkeitsdruck.'},
          nomadfoodtruck:{badge:'Spiel',desc:'Baue dein Street-Food-Imperium auf — vom einzelnen Van zur stadtweiten Flotte. Erstelle Menüs, meistere den Lunch-Rush und erobere jeden Bezirk.'},
          safedrop:{badge:'Forschung',desc:'Selbst gehosteter sicherer Dateitransfer mit Zustellnachweisen, Erreichbarkeitsevidenz und erklaerungsorientiertem Design.'}
        },
      secondary:{
        focusledgerDesc:'KI-gestuetzter macOS-Produktivitaetstracker mit lokalen Timeline-Screenshots, Fokus-Sessions und privaten Analysen.',
        focusledgerLink:'Projektlink',
        pimiDesc:'Proprietaere Softwarearbeit mit registriertem urheberrechtlichem Schutz.',
        pimiLink:'Bei ORCID ansehen'
      },
      publications:{
        types:[
          'Preprint · ResearchGate · 2026',
          'Fachartikel · IJRC · 2026',
          'Preprint · TechRxiv · 2026',
          'Preprint · TechRxiv · 2025',
          'Preprint · TechRxiv · 2025',
          'Fachartikel · Cognizance · 2025',
          'Preprint · TechRxiv · 2025',
          'Preprint · Research Square · 2025',
          'Preprint · TechRxiv · 2025',
          'Fachartikel · Cognizance · 2025',
          'Buch',
          'Software-Urheberrecht'
        ]
      },
      writing:{
        kicker:'Notiz',
        items:[
          {title:'Warum SkeinDB als Single Binary ausgeliefert wird',excerpt:'Der operative Grund, Admin-UI, Wire-Protokolle und Forschungstracks in einer Binary zu buendeln.',cta:'Lesen'},
          {title:'Proof-carrying Dateiuebertragung, erklaert',excerpt:'Was pfadbewusste Erreichbarkeit fuer SafeDrop bedeutet und warum Quittungen Logs schlagen.',cta:'Lesen'},
          {title:'Federated IDS auf ressourcenarmen IoT-Knoten',excerpt:'Trade-offs, Kompressionsentscheidungen und offene Fragen aus dem TechRxiv-Preprint 2025.',cta:'Lesen'}
        ]
      },
      skillBlocks:['Systeme & Datenbanken','Apple-Entwicklung','Protokolle & Backend','Forschungsfelder'],
      education:{
        preDoc:{year:'Q3 2025 - heute',title:'Praedoktorale Forschungsvorbereitung — Cybersecurity (MPhil/PhD)',org:'General Sir John Kotelawala Defence University, Sri Lanka • Vorbereitung auf weiterfuehrende Forschungsprogramme.',bullets:['Forschungssynopse und Themenentwicklung mit Fokus auf Malware-Klassifikation (ML).','Literaturarbeit, statische/dynamische Feature-Entwicklung, Modelltraining und Evaluation auf Robustheit und Drift.','Geplante Outputs: Preprint-Manuskript, oeffentliche GitHub-Artefakte und kuratierte Datensatzvorbereitung.']},
        bsc:{year:'2025 - heute',title:'Bachelor of Science — Informatik',org:'University of the People, Pasadena, Kalifornien, USA • Laufend'},
        asc:{year:'2024 - 2025',title:'Associate of Science — Informatik',org:'University of the People, Pasadena, Kalifornien, USA • Mit High Honors abgeschlossen'},
        review:{year:'2025',title:'Reviewer — 6th Student Symposium (Faculty of Computing)',org:'General Sir John Kotelawala Defence University, Colombo, Sri Lanka • Peer-Review-Taetigkeit'}
      },
      contact:{
        formTitle:'Nachricht senden',
        labels:{name:'Ihr Name',email:'Ihre E-Mail',subject:'Betreff',message:'Nachricht'},
        placeholders:{name:'Max Mustermann',email:'sie@example.com',subject:'Forschungsanfrage, App-Frage usw.',message:'Ihre Nachricht',captcha:'?'},
        send:'Nachricht senden',
        sending:'Wird gesendet...',
        captcha:'Pruefen:'
      },
      detail:{overview:'Ueberblick',tech:'Tech-Stack',highlights:'Highlights',profile:'Projektprofil',visit:'Projekt besuchen',reference:'Referenzlink',closeAria:'Details schliessen'},
      form:{spam:'Spam erkannt.',required:'Bitte alle Pflichtfelder ausfuellen.',captcha:'Captcha-Antwort ist falsch. Bitte erneut versuchen.',opening:'E-Mail-Programm wird geoeffnet...',sent:'Nachricht gesendet — vielen Dank.',failed:'Senden fehlgeschlagen. E-Mail-Programm wird als Fallback geoeffnet...',subjectPrefix:'Kontakt von '}
    }
  };

  var projectCatalog={
    skeindb:{
      title:'SkeinDB',
      stack:['Rust','Axum','MySQL Protocol','PostgreSQL v3 Wire','SkeinAdmin','MVCC','Wasm UDFs','Hash-chained WAL'],
      images:['assets/screenshots/skeindb-hero.webp','assets/screenshots/skeindb-detail.webp'],
      live:'https://minh.systems/SkeinDB/site/',
      secondary:'https://minh.systems/SkeinDB/',
      copy:{
        en:{subtitle:'Single-binary database engine · MySQL + PostgreSQL · SkeinAdmin',overview:'SkeinDB is a single-executable database engine targeting both adoption and research extensibility. It ships a MySQL adoption layer with WordPress-class admin compatibility, an early PostgreSQL v3 wire baseline, a JSON-RPC control plane (SkeinQL), and SkeinAdmin — a click-first management UI with inline grid editing, dialect-aware SQL profiles, and a live Index Advisor. 14 research tracks are hardened with runtime evidence and integration tests.',highlights:['MySQL adoption layer with WordPress-class admin compatibility and installer seed-query coverage','PostgreSQL v3 wire protocol baseline on port 5432 with trust/cleartext auth','SkeinAdmin control panel with inline grid editing, Index Advisor, and expert cluster panels','14 hardened research tracks (R02–R16) with runtime evidence and integration tests','Sandboxed Wasm UDFs with capability-based access and experimental batch ABI','Hash-chained WAL for tamper evidence and configurable row persistence (json/segment/hybrid)','ETag-driven cache coherency, query-scoped patches, and delta-chained MVCC'],profile:['Primary orientation: database systems research + adoption','Wire protocols: MySQL-compatible + PostgreSQL v3 baseline','Admin surface: SkeinAdmin with Index Advisor','Research tracks: 14 hardened (R02–R16)']},
        de:{subtitle:'Single-Binary-Datenbank-Engine · MySQL + PostgreSQL · SkeinAdmin',overview:'SkeinDB ist eine Single-Executable-Datenbank-Engine fuer Adoption und Forschungserweiterbarkeit. Sie liefert eine MySQL-Adoptionsschicht mit WordPress-Admin-Kompatibilitaet, ein fruehes PostgreSQL-v3-Wire-Baseline, eine JSON-RPC-Steuerebene (SkeinQL) und SkeinAdmin — eine klickbasierte Management-UI mit Inline-Grid-Editing, dialektbewussten SQL-Profilen und Live-Index-Advisor. 14 Forschungstracks sind mit Runtime-Evidenz und Integrationstests gehaertet.',highlights:['MySQL-Adoptionsschicht mit WordPress-Admin-Kompatibilitaet und Installer-Seed-Query-Abdeckung','PostgreSQL-v3-Wire-Protokoll-Baseline auf Port 5432 mit Trust/Cleartext-Auth','SkeinAdmin-Steuerungspanel mit Inline-Grid-Editing, Index Advisor und Expert-Cluster-Panels','14 gehaertete Forschungstracks (R02–R16) mit Runtime-Evidenz und Integrationstests','Sandboxed Wasm-UDFs mit Capability-basiertem Zugriff und experimenteller Batch-ABI','Hash-chained WAL fuer Manipulationssicherheit und konfigurierbare Zeilenpersistenz (json/segment/hybrid)','ETag-basierte Cache-Kohaerenz, Query-Scoped Patches und Delta-chained MVCC'],profile:['Ausrichtung: Datenbanksystem-Forschung + Adoption','Wire-Protokolle: MySQL-kompatibel + PostgreSQL-v3-Baseline','Admin-Oberflaeche: SkeinAdmin mit Index Advisor','Forschungstracks: 14 gehaertet (R02–R16)']}
      }
    },
    nexusfs:{
      title:'NexusFS',
      stack:['Rust','QUIC','CRDT','Content-addressed storage','Proof scaffolding'],
      images:['assets/screenshots/nexusfs-hero.webp','assets/screenshots/nexusfs-detail.webp'],
      live:'https://minh.systems/NexusFS/site/',
      secondary:'https://minh.systems/NexusFS/',
      copy:{
        en:{subtitle:'Verifiable offline-first distributed filesystem research',overview:'NexusFS is a single-executable distributed storage system designed for edge and offline-first environments. It combines local-first persistence, signed operations, deterministic replication, and a verification path that starts with transparent proofs and extends toward zero-knowledge systems.',highlights:['Single-executable architecture for daemon, admin surface, and local storage workflows','Offline-first replication built around signed, replay-safe filesystem operations','Content-addressed storage, CRDT-backed state evolution, and proof-ready protocol boundaries','Energy-aware, edge-oriented design with a path from transparent verification toward ZK systems'],profile:['Primary orientation: distributed systems research','Binary model: single executable','Target environment: edge and offline-first deployments','Research path: transparent proofs to ZK-ready verification']},
        de:{subtitle:'Verifizierbare Offline-First-Distributed-Filesystem-Forschung',overview:'NexusFS ist ein Single-Executable-Storage-System fuer Edge- und Offline-First-Umgebungen. Es verbindet lokale Persistenz, signierte Operationen, deterministische Replikation und einen Verifikationspfad, der mit transparenten Beweisen beginnt und in Richtung Zero-Knowledge-Systeme erweitert werden kann.',highlights:['Single-Executable-Architektur fuer Daemon, Admin-Oberflaeche und lokale Storage-Workflows','Offline-First-Replikation auf Basis signierter, replay-sicherer Dateisystem-Operationen','Content-Addressed Storage, CRDT-gestuetzte Zustandsentwicklung und proof-ready Protokollgrenzen','Energieorientiertes Edge-Design mit Pfad von transparenter Verifikation zu kuenftigen ZK-Systemen'],profile:['Ausrichtung: Forschung zu verteilten Systemen','Binary-Modell: einzelne ausfuehrbare Datei','Zielumgebung: Edge- und Offline-First-Deployments','Forschungspfad: transparente Beweise bis ZK-ready Verifikation']}
      }
    },
    wardex:{
      title:'Wardex',
      stack:['Rust','XDR','Threat Detection','Response Orchestration','Telemetry Correlation','Policy Engine','SIEM Integration','Admin Console'],
      images:['assets/screenshots/wardex-hero.webp','assets/screenshots/wardex-detail.webp'],
      live:'https://minh.systems/Wardex/site/',
      secondary:'https://github.com/pinkysworld/Wardex',
      copy:{
        en:{subtitle:'Unified XDR platform · cross-layer detection · automated response · full-stack telemetry',overview:'Wardex is a Rust-based XDR (Extended Detection and Response) platform providing unified threat detection, investigation, and automated response across endpoints, networks, and cloud workloads. It correlates cross-layer telemetry signals, applies adaptive anomaly scoring, orchestrates policy-driven responses, and delivers real-time visibility through a 14-panel browser admin console.',highlights:['Cross-layer threat detection correlating endpoint, network, and cloud telemetry','Automated response orchestration with policy-driven playbooks','Adaptive multi-signal anomaly scoring with drift detection and baseline re-learning','14-panel browser admin console with token-authenticated HTTP API and live dashboards','Policy composition algebra with conflict detection for multi-rule evaluation','TLA+ and Alloy model export for offline formal verification','Criterion micro-benchmarks: ~55K samples/sec throughput with per-stage latency profiling','Cross-platform CI (Linux, macOS, Windows) with clippy and fmt'],profile:['Primary orientation: XDR platform research','Architecture: unified detection, investigation, and response','Telemetry: cross-layer correlation across endpoints, networks, and cloud','Admin surface: 14-panel browser console with real-time dashboards']},
        de:{subtitle:'Einheitliche XDR-Plattform · schichtuebergreifende Erkennung · automatisierte Reaktion · Full-Stack-Telemetrie',overview:'Wardex ist eine Rust-basierte XDR-Plattform (Extended Detection and Response) fuer einheitliche Bedrohungserkennung, Untersuchung und automatisierte Reaktion ueber Endpunkte, Netzwerke und Cloud-Workloads. Sie korreliert schichtuebergreifende Telemetriesignale, wendet adaptives Anomalie-Scoring an, orchestriert policy-getriebene Reaktionen und bietet Echtzeit-Sichtbarkeit ueber eine 14-Panel-Browser-Admin-Konsole.',highlights:['Schichtuebergreifende Bedrohungserkennung mit Korrelation von Endpoint-, Netzwerk- und Cloud-Telemetrie','Automatisierte Reaktionsorchestrierung mit policy-getriebenen Playbooks','Adaptives Multi-Signal-Anomalie-Scoring mit Drift-Erkennung und Baseline-Re-Learning','14-Panel-Browser-Admin-Konsole mit Token-authentifizierter HTTP-API und Live-Dashboards','Policy-Kompositionsalgebra mit Konflikterkennung fuer Multi-Regel-Evaluation','TLA+- und Alloy-Modellexport fuer Offline-Formalverifikation','Criterion-Mikro-Benchmarks: ~55K Samples/Sek Durchsatz mit Per-Stage-Latenzprofiling','Plattformuebergreifende CI (Linux, macOS, Windows) mit clippy und fmt'],profile:['Ausrichtung: XDR-Plattform-Forschung','Architektur: einheitliche Erkennung, Untersuchung und Reaktion','Telemetrie: schichtuebergreifende Korrelation ueber Endpunkte, Netzwerke und Cloud','Admin-Oberflaeche: 14-Panel-Browser-Konsole mit Echtzeit-Dashboards']}
      }
    },
    verilog:{
      title:'VeriLog',
      stack:['Rust','Ed25519','Merkle frontier','Differential privacy','ZK-ready commitments'],
      images:['assets/screenshots/verilog-hero.webp','assets/screenshots/verilog-detail.webp'],
      live:'https://verilog.minh.systems/site/',
      secondary:'https://verilog.minh.systems/',
      copy:{
        en:{subtitle:'Verifiable edge evidence engine for telemetry',overview:'VeriLog is a Rust-first, open-source edge evidence engine built around one idea: logs should be provable, not just stored. The current mainline combines append-only signed records, Merkle-root commitments, signed checkpoints, and privacy-aware telemetry handling in a single binary, with a structured path toward zero-knowledge integrity proofs.',highlights:['Four trust layers spanning signed hash chains, Merkle commitments, differential privacy controls, and ZK research targets','Prototype runtime already supports deterministic verification, membership proofs, and portable signed checkpoints','Privacy controls are integrated into the evidence pipeline rather than bolted on after logging','Research program now organized into 30 explicit tracks across integrity, privacy, efficiency, and federation'],profile:['Primary orientation: verifiable edge telemetry and auditability research','Binary model: single executable','Current status: open-source prototype with production-minded architecture','Research path: from transparent proofs to selective disclosure and zero-knowledge attestations']},
        de:{subtitle:'Verifizierbare Edge-Evidence-Engine fuer Telemetrie',overview:'VeriLog ist eine Rust-first Open-Source-Engine fuer verifizierbare Edge-Evidence mit einer klaren Leitidee: Logs sollen beweisbar sein, nicht nur gesammelt werden. Die aktuelle Hauptversion kombiniert append-only signierte Eintraege, Merkle-Root-Commitments, signierte Checkpoints und privacy-aware Telemetrie in einem Single-Binary-Design mit klarem Pfad zu Zero-Knowledge-Integritaetsbeweisen.',highlights:['Vier Trust-Layer von signierter Hash-Chain ueber Merkle-Commitments und Differential-Privacy-Kontrollen bis zu ZK-Forschungszielen','Der Prototyp liefert bereits deterministische Verifikation, Membership-Proofs und portable signierte Checkpoints','Privacy-Kontrollen sind direkt in der Evidence-Pipeline integriert statt nachtraeglich aufgesetzt','Das Forschungsprogramm ist in 30 konkrete Tracks fuer Integritaet, Privacy, Effizienz und Federation strukturiert'],profile:['Ausrichtung: verifizierbare Edge-Telemetrie und Auditierbarkeitsforschung','Binary-Modell: einzelne ausfuehrbare Datei','Aktueller Stand: Open-Source-Prototyp mit produktionsnaher Architektur','Forschungspfad: von transparenten Beweisen zu selektiver Offenlegung und Zero-Knowledge-Attestierungen']}
      }
    },
    shotsift:{
      title:'ShotSift',
      stack:['Swift','Vision Framework','Photos API','On-device AI'],
      images:['assets/screenshots/shotsift-hero.webp','assets/screenshots/shotsift-detail.webp'],
      live:'https://minh.systems/ShotSift/',
      secondary:'https://github.com/pinkysworld',
      copy:{
        en:{subtitle:'Privacy-first photo cleanup on iOS',overview:'ShotSift helps users reclaim storage and reduce visual clutter using on-device analysis. The workflow prioritizes trust, speed, and clear action grouping for duplicate and low-value media removal.',highlights:['Detects duplicates, similar shots, blurry images, and screenshots','No cloud dependency for analysis workflows','Large media identification for storage savings','Curated cleanup actions with user control'],profile:['Primary orientation: Consumer iOS utility','Data handling: On-device only','UX goal: fast declutter decisions','Deployment: native iOS app experience']},
        de:{subtitle:'Datenschutzorientierte Foto-Bereinigung auf iOS',overview:'ShotSift hilft Nutzern, Speicher freizugeben und visuelle Unordnung zu reduzieren, komplett mit On-Device-Analyse. Der Workflow priorisiert Vertrauen, Geschwindigkeit und klare Entscheidungsgruppen.',highlights:['Erkennt Duplikate, aehnliche Aufnahmen, unscharfe Bilder und Screenshots','Keine Cloud-Abhaengigkeit fuer Analyseablaeufe','Erkennung grosser Dateien fuer Speichereinsparung','Kuratiere Bereinigungsaktionen mit voller Nutzerkontrolle'],profile:['Ausrichtung: iOS Consumer Utility','Datenverarbeitung: ausschliesslich lokal','UX-Ziel: schnelle Declutter-Entscheidungen','Deployment: native iOS-App-Erfahrung']}
      }
    },
    rootling:{
      title:'Rootling',
      stack:['Swift','CloudKit','Weather integration','PDF/CSV Export'],
      images:['assets/screenshots/rootling-hero.webp','assets/screenshots/rootling-detail.webp'],
      live:'https://minh.systems/Rootling/',
      secondary:'https://github.com/pinkysworld',
      copy:{
        en:{subtitle:'Plant propagation tracker with visual growth logs',overview:'Rootling brings plant propagation management into a structured, data-backed app flow. It combines daily tracking, growth timelines, and reminders with a clean interface optimized for long-running horticulture journeys.',highlights:['Supports 15 propagation methods and rich photo journals','200+ plant library with care context','Reminder and weather-aware planning support','Export options for archival and reporting'],profile:['Primary orientation: Lifestyle + tracking app','Sync strategy: iCloud-enabled','Output modes: Time-lapse and data export','User profile: hobbyists to advanced growers']},
        de:{subtitle:'Plant-Propagation-Tracker mit visuellen Wachstumsprotokollen',overview:'Rootling ueberfuehrt Plant-Propagation-Management in einen strukturierten, datenbasierten App-Flow. Es kombiniert taegliches Tracking, Wachstumstimeline und Erinnerungen in einer klaren UI.',highlights:['Unterstuetzt 15 Vermehrungsmethoden mit umfangreichen Fotojournalen','200+ Pflanzenbibliothek mit Pflegekontext','Erinnerungen und wetterbezogene Planungsunterstuetzung','Exportoptionen fuer Archivierung und Auswertung'],profile:['Ausrichtung: Lifestyle- und Tracking-App','Sync-Strategie: iCloud-aktiviert','Ausgabeformen: Zeitraffer und Datenexport','Zielgruppe: Einsteiger bis fortgeschrittene Grower']}
      }
    },
    mushbloom:{
      title:'MushBloom',
      stack:['Swift','Core ML','iCloud','PDF/CSV Export','Strain Library'],
      images:['assets/screenshots/mushbloom-hero.webp','assets/screenshots/mushbloom-detail.webp'],
      live:'https://mushbloom.minh.systems/',
      secondary:'https://apps.apple.com/app/mushbloom',
      copy:{
        en:{subtitle:'Mushroom growing companion with AI-assisted cultivation tools',overview:'MushBloom gives mushroom cultivators a structured workflow for every grow. It combines a rich strain reference library, daily grow journals, contamination checks, and environmental logging so each batch is easier to document, monitor, and improve over time.',highlights:['26+ strain guides with substrate, humidity, fruiting, and harvest reference data','Grow journal for inoculation, progress notes, photos, and stage-by-stage tracking','AI contamination scanner to catch common mold issues from camera captures','Environmental logging, iCloud sync, and PDF/CSV exports for durable records'],profile:['Primary orientation: cultivation companion app','Audience: hobby growers to advanced mycology users','Data flow: journals, reminders, and iCloud-backed grow records','Commercial model: one-time App Store purchase']},
        de:{subtitle:'Pilzzucht-Begleiter mit KI-gestuetzten Anbautools',overview:'MushBloom bietet Pilzzuechtern einen strukturierten Workflow fuer jeden Grow. Die App verbindet eine umfangreiche Strain-Referenzbibliothek, taegliche Grow-Journale, Kontaminationschecks und Umweltprotokolle, damit sich jede Charge sauber dokumentieren, ueberwachen und verbessern laesst.',highlights:['26+ Strain-Guides mit Referenzdaten zu Substrat, Feuchtigkeit, Fruchtung und Ernte','Grow-Journal fuer Inokulation, Fortschrittsnotizen, Fotos und Phasen-Tracking','KI-Kontaminationsscanner zur fruehen Erkennung haeufiger Schimmelprobleme per Kamera','Umweltprotokolle, iCloud-Sync sowie PDF/CSV-Exporte fuer belastbare Aufzeichnungen'],profile:['Ausrichtung: Begleit-App fuer Pilzzucht','Zielgruppe: Hobby-Grower bis fortgeschrittene Mykologie-Nutzer','Datenfluss: Journale, Erinnerungen und iCloud-gestuetzte Grow-Daten','Kommerzielles Modell: einmaliger Kauf im App Store']}
      }
    },
    ridgefocus:{
      title:'RidgeFocus',
      stack:['Swift','WidgetKit','iCloud','Calendar integration'],
      images:['assets/screenshots/ridgefocus-hero.webp','assets/screenshots/ridgefocus-detail.webp'],
      live:'https://minh.systems/RidgeFocus/',
      secondary:'https://github.com/pinkysworld',
      copy:{
        en:{subtitle:'Focused work timer and productivity analytics',overview:'RidgeFocus is a focus operating system for individuals who work in deep sessions. It combines Pomodoro mechanics, streak design, widget support, and longitudinal usage analytics in a minimal interface.',highlights:['Pomodoro workflows with custom durations','Gamified streak and achievement system','Lock Screen and Home Screen widgets','Session analytics and habit trends'],profile:['Primary orientation: productivity app','Data model: personal session history','Platform features: widgets and reminders','Design goal: low-friction daily use']},
        de:{subtitle:'Fokus-Timer und Produktivitaetsanalysen',overview:'RidgeFocus ist ein Fokus-Betriebssystem fuer Menschen mit Deep-Work-Sessions. Es verbindet Pomodoro-Mechanik, Streak-Design, Widget-Support und langfristige Nutzungsanalysen in einer reduzierten Oberflaeche.',highlights:['Pomodoro-Workflows mit flexiblen Zeiten','Gamifiziertes Streak- und Achievement-System','Widgets fuer Sperrbildschirm und Homescreen','Session-Analysen und Gewohnheitstrends'],profile:['Ausrichtung: Produktivitaets-App','Datenmodell: persoenliche Session-Historie','Plattformfeatures: Widgets und Erinnerungen','Designziel: taegliche Nutzung mit geringer Reibung']}
      }
    },
    appsweep:{
      title:'AppSweep',
      stack:['Swift','macOS','Sparkle','GitHub API'],
      images:['assets/screenshots/appsweep-hero.webp','assets/screenshots/appsweep-detail.webp'],
      live:'https://minh.systems/AppSweep/',
      secondary:'https://github.com/pinkysworld',
      copy:{
        en:{subtitle:'Universal update center for macOS apps',overview:'AppSweep centralizes update discovery across heterogeneous macOS app ecosystems. It reduces manual update checks by combining Sparkle, GitHub Releases, Electron metadata, and additional feeds into one operational view.',highlights:['Finds updates across multiple distribution mechanisms','Provides one-click jump links to updates','Includes release notes and security status context','Inventory export for systems hygiene'],profile:['Primary orientation: macOS utility tool','Integration scope: broad app distribution channels','Operational value: time savings + consistency','Audience: power users and admins']},
        de:{subtitle:'Universelles Update-Center fuer macOS-Apps',overview:'AppSweep buendelt Update-Erkennung ueber heterogene macOS-App-Oekosysteme. Manuelle Updatepruefungen werden reduziert, indem Sparkle, GitHub Releases, Electron-Metadaten und weitere Feeds in einer Sicht kombiniert werden.',highlights:['Findet Updates ueber mehrere Distributionswege','Bietet One-Click-Sprunglinks zu Updates','Enthaelt Release Notes und Security-Kontext','Inventar-Export fuer bessere Systemhygiene'],profile:['Ausrichtung: macOS Utility-Tool','Integrationsumfang: breite Distributionskanaele','Operativer Nutzen: Zeitersparnis und Konsistenz','Zielgruppe: Power User und Admins']}
      }
    },
      shelterfall:{
        title:'Shelter Fall',
        stack:['Swift','SpriteKit','iOS Game Architecture'],
        images:['assets/screenshots/shelterfall-hero.webp','assets/screenshots/shelterfall-detail.webp'],
        live:'https://shelterfall.minh.systems/',
        secondary:'https://shelterfall.minh.systems/',
        copy:{
          en:{subtitle:'Post-apocalyptic survival strategy game',overview:'Shelter Fall is a systems-oriented strategy game built around compounding pressure. Players balance shelter construction, survivor management, research choices, and random world events through escalating survival nights.',highlights:['20-night survival arc with escalating difficulty','Technology research tree and progression loops','Event-driven replayability with dynamic constraints','Resource and defense balancing mechanics'],profile:['Primary orientation: strategy game design','Core loop: gather, build, defend, adapt','Session style: tactical and replayable','Content depth: multi-difficulty progression']},
          de:{subtitle:'Postapokalyptisches Survival-Strategiespiel',overview:'Shelter Fall ist ein systemorientiertes Strategiespiel mit kumulativem Druck. Spieler balancieren Shelter-Bau, Survivor-Management, Forschungsentscheidungen und Zufallsereignisse ueber zunehmend harte Ueberlebensnaechte.',highlights:['20-Naechte-Survival-Arc mit steigender Schwierigkeit','Technologiebaum und Progressionsschleifen','Event-basierte Wiederspielbarkeit mit dynamischen Einschränkungen','Ressourcen- und Verteidigungsbalancing'],profile:['Ausrichtung: Strategie-Game-Design','Core Loop: sammeln, bauen, verteidigen, anpassen','Session-Stil: taktisch und wiederspielbar','Inhaltstiefe: Progression mit mehreren Schwierigkeitsstufen']}
        }
      },
      nomadfoodtruck:{
        title:'Nomad Kitchen Tycoon',
        stack:['Swift','Rush gameplay systems','District strategy','Progression economy','Staff and upgrade balancing'],
        images:['assets/screenshots/nomadkitchen-hero.webp','assets/screenshots/nomadkitchen-detail.webp'],
        live:'https://minh.systems/NomadKitchenTycoon/',
        secondary:'https://minh.systems/NomadKitchenTycoon/support.html',
        copy:{
          en:{subtitle:'Street food empire sim — from one van to a citywide fleet',overview:'Nomad Kitchen Tycoon is the food truck management sim you have been waiting for. Start with a single beat-up van and grow it into a citywide fleet. Craft winning menus, master fast-paced lunch rush events, hire talented staff, and conquer 8 unique city districts. Features 30+ recipes, deep staff and truck upgrade systems, and 100% offline gameplay.',highlights:['Deep food truck management with real progression layers','Fast-paced rush events where speed and timing drive bigger tips','8 unique city districts, each with their own customer tastes','30+ recipes to discover, master, and add to your trucks','Hire chefs, servers, and managers with unique traits','100% offline — play anytime, anywhere at your own pace'],profile:['Primary platform: iPhone and iPad','Available free on the App Store','Game pillar: management sim with quick sessions and long-term goals','100% offline — no internet required']},
          de:{subtitle:'Street-Food-Imperium-Sim — vom einzelnen Van zur stadtweiten Flotte',overview:'Nomad Kitchen Tycoon ist der Food-Truck-Management-Simulator, auf den du gewartet hast. Starte mit einem alten Van und baue eine stadtweite Flotte auf. Erstelle gewinnende Menues, meistere rasante Lunch-Rush-Events, stelle talentiertes Personal ein und erobere 8 einzigartige Stadtbezirke. Mit 30+ Rezepten, tiefgreifenden Upgrade-Systemen und 100% Offline-Gameplay.',highlights:['Tiefgreifendes Food-Truck-Management mit echten Progressionsstufen','Rasante Rush-Events, bei denen Geschwindigkeit groessere Trinkgelder bringt','8 einzigartige Stadtbezirke mit unterschiedlichen Kundengeschmaeckern','30+ Rezepte zum Entdecken, Meistern und Erweitern','Personal mit einzigartigen Eigenschaften einstellen und entwickeln','100% offline — jederzeit und ueberall spielbar'],profile:['Hauptplattform: iPhone und iPad','Kostenlos im App Store verfuegbar','Spielsaeule: Management-Sim mit schnellen Sessions und langfristigen Zielen','100% offline — kein Internet noetig']}
        }
      },
      safedrop:{
        title:'SafeDrop',
        stack:['Rust','Content-addressed Storage','Signed Receipts','Path-aware Reachability','Append-only Audit','Single Binary'],
        images:['assets/screenshots/safedrop-hero.webp','assets/screenshots/safedrop-detail.webp'],
        live:'https://minh.systems/SafeDrop/',
        secondary:'https://github.com/pinkysworld/SafeDrop',
        copy:{
          en:{subtitle:'Home-hosted secure file sharing with delivery evidence',overview:'SafeDrop is a local-first secure file drop that works from a home PC whenever it is online. It combines content-addressed storage, signed receipts, path-aware reachability, and explanation-first UX inside a single executable. The project includes a full research paper draft, 50 research tracks, and an AI-agent coding pack.',highlights:['Single-executable deployment with no cloud accounts required','Proof-carrying delivery with deterministic manifests and segment receipts','Path-aware reachability: direct bind, router mapping, assisted connectivity, or encrypted relay','Append-only audit events and human-readable evidence cards','Energy-aware scheduling and conservative policy defaults','50 research tracks spanning reachability, proofs, privacy, and supply-chain trust'],profile:['Primary orientation: systems research and open-source tool','Deployment: home PC, laptop, desktop, mini PC, or Raspberry Pi','Architecture: layered single-binary design','Research output: IJRC-ready design paper with 50 tracks across 6 bundles']},
          de:{subtitle:'Selbst gehosteter sicherer Dateitransfer mit Zustellnachweisen',overview:'SafeDrop ist ein lokaler sicherer Dateitransfer, der von einem Heim-PC aus funktioniert, wann immer dieser online ist. Es kombiniert Content-Addressed Storage, signierte Quittungen, pfadbewusste Erreichbarkeit und erklaerungsorientierte UX in einer einzigen ausfuehrbaren Datei. Das Projekt umfasst einen vollstaendigen Forschungspapier-Entwurf, 50 Forschungstracks und ein KI-Agenten-Coding-Pack.',highlights:['Single-Executable-Deployment ohne Cloud-Konten','Zustellnachweise mit deterministischen Manifesten und Segment-Quittungen','Pfadbewusste Erreichbarkeit: direktes Binding, Router-Mapping, unterstuetzte Konnektivitaet oder verschluesseltes Relay','Append-only Audit-Events und menschenlesbare Evidenzkarten','Energiebewusstes Scheduling und konservative Policy-Defaults','50 Forschungstracks zu Erreichbarkeit, Beweisen, Datenschutz und Supply-Chain-Trust'],profile:['Ausrichtung: Systemforschung und Open-Source-Tool','Deployment: Heim-PC, Laptop, Desktop, Mini-PC oder Raspberry Pi','Architektur: geschichtetes Single-Binary-Design','Forschungsoutput: IJRC-bereites Designpapier mit 50 Tracks in 6 Buendeln']}
        }
      }
    };

  var detail=document.getElementById('project-detail');
  var titleEl=document.getElementById('detail-title');
  var subtitleEl=document.getElementById('detail-subtitle');
  var primaryImg=document.getElementById('detail-image-primary');
  var secondaryImg=document.getElementById('detail-image-secondary');
  var overviewEl=document.getElementById('detail-overview');
  var stackEl=document.getElementById('detail-stack');
  var highlightsEl=document.getElementById('detail-highlights');
  var profileEl=document.getElementById('detail-profile');
  var liveEl=document.getElementById('detail-live');
  var secondaryEl=document.getElementById('detail-secondary-link');
  var closeBtn=detail?detail.querySelector('[data-close-detail]'):null;
  var lastTrigger=null;
  var capLabel=document.getElementById('cap-label');
  var langButtons=document.querySelectorAll('.lang-btn');
  var langSwitcher=document.querySelector('.lang-switcher');

  function txt(selector,value){
    var el=document.querySelector(selector);
    if(el&&typeof value==='string') el.textContent=value;
  }

  function txtAll(selector,values){
    if(!values) return;
    document.querySelectorAll(selector).forEach(function(el,idx){
      if(typeof values[idx]==='string') el.textContent=values[idx];
    });
  }

  function fillList(container,items,tag){
    container.innerHTML='';
    items.forEach(function(item){
      var el=document.createElement(tag||'li');
      el.textContent=item;
      container.appendChild(el);
    });
  }

  function getProjectData(key){
    var entry=projectCatalog[key];
    if(!entry) return null;
    var localized=(entry.copy[state.lang]||entry.copy.en);
    return {
      title:entry.title,
      subtitle:localized.subtitle,
      overview:localized.overview,
      stack:entry.stack,
      highlights:localized.highlights,
      profile:localized.profile,
      images:entry.images,
      live:entry.live,
      secondary:entry.secondary
    };
  }

  function openDetail(key,skipFocus){
    var data=getProjectData(key);
    if(!data||!detail) return;
    state.activeProjectKey=key;

    titleEl.textContent=data.title;
    subtitleEl.textContent=data.subtitle;
    overviewEl.textContent=data.overview;

    primaryImg.src=data.images[0];
    primaryImg.alt=data.title+' screenshot one';
    secondaryImg.src=data.images[1]||data.images[0];
    secondaryImg.alt=data.title+' screenshot two';

    fillList(stackEl,data.stack,'span');
    fillList(highlightsEl,data.highlights,'li');
    fillList(profileEl,data.profile,'li');

    liveEl.href=data.live;
    secondaryEl.href=data.secondary;

    detail.classList.add('open');
    detail.setAttribute('aria-hidden','false');
    document.body.style.overflow='hidden';
    if(closeBtn&&!skipFocus) closeBtn.focus();
  }

  function closeDetail(){
    if(!detail) return;
    if(document.activeElement && detail.contains(document.activeElement)){
      document.activeElement.blur();
    }
    detail.classList.remove('open');
    detail.setAttribute('aria-hidden','true');
    document.body.style.overflow='';
    if(lastTrigger) lastTrigger.focus();
  }

  document.querySelectorAll('.show-more-btn').forEach(function(btn){
    btn.addEventListener('click',function(){
      lastTrigger=btn;
      openDetail(btn.dataset.project);
    });
  });

  document.querySelectorAll('[data-close-detail]').forEach(function(el){
    el.addEventListener('click',closeDetail);
  });

  document.addEventListener('keydown',function(ev){
    if(ev.key==='Escape'&&detail&&detail.classList.contains('open')) closeDetail();
  });

  // Reveal animation
  if('IntersectionObserver' in window){
    var observer=new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if(entry.isIntersecting){
          entry.target.classList.add('show');
          observer.unobserve(entry.target);
        }
      });
    },{threshold:.1,rootMargin:'0px 0px -40px 0px'});
    document.querySelectorAll('.reveal').forEach(function(el){ observer.observe(el); });
  }else{
    document.querySelectorAll('.reveal').forEach(function(el){ el.classList.add('show'); });
  }

  // Scroll hint reference (faded in unified scroll handler)
  var scrollHint=document.querySelector('.scroll-hint');

  // Mobile hamburger menu -----------------------------------------------------
  var navToggle=document.querySelector('.nav-toggle');
  var navInner=document.querySelector('.nav-inner');
  function setNavOpen(open){
    if(!navInner||!navToggle) return;
    navInner.setAttribute('data-nav-open',open?'true':'false');
    navToggle.setAttribute('aria-expanded',open?'true':'false');
  }
  if(navToggle&&navInner){
    navToggle.addEventListener('click',function(){
      var isOpen=navInner.getAttribute('data-nav-open')==='true';
      setNavOpen(!isOpen);
    });
    document.querySelectorAll('.nav-links a').forEach(function(a){
      a.addEventListener('click',function(){ setNavOpen(false); });
    });
  }

  function applyLanguage(lang){
    state.lang=lang==='de'?'de':'en';
    var dict=i18n[state.lang]||i18n.en;
    document.documentElement.lang=state.lang;
    document.title=dict.meta.title;
    var descMeta=document.querySelector('meta[name="description"]');
    if(descMeta) descMeta.setAttribute('content',dict.meta.description);

    if(langSwitcher) langSwitcher.setAttribute('aria-label',dict.langSwitcher.selectorAria);
    var enBtn=document.querySelector('.lang-btn[data-lang="en"]');
    var deBtn=document.querySelector('.lang-btn[data-lang="de"]');
    if(enBtn){
      enBtn.classList.toggle('active',state.lang==='en');
      enBtn.setAttribute('aria-label',dict.langSwitcher.switchEn);
    }
    if(deBtn){
      deBtn.classList.toggle('active',state.lang==='de');
      deBtn.setAttribute('aria-label',dict.langSwitcher.switchDe);
    }

    txt('.nav-links a[href="#projects"]',dict.nav.projects);
    txt('.nav-links a[href="#publications"]',dict.nav.publications);
    txt('.nav-links a[href="#writing"]',dict.nav.writing);
    txt('.nav-links a[href="#skills"]',dict.nav.skills);
    txt('.nav-links a[href="#education"]',dict.nav.education);
    txt('.nav-links a[href="#contact"]',dict.nav.contact);

    txt('.eyebrow',dict.hero.eyebrow);
    txt('.hero h1 .accent',dict.hero.accent);
    txt('.hero-lede',dict.hero.lede);
    txt('.btn-primary .btn-text',dict.hero.ctaPrimary);
    txt('.btn-ghost',dict.hero.ctaSecondary);
    txt('.scroll-hint',dict.hero.scrollHint);

    var stats=document.querySelectorAll('.hero-side .side-stat');
    if(stats[0]){
      txt('.hero-side .side-stat:nth-child(1) .label',dict.hero.focusLabel);
      txt('.hero-side .side-stat:nth-child(1) .value',dict.hero.focusValue);
    }
    if(stats[1]){
      txt('.hero-side .side-stat:nth-child(2) .label',dict.hero.trackLabel);
      txt('.hero-side .side-stat:nth-child(2) .value',dict.hero.trackValue);
    }
    if(stats[2]){
      txt('.hero-side .side-stat:nth-child(3) .label',dict.hero.outputLabel);
      txt('.hero-side .side-stat:nth-child(3) .value',dict.hero.outputValue);
    }

    txt('#projects .section-kicker',dict.sections.projectsKicker);
    txt('#projects .section-title',dict.sections.projectsTitle);
    txt('#projects .section-note',dict.sections.projectsNote);

    var cards=document.querySelectorAll('#projects .projects-grid .project-card');
    cards.forEach(function(card,idx){
      var key=cardOrder[idx];
      var cardCopy=dict.cards[key];
      if(!cardCopy) return;
      var badge=card.querySelector('.project-badge');
      var desc=card.querySelector('.project-body p');
      var showMore=card.querySelector('.show-more-btn');
      var liveLink=card.querySelector('.project-link');
      var relRef=card.querySelector('.project-ref');
      if(badge) badge.textContent=cardCopy.badge;
      if(desc) desc.textContent=cardCopy.desc;
      if(showMore) showMore.textContent=dict.cards.showMore;
      if(liveLink) liveLink.textContent=dict.cards.liveSite;
      if(relRef&&relRef.dataset.pubTitle) relRef.title=dict.cards.relatedPub+': '+relRef.dataset.pubTitle;
    });

    var secondaryCards=document.querySelectorAll('#projects .secondary-card');
    if(secondaryCards[0]){
      var firstP=secondaryCards[0].querySelector('p');
      var firstA=secondaryCards[0].querySelector('a');
      if(firstP) firstP.textContent=dict.secondary.focusledgerDesc;
      if(firstA) firstA.textContent=dict.secondary.focusledgerLink;
    }
    if(secondaryCards[1]){
      var secondP=secondaryCards[1].querySelector('p');
      var secondA=secondaryCards[1].querySelector('a');
      if(secondP) secondP.textContent=dict.secondary.pimiDesc;
      if(secondA) secondA.textContent=dict.secondary.pimiLink;
    }

    txt('#publications .section-kicker',dict.sections.publicationsKicker);
    txt('#publications .section-title',dict.sections.publicationsTitle);
    txt('#publications .section-note',dict.sections.publicationsNote);
    txtAll('#publications .pub-type',dict.publications.types);

    // Writing section
    txt('#writing .section-kicker',dict.sections.writingKicker);
    txt('#writing .section-title',dict.sections.writingTitle);
    txt('#writing .section-note',dict.sections.writingNote);
    var wCards=document.querySelectorAll('#writing .writing-card');
    wCards.forEach(function(card,idx){
      var copy=(dict.writing.items||[])[idx];
      if(!copy) return;
      var k=card.querySelector('.w-kicker');
      var h=card.querySelector('h3');
      var p=card.querySelector('p');
      var a=card.querySelector('a');
      if(k) k.textContent=dict.writing.kicker;
      if(h) h.textContent=copy.title;
      if(p) p.textContent=copy.excerpt;
      if(a) a.textContent=copy.cta;
    });

    txt('#skills .section-kicker',dict.sections.skillsKicker);
    txt('#skills .section-title',dict.sections.skillsTitle);
    txt('#skills .section-note',dict.sections.skillsNote);
    txtAll('#skills .skill-block h3',dict.skillBlocks);

    txt('#education .section-kicker',dict.sections.educationKicker);
    txt('#education .section-title',dict.sections.educationTitle);
    txt('#education .section-note',dict.sections.educationNote);

    var timeline=document.querySelectorAll('#education .timeline-item');
    if(timeline[0]){
      timeline[0].querySelector('.timeline-year').textContent=dict.education.preDoc.year;
      timeline[0].querySelector('h3').textContent=dict.education.preDoc.title;
      timeline[0].querySelector('p').textContent=dict.education.preDoc.org;
      var bullets=timeline[0].querySelectorAll('li');
      dict.education.preDoc.bullets.forEach(function(line,idx){
        if(bullets[idx]) bullets[idx].textContent=line;
      });
    }
    if(timeline[1]){
      timeline[1].querySelector('.timeline-year').textContent=dict.education.bsc.year;
      timeline[1].querySelector('h3').textContent=dict.education.bsc.title;
      timeline[1].querySelector('p').textContent=dict.education.bsc.org;
    }
    if(timeline[2]){
      timeline[2].querySelector('.timeline-year').textContent=dict.education.asc.year;
      timeline[2].querySelector('h3').textContent=dict.education.asc.title;
      timeline[2].querySelector('p').textContent=dict.education.asc.org;
    }
    if(timeline[3]){
      timeline[3].querySelector('.timeline-year').textContent=dict.education.review.year;
      timeline[3].querySelector('h3').textContent=dict.education.review.title;
      timeline[3].querySelector('p').textContent=dict.education.review.org;
    }

    txt('#contact .section-kicker',dict.sections.contactKicker);
    txt('#contact .section-title',dict.sections.contactTitle);
    txt('#contact .section-note',dict.sections.contactNote);
    txt('#contact .form-panel h3',dict.contact.formTitle);
    txt('label[for="cf-name"]',dict.contact.labels.name);
    txt('label[for="cf-email"]',dict.contact.labels.email);
    txt('label[for="cf-subject"]',dict.contact.labels.subject);
    txt('label[for="cf-msg"]',dict.contact.labels.message);
    txt('#cf-send',dict.contact.send);
    if(capLabel) capLabel.textContent=dict.contact.captcha;
    var nameInput=document.getElementById('cf-name');
    var emailInput=document.getElementById('cf-email');
    var subjectInput=document.getElementById('cf-subject');
    var msgInput=document.getElementById('cf-msg');
    if(nameInput) nameInput.placeholder=dict.contact.placeholders.name;
    if(emailInput) emailInput.placeholder=dict.contact.placeholders.email;
    if(subjectInput) subjectInput.placeholder=dict.contact.placeholders.subject;
    if(msgInput) msgInput.placeholder=dict.contact.placeholders.message;
    if(capA) capA.placeholder=dict.contact.placeholders.captcha;

    var detailHeads=document.querySelectorAll('#project-detail .panel-card h4');
    if(detailHeads[0]) detailHeads[0].textContent=dict.detail.overview;
    if(detailHeads[1]) detailHeads[1].textContent=dict.detail.tech;
    if(detailHeads[2]) detailHeads[2].textContent=dict.detail.highlights;
    if(detailHeads[3]) detailHeads[3].textContent=dict.detail.profile;
    txt('#detail-live',dict.detail.visit);
    txt('#detail-secondary-link',dict.detail.reference);
    if(closeBtn) closeBtn.setAttribute('aria-label',dict.detail.closeAria);

    if(detail&&detail.classList.contains('open')&&state.activeProjectKey){
      openDetail(state.activeProjectKey,true);
    }
    try{localStorage.setItem('siteLanguage',state.lang);}catch(err){}
  }

  // Email obfuscation
  var p=['michel','_ng','@','icloud','.com'];
  var email=p[0]+p[1]+p[2]+p[3]+p[4];
  var emailLink=document.getElementById('eml-link');
  if(emailLink){
    emailLink.textContent=email;
    emailLink.href='ma'+'il'+'to:'+email;
    emailLink.onclick=null;
  }

  // Captcha + contact form
  var a=0,b=0,oi=0,ans=0;
  var ops=['+','-','\u00d7'];
  var capQ=document.getElementById('cap-q');
  var capA=document.getElementById('cap-a');
  var statusEl=document.getElementById('cf-status');

  langButtons.forEach(function(btn){
    btn.addEventListener('click',function(){
      applyLanguage(btn.dataset.lang||'en');
    });
  });
  var initialLang='en';
  try{
    var savedLang=localStorage.getItem('siteLanguage');
    if(savedLang==='en'||savedLang==='de') initialLang=savedLang;
    else if((navigator.language||'').toLowerCase().indexOf('de')===0) initialLang='de';
  }catch(err){
    if((navigator.language||'').toLowerCase().indexOf('de')===0) initialLang='de';
  }
  applyLanguage(initialLang);

  function regenCaptcha(){
    a=Math.floor(Math.random()*10)+2;
    b=Math.floor(Math.random()*10)+2;
    oi=Math.floor(Math.random()*3);
    if(oi===1&&a<b){var t=a;a=b;b=t;}
    ans=oi===0?a+b:oi===1?a-b:a*b;
    if(capQ) capQ.textContent=a+' '+ops[oi]+' '+b;
    if(capA) capA.value='';
  }

  regenCaptcha();

  function openMailto(name,userEmail,subj,msg){
    var subject=encodeURIComponent(subj||(i18n[state.lang].form.subjectPrefix+name));
    var body=encodeURIComponent('From: '+name+' <'+userEmail+'>\n\n'+msg);
    window.location.href='ma'+'il'+'to:'+email+'?subject='+subject+'&body='+body;
  }

  var sendBtn=document.getElementById('cf-send');
  if(sendBtn){
    sendBtn.addEventListener('click',function(){
      var name=document.getElementById('cf-name').value.trim();
      var userEmail=document.getElementById('cf-email').value.trim();
      var subj=document.getElementById('cf-subject').value.trim();
      var msg=document.getElementById('cf-msg').value.trim();
      var honeypot=document.querySelector('.cf-hp').value;
      var userAnswer=(capA&&capA.value||'').trim();
      var dict=i18n[state.lang];

      statusEl.className='form-status';
      statusEl.textContent='';

      if(honeypot){
        statusEl.className='form-status err';
        statusEl.textContent=dict.form.spam;
        return;
      }
      if(!name||!userEmail||!msg){
        statusEl.className='form-status err';
        statusEl.textContent=dict.form.required;
        return;
      }
      if(parseInt(userAnswer,10)!==ans){
        statusEl.className='form-status err';
        statusEl.textContent=dict.form.captcha;
        regenCaptcha();
        return;
      }

      if(CONTACT_ENDPOINT){
        sendBtn.disabled=true;
        statusEl.className='form-status';
        statusEl.textContent=dict.contact.sending;
        fetch(CONTACT_ENDPOINT,{
          method:'POST',
          headers:{'Accept':'application/json','Content-Type':'application/json'},
          body:JSON.stringify({name:name,email:userEmail,subject:subj,message:msg,_language:state.lang})
        }).then(function(r){
          sendBtn.disabled=false;
          if(r.ok){
            statusEl.className='form-status ok';
            statusEl.textContent=dict.form.sent;
            document.getElementById('cf-name').value='';
            document.getElementById('cf-email').value='';
            document.getElementById('cf-subject').value='';
            document.getElementById('cf-msg').value='';
          }else{
            statusEl.className='form-status err';
            statusEl.textContent=dict.form.failed;
            setTimeout(function(){ openMailto(name,userEmail,subj,msg); },600);
          }
          regenCaptcha();
        }).catch(function(){
          sendBtn.disabled=false;
          statusEl.className='form-status err';
          statusEl.textContent=dict.form.failed;
          setTimeout(function(){ openMailto(name,userEmail,subj,msg); },600);
          regenCaptcha();
        });
        return;
      }

      // Fallback: mailto
      openMailto(name,userEmail,subj,msg);
      statusEl.className='form-status ok';
      statusEl.textContent=dict.form.opening;
      regenCaptcha();
    });
  }

  var yearEl=document.getElementById('year');
  if(yearEl) yearEl.textContent=String(new Date().getFullYear());

  // Unified scroll handler with rAF throttle for performance
  var progressBar=document.getElementById('scroll-progress');
  var backToTop=document.getElementById('back-to-top');
  var nav=document.querySelector('.site-nav');
  var navLinks=document.querySelectorAll('.nav-links a[href^="#"]');
  var sectionIds=['projects','publications','writing','skills','education','contact'];
  var scrollTicking=false;

  function onScroll(){
    if(scrollTicking) return;
    scrollTicking=true;
    requestAnimationFrame(function(){
      var scrollY=window.scrollY;
      if(progressBar){
        var docHeight=document.documentElement.scrollHeight-document.documentElement.clientHeight;
        progressBar.style.width=(docHeight>0?(scrollY/docHeight)*100:0)+'%';
      }
      if(backToTop){
        if(scrollY>500) backToTop.classList.add('visible');
        else backToTop.classList.remove('visible');
      }
      if(scrollHint) scrollHint.style.opacity=scrollY>90?'0':'0.86';
      if(nav){
        if(scrollY>60) nav.classList.add('scrolled');
        else nav.classList.remove('scrolled');
      }
      var scrollPos=scrollY+200;
      var currentSection='';
      sectionIds.forEach(function(id){
        var section=document.getElementById(id);
        if(section&&section.offsetTop<=scrollPos) currentSection=id;
      });
      navLinks.forEach(function(link){
        var href=link.getAttribute('href');
        if(href==='#'+currentSection) link.classList.add('active');
        else link.classList.remove('active');
      });
      scrollTicking=false;
    });
  }

  window.addEventListener('scroll',onScroll,{passive:true});
  onScroll();

  if(backToTop){
    backToTop.addEventListener('click',function(){
      window.scrollTo({top:0,behavior:'smooth'});
    });
  }

  // Defer hero video playback until after LCP
  var heroVideo=document.querySelector('.hero-video video');
  if(heroVideo){
    var startVideo=function(){
      heroVideo.preload='auto';
      heroVideo.load();
      heroVideo.play().catch(function(){});
    };
    if('requestIdleCallback' in window){
      requestIdleCallback(startVideo,{timeout:2500});
    }else{
      setTimeout(startVideo,2500);
    }
  }

  // GitHub stars — fetch lazily once per project when scrolled into view.
  // Cached in sessionStorage to avoid repeated API hits (60 req/hr unauth).
  function formatStars(n){
    if(n>=1000) return (n/1000).toFixed(1).replace(/\.0$/,'')+'k';
    return String(n);
  }
  function fetchStars(key,el){
    var repo=GITHUB_REPOS[key];
    if(!repo||!el) return;
    var cacheKey='gh_stars_'+repo;
    try{
      var cached=sessionStorage.getItem(cacheKey);
      if(cached){ el.textContent=cached; el.classList.remove('loading'); return; }
    }catch(e){}
    fetch('https://api.github.com/repos/'+repo,{headers:{'Accept':'application/vnd.github+json'}})
      .then(function(r){ return r.ok?r.json():null; })
      .then(function(j){
        if(!j||typeof j.stargazers_count!=='number'){ el.parentNode&&el.parentNode.removeChild(el); return; }
        var txt='\u2605 '+formatStars(j.stargazers_count);
        el.textContent=txt;
        el.classList.remove('loading');
        try{ sessionStorage.setItem(cacheKey,txt); }catch(e){}
      })
      .catch(function(){ el.parentNode&&el.parentNode.removeChild(el); });
  }

  if('IntersectionObserver' in window){
    var metricsObs=new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if(!entry.isIntersecting) return;
        var card=entry.target;
        var key=card.querySelector('[data-project]');
        key=key&&key.dataset.project;
        var starEl=card.querySelector('.metric.stars');
        if(key&&starEl) fetchStars(key,starEl);
        metricsObs.unobserve(card);
      });
    },{rootMargin:'100px 0px'});
    document.querySelectorAll('.project-card').forEach(function(c){ metricsObs.observe(c); });
  }
})();
