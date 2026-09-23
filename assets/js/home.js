/* minh.systems home: view switch, terminal, filters, notes, command palette */
  // Two complete portfolio views: Executive is the first-visit default, while
  // an explicit choice is remembered on this device.
  const viewLoader = document.getElementById('view-loader');
  const viewLoaderTitle = document.getElementById('view-loader-title');
  const executiveView = document.getElementById('executive-view');
  const operatorRoots = [...document.querySelectorAll('body > .topbar, body > .nav, body > main#home, body > footer')];
  const themeColor = document.querySelector('meta[name="theme-color"]');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function applyPortfolioView(view, persist = true){
    const next = view === 'operator' ? 'operator' : 'executive';
    document.documentElement.dataset.view = next;
    document.body.dataset.screenLabel = next === 'executive' ? 'Executive profile' : 'Direction B — Operator';
    document.querySelectorAll('[data-view-target]').forEach(button=>{
      button.setAttribute('aria-pressed', String(button.dataset.viewTarget === next));
    });
    executiveView.setAttribute('aria-hidden', String(next !== 'executive'));
    executiveView.inert = next !== 'executive';
    operatorRoots.forEach(root=>{ root.inert = next !== 'operator'; });
    if(themeColor) themeColor.setAttribute('content', next === 'executive' ? '#f4f2ed' : '#0b0d0e');
    if(persist){
      try { localStorage.setItem('minh.systems:view', next); } catch(_err) {}
    }
  }

  function finishViewLoader(delay = 0){
    window.setTimeout(()=>{
      viewLoader.classList.add('is-done');
      document.body.style.overflow = '';
    }, delay);
  }

  const initialPortfolioView = document.documentElement.dataset.view === 'operator' ? 'operator' : 'executive';
  viewLoaderTitle.textContent = initialPortfolioView === 'operator' ? 'Loading operator view' : 'Loading professional profile';
  applyPortfolioView(initialPortfolioView, false);
  document.body.style.overflow = 'hidden';
  finishViewLoader(reduceMotion ? 80 : 1150);

  document.querySelectorAll('[data-view-target]').forEach(button=>{
    button.addEventListener('click',()=>{
      const target = button.dataset.viewTarget;
      if(target === document.documentElement.dataset.view) return;
      viewLoaderTitle.textContent = target === 'executive' ? 'Loading professional profile' : 'Loading operator view';
      viewLoader.classList.remove('is-done');
      document.body.style.overflow = 'hidden';
      window.setTimeout(()=>{
        applyPortfolioView(target);
        window.scrollTo({top:0,behavior:'instant'});
        finishViewLoader(reduceMotion ? 80 : 620);
      }, reduceMotion ? 20 : 260);
    });
  });

  const executiveNav = document.querySelector('.ex-nav');
  const executiveMenuButton = document.querySelector('.ex-menu-toggle');
  const executiveScrim = document.querySelector('.ex-scrim');
  if(executiveNav && executiveMenuButton){
    const executiveMobile = window.matchMedia('(max-width: 1080px)');
    const executiveFocusables = () => [...executiveNav.querySelectorAll('a[href], button:not([disabled])')]
      .filter(node => node.offsetParent !== null);

    const setExecutiveNav = open => {
      executiveNav.classList.toggle('is-open', open);
      document.body.classList.toggle('ex-nav-open', open);
      executiveMenuButton.setAttribute('aria-expanded', String(open));
      if(open){ const first = executiveFocusables()[0]; if(first) first.focus(); }
    };
    const closeExecutiveNav = (restoreFocus) => {
      if(!executiveNav.classList.contains('is-open')) return;
      setExecutiveNav(false);
      if(restoreFocus) executiveMenuButton.focus();
    };

    executiveMenuButton.addEventListener('click',()=>setExecutiveNav(!executiveNav.classList.contains('is-open')));
    if(executiveScrim) executiveScrim.addEventListener('click',()=>closeExecutiveNav(false));
    executiveNav.querySelectorAll('.ex-nav-links a, .ex-nav-cta').forEach(link=>{
      link.addEventListener('click',()=>closeExecutiveNav(false));
    });
    document.addEventListener('keydown',(event)=>{
      if(!executiveNav.classList.contains('is-open')) return;
      if(event.key === 'Escape'){ event.preventDefault(); closeExecutiveNav(true); return; }
      if(event.key !== 'Tab') return;
      const items = executiveFocusables();
      if(!items.length) return;
      const first = items[0], last = items[items.length-1];
      if(event.shiftKey && document.activeElement === first){ event.preventDefault(); last.focus(); }
      else if(!event.shiftKey && document.activeElement === last){ event.preventDefault(); first.focus(); }
      else if(!executiveNav.contains(document.activeElement)){ event.preventDefault(); first.focus(); }
    });
    const syncExecutiveBreakpoint = () => { if(!executiveMobile.matches) closeExecutiveNav(false); };
    if(executiveMobile.addEventListener) executiveMobile.addEventListener('change',syncExecutiveBreakpoint);
    else executiveMobile.addListener(syncExecutiveBreakpoint);
  }

  /* Headline metrics are deliberately NOT animated: counting them up from
     zero renders wrong figures (e.g. "€1M+" on the way to "€40M+") for the
     first frames, which is the last thing a credential band should do. */

  const executiveContactForm = document.getElementById('ex-contact-form');
  if(executiveContactForm){
    const executiveContactButton = executiveContactForm.querySelector('button[type="submit"]');
    const executiveContactNote = document.getElementById('ex-form-note');
    const executiveContactFallback = document.getElementById('ex-form-fallback');
    executiveContactForm.addEventListener('submit',(event)=>{
      event.preventDefault();
      const trap = document.getElementById('ex-cf-company');
      if(trap && trap.value){ executiveContactForm.reset(); return; }
      const payload = {
        name:document.getElementById('ex-cf-name').value.trim(),
        email:document.getElementById('ex-cf-email').value.trim(),
        subject:document.getElementById('ex-cf-subject').value.trim() || 'professional enquiry from minh.systems',
        message:document.getElementById('ex-cf-message').value.trim(),
        _gotcha:''
      };
      executiveContactButton.disabled = true;
      executiveContactButton.textContent = 'Sending…';
      executiveContactFallback.hidden = true;
      fetch('https://formspree.io/f/xpqvglgq',{
        method:'POST',headers:{'Accept':'application/json','Content-Type':'application/json'},body:JSON.stringify(payload)
      }).then(response=>{
        if(!response.ok) throw new Error('contact request failed');
        executiveContactForm.reset();
        executiveContactButton.textContent = 'Message sent';
        executiveContactNote.textContent = 'Thank you. The message was accepted for delivery.';
      }).catch(()=>{
        executiveContactButton.textContent = 'Try again';
        executiveContactFallback.hidden = false;
        executiveContactNote.textContent = 'Your message is still in the form.';
      }).finally(()=>{
        executiveContactButton.disabled = false;
        window.setTimeout(()=>{ if(executiveContactButton.textContent === 'Message sent') executiveContactButton.textContent = 'Send message'; },5000);
      });
    });
  }

  // clock
  function tickClock(){
    const d = new Date();
    const pad = n => String(n).padStart(2,'0');
    document.getElementById('clock').textContent =
      `${pad(d.getUTCHours())}:${pad(d.getUTCMinutes())}:${pad(d.getUTCSeconds())} UTC`;
  }
  tickClock(); setInterval(tickClock, 1000);

  function getPaperStats(){
    const rows = [...document.querySelectorAll('.bib-row')];
    if(!rows.length) return PAPER_STATS;
    const byType = type => rows.filter(row => row.classList.contains('is-'+type)).length;
    return {
      total: rows.length,
      journal: byType('journal'),
      preprint: byType('preprint'),
      other: byType('other')
    };
  }
  const PAPER_STATS = {total:12,journal:4,preprint:8,other:0};
  const paperStats = getPaperStats();
  document.querySelectorAll('[data-paper-total]').forEach(el=>{ el.textContent = paperStats.total; });
  document.querySelectorAll('[data-bcount]').forEach(el=>{
    const key = el.dataset.bcount;
    el.textContent = key === 'all' ? paperStats.total : paperStats[key];
  });

  // terminal typing animation
  const lines = [
    {t:'whoami', cls:'cmd', d:300},
    {t:'minh.nguyen → independent researcher, engineer, operator', cls:'', d:120},
    {t:'', cls:'', d:80},
    {t:'systemctl status portfolio.service', cls:'cmd', d:400},
    {t:'<span class="ok">● portfolio.service — active (running)</span>', cls:'', d:60},
    {t:'<span class="dim">     Loaded:</span> /etc/minh/portfolio.service (enabled)', cls:'', d:50},
    {t:'<span class="dim">     Active:</span> <span class="ok">running</span> since 2024-08-01 04:12 UTC', cls:'', d:50},
    {t:'<span class="dim">       Mode:</span> shipping · weekly · multi-stack', cls:'', d:50},
    {t:'', cls:'', d:60},
    {t:'ls --status', cls:'cmd', d:500},
    {t:'<span class="k">research/</span> &nbsp;&nbsp;7 projects · 5 active', cls:'', d:80},
    {t:'<span class="k">apps/</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4 iOS · 3 macOS · 6 shipping', cls:'', d:80},
    {t:'<span class="k">games/</span> &nbsp;&nbsp;&nbsp;&nbsp;3 live · 1 coming', cls:'', d:80},
    {t:`<span class="k">papers/</span> &nbsp;&nbsp;&nbsp;${paperStats.total} records · ${paperStats.journal} journal · ${paperStats.preprint} preprint`, cls:'', d:80},
    {t:'', cls:'', d:80},
    {t:'cat motd', cls:'cmd', d:500},
    {t:'<span class="warn">→</span> building systems, apps, and research that ship.', cls:'', d:80},
    {t:'<span class="warn">→</span> current focus: systems work, cyber-risk research, shipped Apple apps.', cls:'', d:80},
    {t:'<span class="warn">→</span> press P to browse projects, R for research.', cls:'', d:80},
    {t:'', cls:'', d:60},
    {t:'_', cls:'cmd cursor', d:0},
  ];
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const scrollBehavior = reducedMotion ? 'auto' : 'smooth';
  const body = document.getElementById('term-body');
  let i = 0;
  function render(){
    if(i >= lines.length){ return; }
    const l = lines[i];
    const el = document.createElement('span');
    el.className = 'term-line ' + (l.cls||'');
    if(l.cls && l.cls.includes('cursor')){
      el.innerHTML = '<span class="term-cursor"></span>';
    } else {
      el.innerHTML = l.t || '&nbsp;';
    }
    body.appendChild(el);
    i++;
    setTimeout(render, reducedMotion ? 0 : (l.d || 100));
  }
  render();

  const noteData = {
    'flylab-wiring': {
      meta: 'note · 2026-09-21 · 7 min',
      title: 'Did the prediction actually need the wiring?',
      paragraphs: [
        'Circuit simulators on a synapse-resolution connectome have an easy failure mode. You apply a compound, the simulated firing rate moves in the expected direction, and the result reads as if the wiring explained it. But many effects are already produced by much coarser information: the size of the graph, its weight distribution, or simply how much of it is cholinergic or GABAergic.',
        'FlyLab therefore compares every prediction on the MaleCNS cut with ensembles of degraded graphs that preserve progressively more structure, from size and transmitter composition up to degree, the real edge list with shuffled weights, and transmitter labels permuted at matched out-strength. Each rung gets a three-way verdict against a prespecified equivalence margin. "Not distinguishable" is reported as exactly that, never as "the degraded graph reproduces the effect". The ladder itself is validated by planting a recurrent loop of known strength in a synthetic graph and asking the analysis to find it.',
        'The most useful result so far is an uncomfortable one: the verdict depends on the extract. Across nested cuts of 1k to 50k cells, recurrence rather than size predicts whether an effect looks composition-dominated or topology-dependent. So a connectome-dependence claim is only quotable together with the structure of the graph it was measured on. FlyLab evaluates model behaviour, not biological efficacy, and it says so in every claim card it exports.'
      ],
      tags: ['neuroscience','provenance','python'],
      href: 'https://minh.systems/FlyLab/',
      cta: 'open FlyLab bench'
    },
    'ringjahr-rings': {
      meta: 'note · 2026-09-20 · 4 min',
      title: 'The same card never makes the same ring',
      paragraphs: [
        'Ringjahr started from a simple observation: a tree ring is a record of a year, but not an isolated one. Rings narrow as a tree ages, a drought leaves a kind of stress memory, a clearing tilts growth for several seasons, and a fire scar only closes over years. If the puzzle ignored that, it would collapse into a lookup table where each climate card maps to a fixed width.',
        'So the core rule is that the same card never produces the same ring twice. A second drought right after the first comes out noticeably narrower, and each of the six wood types has its own ring behaviour. Players read a sequence rather than matching symbols, which is what makes a 30-to-90-second round feel like reasoning instead of guessing.',
        'The other half of the design is honesty in feedback. Below the target cross-section every ring appears as a bar: the target width is an outline, your width sits inside it, and the bar turns green when they line up. No pixel-counting, no time pressure, and the daily puzzle ties each level to a real documented climate year.'
      ],
      tags: ['game-design','ios','puzzles'],
      href: 'https://minh.systems/Ringjahr/en/',
      cta: 'open Ringjahr site'
    },
    'skeindb-binary': {
      meta: 'note · 2026-05-08 · 6 min',
      title: 'Why SkeinDB ships a single binary',
      paragraphs: [
        'Most systems become harder to judge exactly when they become more serious. The admin panel moves into a separate service, observability becomes a different stack, migrations become a different ritual, and the actual core starts hiding behind operational fog. That may be acceptable for a mature platform with a large team. It is a terrible way to evaluate a research engine.',
        'SkeinDB stays in one binary because I want the planner, the wire adapters, the admin surface, and the evidence about runtime behavior to be inspectable in one sitting. When a reviewer opens the project, I want the interesting parts to be adjacent rather than distributed across invisible glue. The single executable is not a stunt. It is a way of preventing the architecture from outrunning comprehension.',
        'The trade-off is that boundaries have to be disciplined internally instead of outsourced to deployment. If a module grows sloppy, there is no microservice boundary to pretend the shape is cleaner than it is. I like that pressure. It makes every convenience answerable to the question: does this still help someone understand how the system really behaves?'
      ],
      tags: ['databases','operations','rust'],
      href: 'https://minh.systems/SkeinDB/site/',
      cta: 'open SkeinDB site'
    },
    'safedrop-receipts': {
      meta: 'essay · 2026-04-22 · 9 min',
      title: 'Proof-carrying file delivery, explained',
      paragraphs: [
        'A normal transfer log tells you that a system claims a file moved. It rarely tells you what exact object arrived, which path was used, or whether the receiver got the same payload the sender intended. That gap is where support tickets, trust decay, and forensic confusion begin.',
        'The SafeDrop idea is that delivery should emit a receipt richer than a success banner. A useful receipt binds the manifest, content address, transfer path, and acknowledgement event into one object that another person can inspect later without trusting the operator’s memory. The point is not maximal cryptographic theater. The point is to make ordinary self-hosted exchange less ambiguous.',
        'Path-aware reachability matters because a home-hosted system never has one clean network story. Some transfers happen directly, some through router mapping, some through assisted connectivity, some through relay. If the path changes the trust assumptions, the receipt should say so. The interface becomes calmer when the system stops pretending every successful transfer is identical.'
      ],
      tags: ['cryptography','networking','trust'],
      href: 'https://minh.systems/SafeDrop/',
      cta: 'open SafeDrop site'
    },
    'iot-ids-note': {
      meta: 'note · 2026-02-14 · 12 min',
      title: 'Federated IDS on constrained IoT nodes',
      paragraphs: [
        'Federated intrusion detection sounds elegant until you place it on cheap hardware with inconsistent connectivity and batteries that matter. At that point every modeling decision becomes an operational decision too. You are no longer asking only whether the detector improves. You are asking whether participation itself becomes a burden on the edge node.',
        'Compression helped, but not in the naive way I expected. Smaller updates are useful, yet the more important win was reducing update volatility so weaker participants could stay in the cohort without falling permanently behind. Stability turned out to be as important as byte count. A node that can contribute modestly and regularly is more valuable than one that spikes and disappears.',
        'If I rewrote the study today, I would treat drift reporting as a first-class artifact rather than a side measurement. In adversarial environments, the reason a client diverges matters almost as much as the divergence itself. Future versions should expose that story earlier so the operator can tell the difference between benign novelty, broken instrumentation, and deliberate pressure.'
      ],
      tags: ['federated-learning','iot','security'],
      href: 'https://doi.org/10.36227/techrxiv.176403418.87468767/v1',
      cta: 'open preprint'
    }
  };

  // command palette
  const cmdItems = [
    {label:'~/home', hint:'top', go:'#home'},
    {label:'~/research', hint:'full bibliography', go:'research.html'},
    {label:'~/projects', hint:'20 builds', go:'#projects'},
    {label:'~/log', hint:'writing & notes', go:'#log'},
    {label:'~/now', hint:'this week', go:'#now'},
    {label:'~/toolkit', hint:'stack', go:'#skills'},
    {label:'~/record', hint:'education', go:'#education'},
    {label:'~/contact', hint:'channels', go:'#contact'},
    {label:'open: SkeinDB deep dive', hint:'database engine', go:'showcase/operator/skeindb.html'},
    {label:'open: Wardex deep dive', hint:'xdr / siem', go:'showcase/operator/wardex.html'},
    {label:'open: NexusFS deep dive', hint:'verifiable storage', go:'showcase/operator/nexusfs.html'},
    {label:'open: FlyLab browser bench', hint:'connectome pharmacology ↗', go:'https://minh.systems/FlyLab/', ext:true},
    {label:'open: Ringjahr', hint:'tree-ring puzzle ↗', go:'https://minh.systems/Ringjahr/en/', ext:true},
    {label:'github: pinkysworld', hint:'external ↗', go:'https://github.com/pinkysworld', ext:true},
    {label:'scholar: publications', hint:'external ↗', go:'https://scholar.google.com/citations?user=6HheUI4AAAAJ', ext:true},
    {label:'orcid: 0000-0001-6834-4422', hint:'external ↗', go:'https://orcid.org/0000-0001-6834-4422', ext:true},
    {label:'linkedin: michelnguyengermany', hint:'external ↗', go:'https://www.linkedin.com/in/michelnguyengermany/', ext:true},
    {label:'spotify: minh ng', hint:'external ↗', go:'https://open.spotify.com/artist/6kO0YIwxOV1NvHwDRkq9F0', ext:true},
    {label:'open: contact form', hint:'send a message', go:'executive/contact.html'},
  ];
  const cmdk = document.getElementById('cmdk');
  const cmdkInput = document.getElementById('cmdk-input');
  const cmdkList = document.getElementById('cmdk-list');
  let cmdkSel = 0, cmdkFiltered = cmdItems, cmdkOpener = null;
  function cmdkRender(){
    cmdkList.innerHTML = cmdkFiltered.map((it,idx)=>
      `<button type="button" class="cmdk-item${idx===cmdkSel?' sel':''}" data-idx="${idx}"><span class="lbl">${it.label}</span><span class="hint">${it.hint}</span></button>`
    ).join('') || '<div class="cmdk-empty">no match — try a section name</div>';
    cmdkList.querySelectorAll('.cmdk-item').forEach(btn=>{
      btn.addEventListener('click',()=>cmdkGo(cmdkFiltered[+btn.dataset.idx]));
      btn.addEventListener('mousemove',()=>{cmdkSel=+btn.dataset.idx;markSel();});
    });
  }
  function markSel(){
    cmdkList.querySelectorAll('.cmdk-item').forEach((b,idx)=>b.classList.toggle('sel',idx===cmdkSel));
  }
  function cmdkFilter(){
    const q = cmdkInput.value.trim().toLowerCase();
    cmdkFiltered = q ? cmdItems.filter(it=>(it.label+' '+it.hint).toLowerCase().includes(q)) : cmdItems;
    cmdkSel = 0;
    cmdkRender();
  }
  function openCmdk(){
    cmdkOpener = document.activeElement;
    cmdk.classList.add('open');
    cmdk.setAttribute('aria-hidden','false');
    document.body.style.overflow = 'hidden';
    cmdkInput.value = '';
    cmdkFilter();
    cmdkInput.focus();
  }
  function closeCmdk(){
    if(!cmdk.classList.contains('open')) return;
    cmdk.classList.remove('open');
    cmdk.setAttribute('aria-hidden','true');
    document.body.style.overflow = '';
    if(cmdkOpener && document.contains(cmdkOpener)){ cmdkOpener.focus(); }
    cmdkOpener = null;
  }
  function cmdkGo(item){
    if(!item) return;
    closeCmdk();
    if(item.ext){ window.open(item.go, '_blank', 'noopener'); }
    else if(item.go.startsWith('#')){ const el=document.querySelector(item.go); if(el) el.scrollIntoView({behavior:scrollBehavior}); }
    else { window.location.href = item.go; }
  }
  cmdkInput.addEventListener('input', cmdkFilter);
  cmdkInput.addEventListener('keydown',(e)=>{
    if(e.key === 'ArrowDown'){ e.preventDefault(); cmdkSel = Math.min(cmdkSel+1, cmdkFiltered.length-1); markSel(); }
    if(e.key === 'ArrowUp'){ e.preventDefault(); cmdkSel = Math.max(cmdkSel-1, 0); markSel(); }
    if(e.key === 'Enter'){ e.preventDefault(); cmdkGo(cmdkFiltered[cmdkSel]); }
  });
  document.querySelectorAll('[data-cmdk-close]').forEach(el=>el.addEventListener('click', closeCmdk));
  document.querySelector('.nav-cmd').addEventListener('click', openCmdk);

  // keyboard nav
  const jump = id => document.getElementById(id).scrollIntoView({behavior:scrollBehavior});
  document.addEventListener('keydown',(e)=>{
    if((e.metaKey || e.ctrlKey) && (e.key === 'k' || e.key === 'K')){
      e.preventDefault();
      cmdk.classList.contains('open') ? closeCmdk() : openCmdk();
      return;
    }
    if(e.key === 'Escape'){ closeCmdk(); closeNote(); return; }
    if(e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
    if(e.metaKey || e.ctrlKey || e.altKey) return;
    if(e.key === '/'){ e.preventDefault(); openCmdk(); }
    if(e.key === 'p' || e.key === 'P'){ jump('projects'); }
    if(e.key === 'r' || e.key === 'R'){ window.location.href = 'research.html'; }
    if(e.key === 'n' || e.key === 'N'){ jump('now'); }
    if(e.key === 'h' || e.key === 'H'){ jump('home'); }
  });

  // contact form
  // Formspree endpoint — delivers to the address on the Formspree account, which
  // is never exposed in this page. If delivery fails, the copy panel is surfaced
  // with the message intact so a submission is never silently lost.
  const CONTACT_ENDPOINT = 'https://formspree.io/f/xpqvglgq';

  const ctForm = document.getElementById('contact-form');
  const ctSend = ctForm.querySelector('.send');
  const ctFallback = document.getElementById('cf-fallback');
  let ctLastMessage = '';

  ctForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const name = document.getElementById('cf-name').value.trim();
    const email = document.getElementById('cf-email').value.trim();
    const sub = document.getElementById('cf-sub').value.trim() || 'hello from minh.systems';
    const msg = document.getElementById('cf-msg').value.trim();
    const bodyText = `${msg}\n\n—\nfrom: ${name}\nreply-to: ${email}`;
    const trap = document.getElementById('cf-hp');

    // A filled honeypot means a bot. Show the normal success state and drop it —
    // telling the script it was rejected only teaches it to try again.
    if(trap && trap.value){
      ctSend.textContent = '› sent ✓';
      ctForm.reset();
      setTimeout(()=>{ ctSend.textContent = '› send message'; }, 5000);
      return;
    }
    ctLastMessage = `subject: ${sub}\n\n${bodyText}`;

    ctSend.disabled = true;
    ctSend.textContent = '› sending…';
    fetch(CONTACT_ENDPOINT,{
      method:'POST',
      headers:{'Accept':'application/json','Content-Type':'application/json'},
      body:JSON.stringify({name:name,email:email,subject:sub,message:msg,_gotcha:''})
    }).then(r=>{
      ctSend.disabled = false;
      if(r.ok){
        ctSend.textContent = '› sent ✓';
        ctForm.reset();
        if(ctFallback) ctFallback.hidden = true;
      }else{
        ctSend.textContent = '› send failed — copy below';
        showFallback();
      }
      setTimeout(()=>{ ctSend.textContent = '› send message'; }, 5000);
    }).catch(()=>{
      ctSend.disabled = false;
      ctSend.textContent = '› send failed — copy below';
      showFallback();
      setTimeout(()=>{ ctSend.textContent = '› send message'; }, 5000);
    });
  });

  function showFallback(){
    if(!ctFallback) return;
    ctFallback.hidden = false;
  }

  // Reuses the page's existing copyText(text, btn) helper defined below.
  document.querySelectorAll('.ct-copy').forEach(btn=>{
    btn.addEventListener('click',()=>{
      copyText(ctLastMessage, btn);
    });
  });

  // project filter
  document.querySelectorAll('[data-pfilter]').forEach(btn=>{
    btn.addEventListener('click',()=>{
      document.querySelectorAll('[data-pfilter]').forEach(b=>b.classList.remove('on'));
      btn.classList.add('on');
      const f = btn.dataset.pfilter;
      document.querySelectorAll('.ptr').forEach(r=>{
        r.hidden = f!=='all' && r.dataset.kind !== f;
      });
    });
  });
  // project preview: a screenshot follows the pointer on hover-capable screens
  const ptrPreview = document.createElement('figure');
  ptrPreview.className = 'ptr-preview'; ptrPreview.setAttribute('aria-hidden','true');
  ptrPreview.innerHTML = '<img alt="" decoding="async"><figcaption></figcaption>';
  document.body.appendChild(ptrPreview);
  const ptrPreviewImg = ptrPreview.querySelector('img'), ptrPreviewCap = ptrPreview.querySelector('figcaption');
  const canHover = window.matchMedia('(hover:hover) and (min-width:901px)');
  function placePreview(e){
    const w = ptrPreview.offsetWidth, h = ptrPreview.offsetHeight, pad = 18;
    let x = e.clientX + pad, y = e.clientY + pad;
    if (x + w > innerWidth - 8) x = e.clientX - w - pad;
    if (y + h > innerHeight - 8) y = e.clientY - h - pad;
    ptrPreview.style.left = x + 'px'; ptrPreview.style.top = y + 'px';
  }
  document.querySelectorAll('.ptr[data-thumb]').forEach(r=>{
    r.addEventListener('mouseenter', e=>{
      if (!canHover.matches) return;
      ptrPreviewImg.src = r.dataset.thumb;
      ptrPreviewCap.textContent = r.querySelector('.name strong').textContent + ' · live site';
      placePreview(e); ptrPreview.classList.add('on');
    });
    r.addEventListener('mousemove', e=>{ if (ptrPreview.classList.contains('on')) placePreview(e); });
    r.addEventListener('mouseleave', ()=> ptrPreview.classList.remove('on'));
  });
  // warm the cache once the project list scrolls near the viewport
  const projTable = document.querySelector('.proj-table');
  if (projTable && 'IntersectionObserver' in window) {
    const io = new IntersectionObserver(es=>{
      if (!es.some(x=>x.isIntersecting) || !canHover.matches) return;
      document.querySelectorAll('.ptr[data-thumb]').forEach(r=>{ new Image().src = r.dataset.thumb; });
      io.disconnect();
    }, {rootMargin:'400px'});
    io.observe(projTable);
  }
  // Featured paper modal data. The full bibliography and paper schema live on research.html.
  const bibAbstracts = {
    'mortality-reference-class': {
      p:'Defines reference-class failure in mortality prediction: an end-of-life case can sit outside the development population’s transportable conditional mechanism while the model still returns a sharp individual risk. In a synthetic concept-shift study, logistic regression, random forest, gradient boosting, and a neural network remain confident on novel terminal cases, but Brier error plateaus near 0.215, far above the novel regime’s 0.092 aleatoric floor.',
      href:'https://doi.org/10.21203/rs.3.rs-10058406/v1', cta:'open preprint ↗'
    },
    'cku': {
      p:'The paper argues that software creates a residual class of uncertainty that does not collapse neatly into ordinary probabilistic risk. Because many security, safety, and compliance questions are undecidable in the general case, even perfect code visibility and abundant classical computation cannot eliminate all uncertainty. The article names that remainder <strong>computational Knightian uncertainty (CKU)</strong>, then connects it to structural opacity in codebases and practical downstream effects.',
      href:'https://doi.org/10.64701/ijrc/345/9117', cta:'open DOI ↗'
    },
    'shieldlink': {
      p:'Chiplet die-to-die links such as UCIe/CXL handle reliability with link-layer retries while confidentiality lives in higher-layer authenticated encryption. ShieldLink enforces one deliverability invariant: the receive window only advances on successful AEAD verification of exactly the bits that will be delivered.',
      href:'https://doi.org/10.64701/ijrc/345/9121', cta:'open journal article DOI ↗'
    }
  };
  const paperRecords = {
    'mortality-reference-class': {
      title:'Reference-Class Failure in Mortality Prediction: A Synthetic Study of Irreducible Uncertainty in End-of-Life Prognostic Models',
      year:'2026', venue:'Research Square', type:'Preprint', status:'Version 1', topic:'clinical AI',
      doi:'10.21203/rs.3.rs-10058406/v1', url:'https://doi.org/10.21203/rs.3.rs-10058406/v1', key:'nguyen2026referenceclass'
    },
    'cku': {
      title:'Computational Knightian Uncertainty: Undecidability and the Limits of Cyber Risk Quantification in Software-Intensive Firms',
      year:'2026', venue:'International Journal of Research in Computing', type:'Journal article', status:'Published', topic:'cyber risk',
      doi:'10.64701/ijrc/345/9117', url:'https://doi.org/10.64701/ijrc/345/9117', key:'nguyen2026computational'
    },
    'shieldlink': {
      title:'ShieldLink: Retry-Aware Authenticated Encryption for Secure and Reliable Chiplet Interconnects',
      year:'2026', venue:'International Journal of Research in Computing', type:'Journal article', status:'Published', topic:'systems security',
      doi:'10.64701/ijrc/345/9121', url:'https://doi.org/10.64701/ijrc/345/9121', key:'nguyen2026shieldlink'
    }
  };
  function paperBibtex(id){
    const rec = paperRecords[id];
    if(!rec) return '';
    const entryType = rec.type === 'Preprint' ? 'misc' : 'article';
    const fields = [
      `  author = {Nguyen, Michel}`,
      `  title = {${rec.title}}`,
      `  year = {${rec.year}}`,
      rec.type === 'Preprint' ? `  howpublished = {${rec.venue}}` : `  journal = {${rec.venue}}`,
      rec.doi ? `  doi = {${rec.doi}}` : '',
      `  url = {${rec.url}}`
    ].filter(Boolean).join(',\n');
    return `@${entryType}{${rec.key},\n${fields}\n}`;
  }

  // active nav tab via scroll
  const tabs = document.querySelectorAll('.nav-tab');
  const sections = ['home','papers','projects','log','now','contact'];
  function syncTabs(){
    const y = window.scrollY + 200;
    let active = sections[0];
    for(const id of sections){
      const el = document.getElementById(id);
      if(el && el.offsetTop <= y) active = id;
    }
    tabs.forEach(t=>{
      t.classList.toggle('active', t.getAttribute('href') === '#'+active);
    });
  }
  window.addEventListener('scroll', syncTabs, {passive:true});
  syncTabs();

  const noteModal = document.getElementById('note-modal');
  const noteMeta = document.getElementById('note-meta');
  const noteTitle = document.getElementById('note-title');
  const noteCopy = document.getElementById('note-copy');
  const noteTags = document.getElementById('note-tags');
  const noteLinks = document.querySelector('.note-links');
  const noteLink = document.getElementById('note-link');
  let noteOpener = null;
  function resetNoteLinks(){
    noteLinks.querySelectorAll('.paper-action').forEach(el=>el.remove());
  }
  function openNote(id){
    const note = noteData[id];
    if(!note) return;
    resetNoteLinks();
    noteMeta.textContent = note.meta;
    noteTitle.textContent = note.title;
    noteCopy.innerHTML = note.paragraphs.map(p => `<p>${p}</p>`).join('');
    noteTags.innerHTML = note.tags.map(t => `<span>${t}</span>`).join('');
    noteLink.href = note.href;
    noteLink.innerHTML = `<span class="ico">↗</span> ${note.cta}`;
    noteOpener = document.activeElement;
    noteModal.classList.add('open');
    noteModal.setAttribute('aria-hidden','false');
    document.body.style.overflow = 'hidden';
    noteModal.querySelector('.note-close').focus();
  }
  async function copyText(text, btn){
    const old = btn.textContent;
    btn.textContent = 'copied';
    try{
      if(navigator.clipboard && window.isSecureContext){
        await navigator.clipboard.writeText(text);
      }else{
        const area = document.createElement('textarea');
        area.value = text;
        area.setAttribute('readonly','');
        area.style.position = 'fixed';
        area.style.left = '-9999px';
        document.body.appendChild(area);
        area.select();
        document.execCommand('copy');
        area.remove();
      }
    }catch(_err){
      window.prompt('Copy this text:', text);
      btn.textContent = 'ready to copy';
    }
    setTimeout(()=>{ btn.textContent = old; }, 1400);
  }
  function openPaperModal(id){
    const rec = paperRecords[id];
    const abs = bibAbstracts[id];
    if(!rec || !abs) return;
    resetNoteLinks();
    noteMeta.textContent = `${rec.type} · ${rec.year} · ${rec.status}`;
    noteTitle.textContent = rec.title;
    noteCopy.innerHTML = `
      <dl class="paper-kv">
        <dt>venue</dt><dd>${rec.venue}</dd>
        <dt>topic</dt><dd>${rec.topic}</dd>
        <dt>doi</dt><dd>${rec.doi ? `<a href="https://doi.org/${rec.doi}" target="_blank" rel="noopener">${rec.doi}</a>` : 'pending / not assigned'}</dd>
        <dt>status</dt><dd>${rec.status}</dd>
      </dl>
      <p>${abs.p}</p>
    `;
    noteTags.innerHTML = [rec.type, rec.topic, rec.status].map(t => `<span>${t}</span>`).join('');
    noteLink.href = rec.url;
    noteLink.innerHTML = `<span class="ico">↗</span> ${abs.cta.replace(' ↗','')}`;
    const doiBtn = document.createElement('button');
    doiBtn.type = 'button';
    doiBtn.className = 'btn paper-action';
    doiBtn.textContent = 'copy DOI';
    doiBtn.disabled = !rec.doi;
    doiBtn.addEventListener('click',()=>copyText(rec.doi, doiBtn));
    const bibBtn = document.createElement('button');
    bibBtn.type = 'button';
    bibBtn.className = 'btn paper-action';
    bibBtn.textContent = 'copy BibTeX';
    bibBtn.addEventListener('click',()=>copyText(paperBibtex(id), bibBtn));
    noteLinks.append(doiBtn, bibBtn);
    noteOpener = document.activeElement;
    noteModal.classList.add('open');
    noteModal.setAttribute('aria-hidden','false');
    document.body.style.overflow = 'hidden';
    noteModal.querySelector('.note-close').focus();
  }
  function closeNote(){
    if(!noteModal.classList.contains('open')) return;
    noteModal.classList.remove('open');
    noteModal.setAttribute('aria-hidden','true');
    document.body.style.overflow = '';
    if(noteOpener && document.contains(noteOpener)){ noteOpener.focus(); }
    noteOpener = null;
  }
  document.querySelectorAll('[data-note]').forEach(el=>{
    el.addEventListener('click',()=>openNote(el.dataset.note));
  });
  document.querySelectorAll('[data-paper-open]').forEach(el=>{
    el.addEventListener('click',()=>openPaperModal(el.dataset.paperOpen));
  });
  document.querySelectorAll('.bib-row[data-abs]').forEach(row=>{
    row.addEventListener('click',(e)=>{
      if(e.target.closest('a')) return;
      openPaperModal(row.dataset.abs);
    });
    row.addEventListener('keydown',(e)=>{
      if(e.key === 'Enter' || e.key === ' '){
        e.preventDefault();
        openPaperModal(row.dataset.abs);
      }
    });
  });
  document.querySelectorAll('.bib-row a').forEach(link=>{
    link.addEventListener('click',e=>e.stopPropagation());
  });
  document.querySelectorAll('[data-note-close]').forEach(el=>{
    el.addEventListener('click',closeNote);
  });

  // reveal
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});
  },{threshold:0.1});
  document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
