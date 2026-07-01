// Menu mobile — abre/fecha a navegação em telas pequenas
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('nav');
  const navCta = document.querySelector('.nav-cta');

  if (!toggle || !nav) return;

  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('nav-open');
    toggle.setAttribute('aria-expanded', isOpen);
    toggle.textContent = isOpen ? '×' : '≡';
    if (navCta) navCta.classList.toggle('nav-open', isOpen);
  });

  // Fecha o menu ao clicar em qualquer link
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('nav-open');
      toggle.textContent = '≡';
      toggle.setAttribute('aria-expanded', 'false');
      if (navCta) navCta.classList.remove('nav-open');
    });
  });
});