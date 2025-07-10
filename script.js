document.addEventListener('DOMContentLoaded', () => {
  const languageSwitcher = document.getElementById('language-switcher');

  const setLanguage = (lang) => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

    document.querySelectorAll('[data-translate]').forEach(element => {
      const key = element.getAttribute('data-translate');
      element.innerHTML = translations[lang][key];
    });
  };

  const savedLang = localStorage.getItem('language') || 'en';
  setLanguage(savedLang);
  languageSwitcher.value = savedLang;

  languageSwitcher.addEventListener('change', (event) => {
    const selectedLang = event.target.value;
    localStorage.setItem('language', selectedLang);
    setLanguage(selectedLang);
  });
});
