// EduKita-LMS main JS
(function(){
  const $ = (sel, root=document) => root.querySelector(sel);
  const $$ = (sel, root=document) => Array.from(root.querySelectorAll(sel));

  document.addEventListener('DOMContentLoaded', () => {
    // Dynamic title prefix
    if (!document.title.startsWith('EduKita-LMS')) {
      document.title = 'EduKita-LMS | ' + document.title;
    }

    // Language switch (basic demo)
    const langSwitch = $('#langSwitch');
    const translations = {
      id: {
        nav_home: 'Beranda',
        nav_courses: 'Kursus',
        nav_blog: 'Blog',
        nav_about: 'Tentang',
        nav_contact: 'Kontak',
        hero_title: 'Belajar Kapan Saja, Di Mana Saja',
        hero_sub: 'Platform LMS modern untuk pelajar dan profesional di Indonesia.',
        hero_cta: 'Mulai Belajar Sekarang',
      },
      en: {
        nav_home: 'Home',
        nav_courses: 'Courses',
        nav_blog: 'Blog',
        nav_about: 'About',
        nav_contact: 'Contact',
        hero_title: 'Learn Anytime, Anywhere',
        hero_sub: 'A modern LMS platform for learners and professionals in Indonesia.',
        hero_cta: 'Start Learning Now',
      }
    };

    function applyTranslations(lang='id') {
      $$('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
          el.textContent = translations[lang][key];
        }
      });
    }

    if (langSwitch) {
      langSwitch.addEventListener('change', (e) => {
        const lang = e.target.value;
        document.documentElement.setAttribute('lang', lang);
        applyTranslations(lang);
      });
      applyTranslations(langSwitch.value || 'id');
    }

    // Course filters
    const filterCategory = $('#filterCategory');
    const filterLevel = $('#filterLevel');
    function filterCourses() {
      const category = filterCategory ? filterCategory.value : 'all';
      const level = filterLevel ? filterLevel.value : 'all';
      $$('.course-card').forEach(card => {
        const c = card.getAttribute('data-category');
        const l = card.getAttribute('data-level');
        const show = (category === 'all' || category === c) && (level === 'all' || level === l);
        card.parentElement.classList.toggle('d-none', !show);
      });
    }
    if (filterCategory && filterLevel) {
      filterCategory.addEventListener('change', filterCourses);
      filterLevel.addEventListener('change', filterCourses);
    }

    // AJAX-ready forms (demo)
    $$('form[data-ajax="true"]').forEach(form => {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = form.querySelector('[type=submit]');
        const original = btn ? btn.innerHTML : '';
        if (btn) btn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>Memproses...';
        setTimeout(() => {
          if (btn) btn.innerHTML = original || 'Kirim';
          const alert = document.createElement('div');
          alert.className = 'alert alert-success mt-3';
          alert.textContent = 'Berhasil! Form siap diintegrasikan dengan backend/endpoint Anda.';
          form.appendChild(alert);
          form.reset();
        }, 900);
      });
    });

    // Scroll to payment section on CTA in course detail
    $$('.scroll-to-payment').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const el = $('#payment');
        if (el) el.scrollIntoView({behavior: 'smooth', block: 'start'});
      });
    });
  });
})();
