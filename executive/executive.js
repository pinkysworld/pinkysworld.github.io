(() => {
  try { localStorage.setItem('minh.systems:view', 'executive'); } catch (_error) {}

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const loader = document.getElementById('ex-page-loader');
  if (loader) {
    document.body.classList.add('is-loading');
    window.setTimeout(() => {
      loader.classList.add('is-done');
      document.body.classList.remove('is-loading');
    }, reduceMotion ? 60 : 650);
  }

  const nav = document.querySelector('.ex-nav');
  const menuButton = document.querySelector('.ex-menu-toggle');
  if (nav && menuButton) {
    menuButton.addEventListener('click', () => {
      const open = nav.classList.toggle('is-open');
      menuButton.setAttribute('aria-expanded', String(open));
    });
    nav.querySelectorAll('.ex-nav-links a').forEach(link => link.addEventListener('click', () => {
      nav.classList.remove('is-open');
      menuButton.setAttribute('aria-expanded', 'false');
    }));
  }

  document.querySelectorAll('[data-operator-view]').forEach(link => {
    link.addEventListener('click', () => {
      try { localStorage.setItem('minh.systems:view', 'operator'); } catch (_error) {}
    });
  });

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
    button.textContent = 'Sending…';
    fallback.hidden = true;

    fetch('https://formspree.io/f/xpqvglgq', {
      method: 'POST',
      headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
      body: JSON.stringify(payload)
    }).then(response => {
      if (!response.ok) throw new Error('contact request failed');
      form.reset();
      button.textContent = 'Message sent';
      note.textContent = 'Thank you. The message was accepted for delivery.';
    }).catch(() => {
      button.textContent = 'Try again';
      fallback.hidden = false;
      note.textContent = 'Your message is still in the form.';
    }).finally(() => {
      button.disabled = false;
      window.setTimeout(() => {
        if (button.textContent === 'Message sent') button.textContent = 'Send message';
      }, 5000);
    });
  });
})();
