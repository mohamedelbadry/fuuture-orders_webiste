/* ==========================================================================
   Future Orders Trading Co. — سلوك الموقع (Vanilla JS)
   header scroll · counters (IntersectionObserver) · marquees · lightbox
   ========================================================================== */
(function () {
  'use strict';

  /* ------------------------------------------------- header on scroll --- */
  function initHeaderScroll() {
    var hdr = document.querySelector('.hdr--fixed');
    if (!hdr) return;
    var ticking = false;
    function update() {
      hdr.classList.toggle('scrolled', window.scrollY > 40);
      ticking = false;
    }
    window.addEventListener('scroll', function () {
      if (!ticking) { ticking = true; window.requestAnimationFrame(update); }
    }, { passive: true });
    update();
  }

  /* ------------------------------------------------------- counters ----- */
  /* نفس منطق الأصل: setInterval كل 20ms مع easing = 1 - (1-p)^3 */
  function runCounter(el, duration) {
    var target = parseFloat(el.getAttribute('data-count')) || 0;
    var suffix = el.getAttribute('data-count-suffix') || '';
    var useComma = el.getAttribute('data-count-format') === 'comma';
    var start = Date.now();
    var timer = setInterval(function () {
      var p = Math.min(1, (Date.now() - start) / duration);
      var eased = 1 - Math.pow(1 - p, 3);
      var value = Math.round(target * eased);
      el.textContent = (useComma ? value.toLocaleString('en-US') : String(value)) + suffix;
      if (p >= 1) clearInterval(timer);
    }, 20);
  }

  function observeSection(selector, duration) {
    var section = document.querySelector(selector);
    if (!section) return;
    var counters = section.querySelectorAll('[data-count]');
    if (!counters.length) return;

    // بدون IntersectionObserver (متصفحات قديمة): اعرض القيم النهائية مباشرة
    if (!('IntersectionObserver' in window)) {
      for (var i = 0; i < counters.length; i++) runCounter(counters[i], duration);
      return;
    }

    var started = false;
    var obs = new IntersectionObserver(function (entries) {
      if (entries[0].isIntersecting && !started) {
        started = true;
        for (var i = 0; i < counters.length; i++) runCounter(counters[i], duration);
        obs.disconnect();
      }
    }, { threshold: 0.3 });
    obs.observe(section);
  }

  function initCounters() {
    observeSection('#fmt-stats-section', 1500);
    observeSection('#fmt-po-section', 1600);
  }

  /* --------------------------------------------- reveal on scroll ------- */
  function initReveal() {
    var items = document.querySelectorAll('.reveal');
    if (!items.length) return;
    if (!('IntersectionObserver' in window)) {
      for (var i = 0; i < items.length; i++) items[i].classList.add('is-visible');
      return;
    }
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    for (var j = 0; j < items.length; j++) obs.observe(items[j]);
  }

  /* ------------------------------------- portfolio track (index page) --- */
  /* يبني 10 بطاقات (5 مشاريع × مرتين) لشريط التمرير اللانهائي */
  function buildPortfolioTrack() {
    var track = document.getElementById('pf-track');
    if (!track || typeof PROJECT_ORDER === 'undefined') return;

    var html = '';
    for (var pass = 0; pass < 2; pass++) {
      for (var i = 0; i < PROJECT_ORDER.length; i++) {
        var slug = PROJECT_ORDER[i];
        var img = PROJECT_IMAGES[slug].main;
        html +=
          '<a class="pf-card" href="ProjectDetail.html?id=' + slug + '">' +
            '<img src="' + img + '" alt="" data-i18n-alt="portfolio.items.' + i + '.title">' +
            '<span class="pf-shade"></span>' +
            '<span class="pf-meta">' +
              '<span class="cat" data-i18n="portfolio.items.' + i + '.cat"></span>' +
              '<span class="ttl" data-i18n="portfolio.items.' + i + '.title"></span>' +
            '</span>' +
          '</a>';
      }
    }
    track.innerHTML = html;
  }

  /* ------------------------------------------ client logos marquee ------ */
  function buildLogosMarquee() {
    var track = document.getElementById('logos-track');
    if (!track || typeof CLIENT_LOGOS === 'undefined') return;
    var html = '';
    for (var pass = 0; pass < 2; pass++) {
      for (var i = 0; i < CLIENT_LOGOS.length; i++) {
        html += '<div class="logo-cell"><img src="' + CLIENT_LOGOS[i] + '" alt="" aria-hidden="true"></div>';
      }
    }
    track.innerHTML = html;
  }

  /* ------------------------------------------------------- lightbox ----- */
  function initLightbox() {
    var triggers = document.querySelectorAll('[data-lightbox]');
    if (!triggers.length) return;

    var box = document.createElement('div');
    box.className = 'lightbox';
    box.setAttribute('role', 'dialog');
    box.setAttribute('aria-modal', 'true');
    box.innerHTML = '<button class="lightbox-close" aria-label="Close">&times;</button><img src="" alt="">';
    document.body.appendChild(box);

    var boxImg = box.querySelector('img');

    function open(src, alt) {
      boxImg.setAttribute('src', src);
      boxImg.setAttribute('alt', alt || '');
      box.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
    function close() {
      box.classList.remove('open');
      document.body.style.overflow = '';
      boxImg.setAttribute('src', '');
    }

    for (var i = 0; i < triggers.length; i++) {
      (function (el) {
        el.addEventListener('click', function (e) {
          e.preventDefault();
          var img = el.querySelector('img');
          if (img) open(img.getAttribute('src'), img.getAttribute('alt'));
        });
      })(triggers[i]);
    }

    box.addEventListener('click', function (e) {
      if (e.target === box || e.target.classList.contains('lightbox-close')) close();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && box.classList.contains('open')) close();
    });
  }

  /* ---------------------------------------------- mobile menu (☰) ------- */
  function initMobileMenu() {
    var btn = document.querySelector('.menu-btn');
    var nav = document.getElementById('site-nav');
    var hdr = document.querySelector('.hdr');
    if (!btn || !nav) return;

    function setOpen(open) {
      nav.classList.toggle('open', open);
      btn.classList.toggle('open', open);
      if (hdr) hdr.classList.toggle('menu-open', open);
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    }

    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      setOpen(!nav.classList.contains('open'));
    });

    // إغلاق عند اختيار رابط
    var links = nav.querySelectorAll('a');
    for (var i = 0; i < links.length; i++) {
      links[i].addEventListener('click', function () { setOpen(false); });
    }

    // إغلاق عند النقر خارج القائمة أو بزر Escape
    document.addEventListener('click', function (e) {
      if (nav.classList.contains('open') && !nav.contains(e.target) && e.target !== btn) setOpen(false);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') setOpen(false);
    });

    // إغلاق عند التحول لشاشة كبيرة
    window.addEventListener('resize', function () {
      if (window.innerWidth > 900) setOpen(false);
    });
  }

  /* --------------------------------------------- language toggle wiring -- */
  function initLangButtons() {
    var btns = document.querySelectorAll('.lang-btn');
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener('click', function () { foToggleLang(); });
    }
  }

  /* ------------------------------------------------------------ boot ---- */
  function boot() {
    // 1) بناء العناصر المكررة (بدلاً من sc-for)
    buildPortfolioTrack();
    buildLogosMarquee();
    if (typeof window.buildPageContent === 'function') window.buildPageContent();

    // 2) تطبيق اللغة المحفوظة
    foApplyLang(foGetLang());

    // 3) السلوكيات
    initLangButtons();
    initMobileMenu();
    initHeaderScroll();
    initCounters();
    initReveal();
    initLightbox();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }

  // شبكة أمان: لو تعطّل شيء، لا تُبقِ الصفحة مخفية
  setTimeout(function () { document.documentElement.classList.remove('lang-boot'); }, 1500);
})();
