'use strict';

// Mobile sidebar toggle
const sidebar = document.querySelector('[data-sidebar]');
const sidebarBtn = document.querySelector('[data-sidebar-btn]');

if (sidebarBtn) {
  sidebarBtn.addEventListener('click', function () {
    sidebar.classList.toggle('active');
    const label = sidebarBtn.querySelector('span');
    label.textContent = sidebar.classList.contains('active') ? 'Nascondi contatti' : 'Mostra contatti';
  });
}

// Tab navigation
const navLinks = document.querySelectorAll('[data-nav-link]');
const pages = document.querySelectorAll('.page');

navLinks.forEach(function (link) {
  link.addEventListener('click', function () {
    const targetPage = this.getAttribute('data-page');

    // Rimuove la classe active da tutte le pagine e link
    pages.forEach(function (page) {
      page.classList.remove('active');
    });
    navLinks.forEach(function (nav) {
      nav.classList.remove('active');
    });

    // Aggiunge la classe active solo alla pagina e al link target
    const targetArticle = document.querySelector(`.page[data-page="${targetPage}"]`);
    if (targetArticle) {
      targetArticle.classList.add('active');
    }
    this.classList.add('active');

    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
