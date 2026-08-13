'use strict';

/* ===== Mobile sidebar toggle ===== */
const sidebar = document.querySelector('[data-sidebar]');
const sidebarBtn = document.querySelector('[data-sidebar-btn]');

if (sidebarBtn) {
  sidebarBtn.addEventListener('click', function () {
    sidebar.classList.toggle('active');
    const label = sidebarBtn.querySelector('span');
    label.textContent = sidebar.classList.contains('active') ? 'Nascondi contatti' : 'Mostra contatti';
  });
}

/* ===== Tab navigation ===== */
const navLinks = document.querySelectorAll('[data-nav-link]');
const pages = document.querySelectorAll('.page[data-page]');

navLinks.forEach((link) => {
  link.addEventListener('click', function () {
    const target = this.dataset.page;

    pages.forEach((page) => {
      page.classList.toggle('active', page.dataset.page === target);
    });

    navLinks.forEach((l) => l.classList.remove('active'));
    this.classList.add('active');

    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
