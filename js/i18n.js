// i18n Engine — Client-side JSON-based translations
// Supports: en, pt, zh

(function () {
  'use strict';

  const SUPPORTED = ['en', 'pt', 'zh'];
  const DEFAULT = 'en';
  const STORAGE_KEY = 'lang';

  let currentLang = DEFAULT;
  let translations = {};

  // Resolve nested key like "hero.metrics.years" from object
  function resolve(obj, key) {
    return key.split('.').reduce((o, k) => (o && o[k] !== undefined ? o[k] : null), obj);
  }

  // Detect language: localStorage > navigator > default
  function detectLanguage() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored && SUPPORTED.includes(stored)) return stored;

    const nav = (navigator.language || '').toLowerCase();
    if (nav.startsWith('pt')) return 'pt';
    if (nav.startsWith('zh')) return 'zh';
    return DEFAULT;
  }

  // Fetch translation JSON
  async function loadTranslations(lang) {
    try {
      const base = document.querySelector('script[src*="i18n.js"]')?.src.replace(/js\/i18n\.js.*/, '') || '';
      const res = await fetch(base + 'i18n/' + lang + '.json');
      if (!res.ok) throw new Error(res.status);
      return await res.json();
    } catch (e) {
      console.warn('[i18n] Failed to load ' + lang + ', falling back to en');
      if (lang !== DEFAULT) return loadTranslations(DEFAULT);
      return {};
    }
  }

  // Apply translations to DOM
  function applyTranslations(data) {
    // data-i18n → textContent
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var val = resolve(data, el.getAttribute('data-i18n'));
      if (val !== null) el.textContent = val;
    });

    // data-i18n-html → innerHTML (for items with <strong> tags)
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var val = resolve(data, el.getAttribute('data-i18n-html'));
      if (val !== null) el.innerHTML = val;
    });

    // data-i18n-placeholder → placeholder attribute
    document.querySelectorAll('[data-i18n-ph]').forEach(function (el) {
      var val = resolve(data, el.getAttribute('data-i18n-ph'));
      if (val !== null) el.placeholder = val;
    });

    // Update meta tags
    var metaTitle = resolve(data, 'meta.title');
    if (metaTitle) {
      document.title = metaTitle;
      var ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) ogTitle.setAttribute('content', metaTitle);
    }

    var metaDesc = resolve(data, 'meta.description');
    if (metaDesc) {
      var desc = document.querySelector('meta[name="description"]');
      if (desc) desc.setAttribute('content', metaDesc);
      var ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) ogDesc.setAttribute('content', metaDesc);
    }

    // Update html lang
    document.documentElement.lang = currentLang;

    // Update JSON-LD
    var jsonLd = document.querySelector('script[type="application/ld+json"]');
    if (jsonLd) {
      try {
        var ld = JSON.parse(jsonLd.textContent);
        ld.jobTitle = resolve(data, 'experience.razac.title') || ld.jobTitle;
        jsonLd.textContent = JSON.stringify(ld, null, 2);
      } catch (e) { /* ignore */ }
    }

    // Update language switcher active state
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === currentLang);
    });
  }

  // Build dynamic list items for experience sections
  function applyListItems(data) {
    document.querySelectorAll('[data-i18n-list]').forEach(function (ul) {
      var key = ul.getAttribute('data-i18n-list');
      var items = resolve(data, key);
      if (!Array.isArray(items)) return;

      ul.innerHTML = '';
      items.forEach(function (text) {
        var li = document.createElement('li');
        li.innerHTML = '<i class="fas fa-check"></i> <span>' + text + '</span>';
        ul.appendChild(li);
      });
    });
  }

  // Public: switch language
  async function switchLanguage(lang) {
    if (!SUPPORTED.includes(lang)) lang = DEFAULT;
    currentLang = lang;
    localStorage.setItem(STORAGE_KEY, lang);

    translations = await loadTranslations(lang);
    applyTranslations(translations);
    applyListItems(translations);

    // Notify main.js to restart typing effect with new roles
    var roles = resolve(translations, 'hero.roles');
    if (roles && window.__restartTyping) {
      window.__restartTyping(roles);
    }

    // Store form messages for contact form
    window.__i18nForm = resolve(translations, 'contact.form') || {};
  }

  // Get current translations (for use by other scripts)
  function getTranslations() {
    return translations;
  }

  // Initialize on DOM ready
  function init() {
    var lang = detectLanguage();
    switchLanguage(lang);
  }

  // Expose API
  window.i18n = {
    switchLanguage: switchLanguage,
    getTranslations: getTranslations,
    getCurrentLang: function () { return currentLang; }
  };

  // Auto-init
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
