(() => {
  try { localStorage.setItem('minh.systems:view', 'executive'); } catch (_error) {}

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ------------------------------------------------------------ loader */
  /* The loader dismisses itself via a CSS animation, so it clears even with
     JavaScript disabled or broken. This is the belt to that CSS braces: it
     also clears when the animation clock never advances (throttled or
     backgrounded tab, animations disabled). The loader never scroll-locks. */
  const loader = document.querySelector('.ex-page-loader');
  if (loader) {
    const clearLoader = () => {
      loader.classList.add('is-done');
      // Final state must not depend on a transition finishing: if the animation
      // clock is frozen the fade never completes, so take it out of rendering.
      window.setTimeout(() => { loader.hidden = true; }, reduceMotion ? 0 : 400);
    };
    const schedule = () => window.setTimeout(clearLoader, reduceMotion ? 0 : 700);
    if (document.readyState === 'complete') schedule();
    else window.addEventListener('load', schedule);
    // Never let a restored bfcache page come back with the loader showing.
    window.addEventListener('pageshow', clearLoader);
  }

  /* ---------------------------------------------------------------- nav */
  const nav = document.querySelector('.ex-nav');
  const menuButton = document.querySelector('.ex-menu-toggle');
  const scrim = document.querySelector('.ex-scrim');
  const mobileQuery = window.matchMedia('(max-width: 1080px)');

  if (nav && menuButton) {
    const focusablesIn = el => [...el.querySelectorAll('a[href], button:not([disabled])')]
      .filter(node => node.offsetParent !== null);

    const setNav = open => {
      nav.classList.toggle('is-open', open);
      document.body.classList.toggle('nav-open', open);
      menuButton.setAttribute('aria-expanded', String(open));
      if (open) {
        const first = focusablesIn(nav)[0];
        if (first) first.focus();
      }
    };

    const closeNav = ({ restoreFocus = false } = {}) => {
      if (!nav.classList.contains('is-open')) return;
      setNav(false);
      if (restoreFocus) menuButton.focus();
    };

    menuButton.addEventListener('click', () => setNav(!nav.classList.contains('is-open')));
    if (scrim) scrim.addEventListener('click', () => closeNav());
    nav.querySelectorAll('.ex-nav-links a, .ex-nav-cta').forEach(link => {
      link.addEventListener('click', () => closeNav());
    });

    document.addEventListener('keydown', event => {
      if (!nav.classList.contains('is-open')) return;
      if (event.key === 'Escape') {
        event.preventDefault();
        closeNav({ restoreFocus: true });
        return;
      }
      if (event.key !== 'Tab') return;
      // Keep keyboard focus inside the drawer while it covers the page.
      const items = focusablesIn(nav);
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      } else if (!nav.contains(document.activeElement)) {
        event.preventDefault();
        first.focus();
      }
    });

    // Leaving the mobile breakpoint must not strand the page in "open" state.
    const syncBreakpoint = () => { if (!mobileQuery.matches) closeNav(); };
    if (mobileQuery.addEventListener) mobileQuery.addEventListener('change', syncBreakpoint);
    else mobileQuery.addListener(syncBreakpoint);
  }

  document.querySelectorAll('[data-operator-view]').forEach(link => {
    link.addEventListener('click', () => {
      try { localStorage.setItem('minh.systems:view', 'operator'); } catch (_error) {}
    });
  });

  /* Headline metrics are deliberately NOT animated: counting them up from
     zero renders wrong figures (e.g. "€1M+" on the way to "€40M+") for the
     first frames, which is the last thing a credential band should do. */

  /* Translate a runtime-generated string via the i18n dictionary, if loaded. */
  const t = text => {
    const i18n = window.EX_I18N;
    if (!i18n || i18n.current() !== 'de') return text;
    return i18n.dict[text] || text;
  };

  /* ---------------------------------------------------- project filters */
  const projectFilters = [...document.querySelectorAll('[data-project-filter]')];
  const projectCards = [...document.querySelectorAll('[data-project-category]')];
  const projectCount = document.querySelector('[data-project-count]');
  if (projectFilters.length && projectCards.length) {
    let activeCategory = 'all';
    const applyProjectFilter = category => {
      activeCategory = category;
      let shown = 0;
      projectFilters.forEach(button => {
        button.setAttribute('aria-pressed', String(button.dataset.projectFilter === category));
      });
      projectCards.forEach(card => {
        const match = category === 'all' || card.dataset.projectCategory === category;
        card.hidden = !match;
        if (match) shown += 1;
      });
      if (projectCount) {
        projectCount.textContent = `${shown} ${t(shown === 1 ? 'project' : 'projects')}`;
      }
    };
    projectFilters.forEach(button => {
      button.addEventListener('click', () => applyProjectFilter(button.dataset.projectFilter));
    });
    applyProjectFilter('all');
    // The count is generated here, so i18n cannot translate it in the DOM pass.
    document.addEventListener('ex:languagechange', () => applyProjectFilter(activeCategory));
  }

  /* ------------------------------------------------ publication filters */
  const publicationFilters = [...document.querySelectorAll('[data-publication-filter]')];
  const publicationRows = [...document.querySelectorAll('[data-publication-kind]')];
  if (publicationFilters.length && publicationRows.length) {
    const setPublicationFilter = kind => {
      publicationFilters.forEach(button => {
        button.setAttribute('aria-pressed', String(button.dataset.publicationFilter === kind));
      });
      publicationRows.forEach(row => {
        row.hidden = kind !== 'all' && row.dataset.publicationKind !== kind;
      });
    };
    publicationFilters.forEach(button => {
      button.addEventListener('click', () => setPublicationFilter(button.dataset.publicationFilter));
    });
  }

  const publicationDetails = {
    'mortality-reference-class': {
      kicker: 'Preprint · June 2026 · Clinical AI',
      title: 'Reference-Class Failure in Mortality Prediction: A Synthetic Study of Irreducible Uncertainty in End-of-Life Prognostic Models',
      venue: 'Research Square', topic: 'Clinical AI', status: 'Version 1',
      abstract: 'Defines reference-class failure in mortality prediction: an end-of-life case can sit outside the development population’s transportable conditional mechanism while the model still returns a sharp individual risk. In a synthetic concept-shift study, logistic regression, random forest, gradient boosting, and a neural network remain confident on novel terminal cases, but Brier error plateaus near 0.215, far above the novel regime’s 0.092 aleatoric floor. The paper proposes a diagnostic triad: absent reference class, sharp output, and data-insensitive error.',
      primaryUrl: 'https://doi.org/10.21203/rs.3.rs-10058406/v1', primaryLabel: 'Open DOI', secondaryUrl: '../papers/mortality-reference-class.html', secondaryLabel: 'Open record'
    },
    'beyond-no': {
      kicker: 'Preprint · April 2026 · Education',
      title: 'Beyond No: A Low-Interruption, Autonomy-Supportive Framework for Early Childhood Self-Directed Learning in Prepared Environments',
      venue: 'ResearchGate', topic: 'Education', status: 'Submitted to KDU KJMS',
      abstract: 'Proposes a low-interruption, autonomy-supportive framework for adults accompanying self-directed learning in early childhood. Instead of steering children through constant verbal correction, the framework leans on prepared environments and minimal, well-timed interventions, so that the child’s own activity — not the adult’s narration of it — stays at the center of the learning episode.',
      primaryUrl: 'https://www.researchgate.net/publication/403982284', primaryLabel: 'Open public record', secondaryUrl: '../papers/beyond-no.html', secondaryLabel: 'Open record'
    },
    skeindb: {
      kicker: 'Preprint · March 2026 · Database systems',
      title: 'SkeinDB: Cell-Interned MVCC and Query-Scoped Delta Responses for HTTP-Native Database Caching',
      venue: 'TechRxiv', topic: 'Database systems', status: 'Version 1',
      abstract: 'Modern web applications such as dashboards, SaaS admin consoles, and multi-tenant portals often rely on aggressive polling of list queries. SkeinDB makes HTTP cache semantics first-class database primitives through cell-interned MVCC, dependency-derived ETags for sound conditional reads, and QueryPatch delta responses for a previously seen result window. Across six datasets, cell interning provides 0–82% storage savings, while QueryPatch reduces response bytes by 23–99.9% depending on change rate and window size.',
      primaryUrl: 'https://doi.org/10.36227/techrxiv.177282490.07608916/v1', primaryLabel: 'Open DOI', secondaryUrl: '../showcase/research/skeindb.html', secondaryLabel: 'View project'
    },
    cku: {
      kicker: 'Journal article · January 2026 · Cyber risk',
      title: 'Computational Knightian Uncertainty: Undecidability and the Limits of Cyber Risk Quantification in Software-Intensive Firms',
      venue: 'International Journal of Research in Computing', topic: 'Cyber risk', status: 'Published',
      abstract: 'The paper argues that software creates a residual class of uncertainty that does not collapse neatly into ordinary probabilistic risk. Because many security, safety, and compliance questions are undecidable in the general case, even perfect code visibility and abundant classical computation cannot eliminate all uncertainty. The article names that remainder computational Knightian uncertainty (CKU), then connects it to structural opacity in codebases and to practical downstream effects such as incident severity, cyber insurance outcomes, and M&A discounting.',
      primaryUrl: 'https://doi.org/10.64701/ijrc/345/9117', primaryLabel: 'Open DOI', secondaryUrl: '../papers/cku.html', secondaryLabel: 'Open record'
    },
    shieldlink: {
      kicker: 'Journal article · July 2026 · Systems security',
      title: 'ShieldLink: Retry-Aware Authenticated Encryption for Secure and Reliable Chiplet Interconnects',
      venue: 'International Journal of Research in Computing', topic: 'Systems security', status: 'Published · Lead article',
      abstract: 'Chiplet die-to-die links such as UCIe and CXL handle reliability with link-layer retries while confidentiality lives in higher-layer authenticated encryption. Composed naively, the receiver can acknowledge a frame on a fast CRC check before the slower AEAD verification finishes — a time-of-check/time-of-use window that can desynchronize state or enable denial-of-service. ShieldLink enforces one deliverability invariant: the receive window only advances on successful AEAD verification of exactly the bits that will be delivered.',
      primaryUrl: 'https://doi.org/10.64701/ijrc/345/9121', primaryLabel: 'Open DOI', secondaryUrl: '../papers/shieldlink.html', secondaryLabel: 'Open record',
      versionNote: 'The earlier public version remains available as a TechRxiv preprint.', versionUrl: 'https://doi.org/10.36227/techrxiv.176800047.72137558/v1', versionLabel: 'Open original preprint'
    },
    'preons-2': {
      kicker: 'Preprint · 2025 · Physics',
      title: 'Dual-Polarity Preons II: Parameter-Space Constraints and Viable Regimes for an Emergent Acoustic Metric',
      venue: 'TechRxiv', topic: 'Physics', status: 'Version 1',
      abstract: 'The follow-up to the dual-polarity preon toy model asks the harder question: in which regions of parameter space can the framework live at all? The paper works through parameter-space constraints on the composite neutral pairs and identifies the regimes in which an emergent acoustic metric remains viable, sharpening the original proposal into something that can be confronted with observational and collider bounds.',
      primaryUrl: 'https://doi.org/10.36227/techrxiv.176590637.76612181/v1', primaryLabel: 'Open DOI', secondaryUrl: '../papers/preons-2.html', secondaryLabel: 'Open record'
    },
    'simulated-minds': {
      kicker: 'Preprint · 2025 · Philosophy of mind',
      title: 'Simulated Minds, Artificial Consciousness, and the Theory-Relative Simulation Hypothesis',
      venue: 'TechRxiv', topic: 'Philosophy of mind', status: 'Version 1',
      abstract: 'Examines the simulation hypothesis and claims about artificial consciousness through one observation: any verdict about whether a simulated mind is genuinely conscious depends on which theory of consciousness one assumes from the outset. The paper develops this theory-relative reading and traces what it does to familiar arguments about simulated minds — many disagreements turn out to be disagreements about theories of mind, not about the simulations themselves.',
      primaryUrl: 'https://doi.org/10.36227/techrxiv.176583724.41540320/v1', primaryLabel: 'Open DOI', secondaryUrl: '../papers/simulated-minds.html', secondaryLabel: 'Open record'
    },
    'preons-1': {
      kicker: 'Journal article · 2025 · Physics',
      title: 'Dual-Polarity Preons: A Toy Model for Composite Neutral Pairs and Emergent Gravity',
      venue: 'Cognizance Journal of Multidisciplinary Studies', topic: 'Physics', status: 'Published',
      abstract: 'Proposes a toy model in which opposite-charge dyads bind into neutral pairs acting as composite bosonic excitations: a hidden U(1) interaction mediates attraction, a quartic term stabilizes bound states, and long-wavelength variations of the neutral-pair condensate generate an effective metric in the spirit of analogue-gravity programs. The construction is built to respect GW170817 multimessenger constraints and equivalence-principle tests at the 10⁻¹⁵ level, with falsifiable consequences enumerated against collider compositeness limits.',
      primaryUrl: 'https://doi.org/10.47760/cognizance.2025.v05i11.009', primaryLabel: 'Open DOI', secondaryUrl: '../papers/preons-1.html', secondaryLabel: 'Open record'
    },
    'fl-ids': {
      kicker: 'Preprint · 2025 · Systems security',
      title: 'Federated Learning-Based Intrusion Detection System for IoT Networks in Resource-Constrained Environments',
      venue: 'TechRxiv', topic: 'Systems security', status: 'Version 1',
      abstract: 'A lightweight federated-learning intrusion detection system for resource-constrained IoT deployments. Training stays decentralized, which removes the privacy and communication costs of central data collection, and differential privacy keeps model updates from leaking through gradients. On NSL-KDD and IoT-23, the federated model reaches nearly the same detection performance as a centralized baseline while remaining deployable on constrained nodes.',
      primaryUrl: 'https://doi.org/10.36227/techrxiv.176403418.87468767/v1', primaryLabel: 'Open DOI', secondaryUrl: '../papers/fl-ids.html', secondaryLabel: 'Open record'
    },
    'org-circuits': {
      kicker: 'Preprint · 2025 · Organizational theory',
      title: 'Computational Complexity of Organizational Decision Hierarchies',
      venue: 'Research Square', topic: 'Organizational theory', status: 'Version 1',
      abstract: 'Models organizational decision hierarchies as bounded-span monotone threshold circuits, making the tradeoffs between decision latency, accuracy, and headcount formally explicit. Aggregating n binary signals with span s requires depth at least ⌈logₛ n⌉. Simulations with 256 signals show the tension concretely: widening spans from 4 to 16 cuts latency roughly in half but drops decision accuracy from 100% to about 90% under realistic noise.',
      primaryUrl: 'https://doi.org/10.21203/rs.3.rs-7948428/v1', primaryLabel: 'Open DOI', secondaryUrl: '../papers/org-circuits.html', secondaryLabel: 'Open record'
    },
    'quantum-walk': {
      kicker: 'Preprint · 2025 · Cloud systems',
      title: 'A Quantum Walk-Inspired Algorithm for Dynamic Resource Allocation in Cloud Computing: Implications for Sustainable Business Practices',
      venue: 'TechRxiv', topic: 'Cloud systems', status: 'Version 1',
      abstract: 'Develops a quantum walk-inspired heuristic for dynamic resource allocation in cloud computing. The spreading behavior of quantum walks is used as a template for how allocation decisions explore the space of placements, aiming at allocations that adapt to shifting load while keeping utilization — and with it the energy footprint of over-provisioning — in check, which connects the algorithmic idea to sustainable operating practice.',
      primaryUrl: 'https://doi.org/10.36227/techrxiv.176316003.37717757/v1', primaryLabel: 'Open DOI', secondaryUrl: '../papers/quantum-walk.html', secondaryLabel: 'Open record'
    },
    quadralzahlen: {
      kicker: 'Journal article · 2025 · Notation systems',
      title: 'Quadralzahlen: A Rotation-Invariant Numeral System That Reduces Upside-Down Misreads in Real-World Displays',
      venue: 'Cognizance Journal of Multidisciplinary Studies', topic: 'Notation systems', status: 'Published',
      abstract: 'Introduces Quadralzahlen (QZ), a rotation-invariant numeral system for identifiers and state codes built to eliminate 180° misreads in rotation-rich contexts such as logistics, healthcare, and handheld UIs. QZ combines self-symmetric glyphs (0, 1, 8, X) with pairwise mappings (6–9, 3–E) plus typography and OCR guidance. In-silico evaluations show fewer upside-down confusions and flatter angle-time profiles than standard numerals, with OCR staying near ceiling at quarter turns.',
      primaryUrl: 'https://doi.org/10.47760/cognizance.2025.v05i10.019', primaryLabel: 'Open DOI', secondaryUrl: '../papers/quadralzahlen.html', secondaryLabel: 'Open record'
    }
  };

  const abstractDialog = document.getElementById('publication-abstract-dialog');
  if (abstractDialog) {
    const abstractKicker = document.getElementById('publication-abstract-kicker');
    const abstractTitle = document.getElementById('publication-abstract-title');
    const abstractVenue = document.getElementById('publication-abstract-venue');
    const abstractTopic = document.getElementById('publication-abstract-topic');
    const abstractStatus = document.getElementById('publication-abstract-status');
    const abstractCopy = document.getElementById('publication-abstract-copy');
    const abstractVersion = document.getElementById('publication-abstract-version');
    const abstractPrimary = document.getElementById('publication-abstract-primary');
    const abstractSecondary = document.getElementById('publication-abstract-secondary');
    const abstractClose = abstractDialog.querySelector('[data-publication-close]');
    let abstractOpener = null;

    const setAbstractLink = (link, href, label) => {
      link.href = href;
      link.textContent = `${label} ↗`;
      link.hidden = false;
    };

    const openPublicationAbstract = (id, opener) => {
      const publication = publicationDetails[id];
      if (!publication) return;
      abstractKicker.textContent = publication.kicker;
      abstractTitle.textContent = publication.title;
      abstractVenue.textContent = publication.venue;
      abstractTopic.textContent = publication.topic;
      abstractStatus.textContent = publication.status;
      abstractCopy.textContent = publication.abstract;
      setAbstractLink(abstractPrimary, publication.primaryUrl, publication.primaryLabel);

      if (publication.secondaryUrl) setAbstractLink(abstractSecondary, publication.secondaryUrl, publication.secondaryLabel);
      else abstractSecondary.hidden = true;

      abstractVersion.replaceChildren();
      if (publication.versionNote && publication.versionUrl) {
        abstractVersion.append(document.createTextNode(`${publication.versionNote} `));
        const versionLink = document.createElement('a');
        versionLink.href = publication.versionUrl;
        versionLink.target = '_blank';
        versionLink.rel = 'noopener';
        versionLink.textContent = `${publication.versionLabel} ↗`;
        abstractVersion.append(versionLink);
        abstractVersion.hidden = false;
      } else {
        abstractVersion.hidden = true;
      }

      abstractOpener = opener;
      if (!abstractDialog.open) abstractDialog.showModal();
      abstractClose.focus();
    };

    document.querySelectorAll('[data-publication-open]').forEach(button => {
      button.addEventListener('click', () => openPublicationAbstract(button.dataset.publicationOpen, button));
    });

    /* The whole entry opens the abstract, not just the title: the summary is
       what most people reach for. Real links and buttons keep their own
       behaviour, and an in-progress text selection is left alone so the row
       stays readable and copyable. Keyboard access is unchanged - the title
       and the Abstract control are still the focusable triggers. */
    const publicationList = document.querySelector('.ex-publication-list');
    if (publicationList) {
      publicationList.addEventListener('click', event => {
        if (event.target.closest('a, button')) return;
        if (String(window.getSelection() || '').length) return;
        const row = event.target.closest('.ex-publication');
        const trigger = row && row.querySelector('[data-publication-open]');
        if (trigger) openPublicationAbstract(trigger.dataset.publicationOpen, trigger);
      });
    }
    abstractClose.addEventListener('click', () => abstractDialog.close());
    abstractDialog.addEventListener('click', event => {
      if (event.target === abstractDialog) abstractDialog.close();
    });
    abstractDialog.addEventListener('close', () => {
      if (abstractOpener && document.contains(abstractOpener)) abstractOpener.focus();
      abstractOpener = null;
    });
  }

  /* ------------------------------------------------------- contact form */
  const form = document.getElementById('executive-contact-form');
  if (!form) return;

  const button = form.querySelector('button[type="submit"]');
  const note = document.getElementById('executive-form-note');
  const fallback = document.getElementById('executive-form-fallback');

  form.addEventListener('submit', event => {
    event.preventDefault();
    const trap = document.getElementById('executive-company');
    if (trap && trap.value) {
      form.reset();
      return;
    }

    const payload = {
      name: document.getElementById('executive-name').value.trim(),
      email: document.getElementById('executive-email').value.trim(),
      subject: document.getElementById('executive-subject').value.trim() || 'professional enquiry from minh.systems',
      message: document.getElementById('executive-message').value.trim(),
      _gotcha: ''
    };

    button.disabled = true;
    button.textContent = t('Sending…');
    fallback.hidden = true;

    fetch('https://formspree.io/f/xpqvglgq', {
      method: 'POST',
      headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
      body: JSON.stringify(payload)
    }).then(response => {
      if (!response.ok) throw new Error('contact request failed');
      form.reset();
      button.textContent = t('Message sent');
      note.textContent = t('Thank you. The message was accepted for delivery.');
    }).catch(() => {
      button.textContent = t('Try again');
      fallback.hidden = false;
      note.textContent = t('Your message is still in the form.');
    }).finally(() => {
      button.disabled = false;
      window.setTimeout(() => {
        if (button.textContent === t('Message sent')) button.textContent = t('Send message');
      }, 5000);
    });
  });
})();
