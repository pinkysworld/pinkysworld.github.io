/* Offers the other language when the visitor's browser asks for it.
 *
 * Language lives in the URL (see tools/README.md), which is what lets search
 * engines index the German pages — but it also means a German visitor landing
 * on an English URL gets English with no sign the German version exists. This
 * points it out once and then stays quiet.
 *
 * Deliberately a hint and not a redirect: auto-redirecting on Accept-Language
 * hides one language from crawlers and traps anyone who wants the other one.
 *
 * The page's own <link rel="alternate" hreflang> tags are the source of truth,
 * so this file needs no configuration and does nothing on pages without a
 * translation.
 */
(() => {
  'use strict';

  const DISMISSED = 'minh.systems:lang-hint-dismissed';

  const COPY = {
    de: {
      message: 'Diese Seite gibt es auch auf Deutsch.',
      action: 'Zur deutschen Fassung',
      close: 'Hinweis schließen',
      label: 'Sprachhinweis',
    },
    en: {
      message: 'This page is also available in English.',
      action: 'Read it in English',
      close: 'Dismiss',
      label: 'Language notice',
    },
  };

  try {
    if (localStorage.getItem(DISMISSED) === '1') return;
  } catch (_err) { /* private mode — show it, just do not remember */ }

  const pageLang = (document.documentElement.lang || 'en').slice(0, 2).toLowerCase();

  const alternates = new Map();
  document.querySelectorAll('link[rel="alternate"][hreflang]').forEach(link => {
    const lang = link.getAttribute('hreflang').slice(0, 2).toLowerCase();
    if (lang !== 'x-' && !alternates.has(lang)) alternates.set(lang, link.href);
  });
  if (alternates.size < 2) return;

  // First browser preference we actually publish a page for.
  const preferred = (navigator.languages && navigator.languages.length
    ? navigator.languages
    : [navigator.language || 'en'])
    .map(tag => tag.slice(0, 2).toLowerCase())
    .find(lang => alternates.has(lang));

  if (!preferred || preferred === pageLang) return;

  const target = alternates.get(preferred);
  if (!target || target === location.href) return;

  const copy = COPY[preferred] || COPY.en;

  const style = document.createElement('style');
  style.textContent = `
    /* Centred along the bottom edge: the executive layouts keep a fixed sidebar
       on the left and a view pill on the right, and this clears both. */
    .lang-hint{
      position:fixed;left:50%;bottom:18px;z-index:200;max-width:min(380px,calc(100vw - 32px));
      display:flex;align-items:flex-start;gap:12px;padding:13px 14px;
      border:1px solid #2a3236;border-radius:10px;background:#111416;color:#dde3e1;
      font:400 13px/1.5 system-ui,-apple-system,'Segoe UI',sans-serif;
      box-shadow:0 10px 30px rgba(0,0,0,.28);
      opacity:0;transform:translate(-50%,8px);transition:opacity .28s ease,transform .28s ease;
    }
    .lang-hint.is-in{opacity:1;transform:translate(-50%,0)}
    .lang-hint p{margin:0}
    .lang-hint a{display:inline-block;margin-top:6px;color:#7fd49f;text-decoration:underline;
      text-underline-offset:3px;font-weight:600}
    .lang-hint a:hover{color:#9ce0b6}
    .lang-hint button{
      flex:0 0 auto;appearance:none;border:0;background:transparent;color:#a3aeaa;
      font:inherit;font-size:16px;line-height:1;padding:2px 4px;cursor:pointer;border-radius:4px;
    }
    .lang-hint button:hover{color:#dde3e1}
    .lang-hint :focus-visible{outline:2px solid #7fd49f;outline-offset:2px}
    @media (prefers-reduced-motion:reduce){
      .lang-hint{transition:none;opacity:1;transform:translate(-50%,0)}
    }
    @media print{.lang-hint{display:none}}
  `;

  const hint = document.createElement('aside');
  hint.className = 'lang-hint';
  hint.setAttribute('aria-label', copy.label);
  hint.lang = preferred;

  const body = document.createElement('div');
  const message = document.createElement('p');
  message.textContent = copy.message;
  const action = document.createElement('a');
  action.href = target;
  action.hreflang = preferred;
  action.textContent = copy.action;
  body.append(message, action);

  const close = document.createElement('button');
  close.type = 'button';
  close.setAttribute('aria-label', copy.close);
  close.textContent = '×';

  const dismiss = () => {
    hint.remove();
    try { localStorage.setItem(DISMISSED, '1'); } catch (_err) {}
  };
  close.addEventListener('click', dismiss);
  // Following the link is also an answer; do not ask again.
  action.addEventListener('click', () => {
    try { localStorage.setItem(DISMISSED, '1'); } catch (_err) {}
  });

  hint.append(body, close);

  const show = () => {
    document.head.appendChild(style);
    document.body.appendChild(hint);
    requestAnimationFrame(() => hint.classList.add('is-in'));
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', show);
  } else {
    show();
  }
})();
