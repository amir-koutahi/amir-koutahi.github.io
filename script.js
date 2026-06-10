/* Amir Koutahi — site interactions */

// Mobile nav toggle
(function () {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => links.classList.toggle('open'));
  }
})();

// Project filtering
(function () {
  const buttons = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.pcard');
  if (!buttons.length) return;
  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      buttons.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      const f = btn.dataset.filter;
      cards.forEach((c) => {
        const show = f === 'all' || c.dataset.cat === f;
        c.style.display = show ? 'flex' : 'none';
      });
    });
  });
})();

// Tutorial-notes accordion
(function () {
  const heads = document.querySelectorAll('.course-head');
  heads.forEach((h) => {
    h.addEventListener('click', () => {
      h.parentElement.classList.toggle('open');
    });
  });
  // open the first course by default
  const first = document.querySelector('.course');
  if (first) first.classList.add('open');
})();

// Scroll reveal
(function () {
  const els = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window) || !els.length) {
    els.forEach((e) => e.classList.add('in'));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  els.forEach((e) => io.observe(e));
})();

// Set current year in footer
(function () {
  document.querySelectorAll('[data-year]').forEach((el) => {
    el.textContent = new Date().getFullYear();
  });
})();
