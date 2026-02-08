(function() {
  const STORAGE_KEY = 'site-lang';
  let currentLang = localStorage.getItem(STORAGE_KEY) || 'en';
  let translations = {};

  async function loadTranslations(lang) {
    try {
      const res = await fetch(`/i18n/${lang}.json`);
      translations = await res.json();
      applyTranslations();
      updateFlagHighlight();
    } catch (e) {
      console.error('Failed to load translations:', e);
    }
  }

  function getNestedValue(obj, path) {
    return path.split('.').reduce((acc, key) => acc && acc[key], obj);
  }

  function applyTranslations() {
    // Static i18n keys (from JSON files)
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const value = getNestedValue(translations, key);
      if (value) {
        el.textContent = value;
      }
    });

    // Dynamic i18n switch (from data-i18n-en / data-i18n-fr attributes)
    document.querySelectorAll('[data-i18n-switch]').forEach(el => {
      const value = el.getAttribute(`data-i18n-${currentLang}`);
      if (value) {
        el.textContent = value;
      }
    });

    document.documentElement.lang = currentLang;
  }

  function updateFlagHighlight() {
    const enBtn = document.getElementById('lang-en');
    const frBtn = document.getElementById('lang-fr');
    if (enBtn) { enBtn.style.borderColor = currentLang === 'en' ? '#4a90d9' : 'transparent'; enBtn.style.opacity = currentLang === 'en' ? '1' : '0.5'; }
    if (frBtn) { frBtn.style.borderColor = currentLang === 'fr' ? '#4a90d9' : 'transparent'; frBtn.style.opacity = currentLang === 'fr' ? '1' : '0.5'; }
  }

  function switchLang(lang) {
    currentLang = lang;
    localStorage.setItem(STORAGE_KEY, currentLang);
    loadTranslations(currentLang);
  }

  window.switchLang = switchLang;

  document.addEventListener('DOMContentLoaded', () => {
    loadTranslations(currentLang);
  });
})();
