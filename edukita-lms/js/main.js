/* EduKita-LMS Main JS */
(function(){
  // AOS init
  if (window.AOS) {
    AOS.init({
      once: true,
      duration: 600,
      easing: 'ease-out-cubic'
    });
  }

  // Active nav link highlighter
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.navbar .nav-link').forEach(a => {
    const href = a.getAttribute('href');
    if (href && href.endsWith(path)) {
      a.classList.add('active');
    }
  });

  // Language support
  const dictionary = {
    'nav.home': { id: 'Beranda', en: 'Home' },
    'nav.courses': { id: 'Kursus', en: 'Courses' },
    'nav.about': { id: 'Tentang', en: 'About' },
    'nav.blog': { id: 'Blog', en: 'Blog' },
    'nav.contact': { id: 'Kontak', en: 'Contact' },
    'cta.join': { id: 'Gabung Sekarang', en: 'Join Now' },
    'cta.start': { id: 'Mulai Belajar Sekarang', en: 'Start Learning Now' },
    'hero.title': { id: 'Belajar Kapan Saja, Di Mana Saja', en: 'Learn Anytime, Anywhere' },
    'hero.subtitle': { id: 'Platform pembelajaran daring untuk Indonesia', en: 'Online learning platform for Indonesia' },
    'courses.popular': { id: 'Kursus Populer', en: 'Popular Courses' },
    'testimonials.title': { id: 'Apa Kata Mereka', en: 'What Students Say' },
    'footer.tag': { id: 'Tingkatkan skill dan kariermu bersama EduKita', en: 'Grow your skills and career with EduKita' },
  };

  function setLanguage(lang){
    document.documentElement.setAttribute('lang', lang);
    localStorage.setItem('ek-lang', lang);
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const entry = dictionary[key];
      if (entry && entry[lang]) el.textContent = entry[lang];
    });
  }

  const savedLang = localStorage.getItem('ek-lang') || 'id';
  setLanguage(savedLang);
  document.querySelectorAll('[data-lang-switch]')
    .forEach(btn => btn.addEventListener('click', e => {
      e.preventDefault();
      setLanguage(btn.getAttribute('data-lang-switch'));
    }));

  // AJAX-ready forms
  function handleAjaxForm(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      const btn = form.querySelector('[type="submit"]');
      const initial = btn ? btn.textContent : '';
      if (btn) { btn.disabled = true; btn.textContent = 'Mengirim...'; }
      const data = Object.fromEntries(new FormData(form).entries());
      // Simulate request
      setTimeout(() => {
        if (btn) { btn.disabled = false; btn.textContent = initial || 'Kirim'; }
        form.reset();
        const alert = document.createElement('div');
        alert.className = 'alert alert-success mt-3';
        alert.role = 'alert';
        alert.textContent = 'Terkirim! (demo)';
        form.appendChild(alert);
        setTimeout(()=>alert.remove(), 3000);
        console.log('AJAX form data (demo):', data);
      }, 800);
    });
  }
  document.querySelectorAll('form.ajax-ready').forEach(handleAjaxForm);

  // Course filters
  const filters = document.querySelector('[data-course-filters]');
  if (filters){
    const search = filters.querySelector('input[type="search"]');
    const catSelect = filters.querySelector('[name="category"]');
    const levelSelect = filters.querySelector('[name="level"]');
    const container = document.querySelector('[data-course-list]');
    const cards = container ? Array.from(container.querySelectorAll('[data-course]')) : [];

    function apply(){
      const q = (search?.value || '').toLowerCase();
      const cat = catSelect?.value || '';
      const lvl = levelSelect?.value || '';
      let shown = 0;
      cards.forEach(card => {
        const title = (card.getAttribute('data-title')||'').toLowerCase();
        const c = card.getAttribute('data-category')||'';
        const l = card.getAttribute('data-level')||'';
        const ok = (!q || title.includes(q)) && (!cat || c===cat) && (!lvl || l===lvl);
        card.style.display = ok ? '' : 'none';
        if (ok) shown++;
      });
      const empty = document.querySelector('[data-empty]');
      if (empty) empty.style.display = shown ? 'none' : '';
    }
    ;[search,catSelect,levelSelect].forEach(el=> el && el.addEventListener('input', apply));
    apply();
  }

  // Payment buttons (mock)
  document.querySelectorAll('.pay-btn').forEach(btn=>{
    btn.addEventListener('click', e=>{
      e.preventDefault();
      alert('Demo pembayaran: ' + (btn.getAttribute('data-method')||''));
    });
  });
})();
