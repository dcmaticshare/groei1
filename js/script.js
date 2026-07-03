// Groei door verbinding — interactie

// FAQ open/dicht
document.querySelectorAll('.faq-item button').forEach(function (knop) {
  knop.addEventListener('click', function () {
    var item = knop.closest('.faq-item');
    var open = item.classList.contains('open');
    document.querySelectorAll('.faq-item.open').forEach(function (ander) {
      ander.classList.remove('open');
      ander.querySelector('.icoon').textContent = '+';
    });
    if (!open) {
      item.classList.add('open');
      item.querySelector('.icoon').textContent = '−';
    }
  });
});

// Mobiel menu (inschuivend zijpaneel)
var hamburger = document.querySelector('.hamburger');
var overlay = document.querySelector('.menu-overlay');
var closeMenuBtn = document.querySelector('.close-menu');

function sluitMenu() {
  document.body.classList.remove('menu-open');
  if (hamburger) hamburger.setAttribute('aria-expanded', 'false');
}
if (hamburger) {
  hamburger.addEventListener('click', function () {
    var open = document.body.classList.toggle('menu-open');
    hamburger.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}
if (overlay) overlay.addEventListener('click', sluitMenu);
if (closeMenuBtn) closeMenuBtn.addEventListener('click', sluitMenu);
document.querySelectorAll('.mobile-menu a').forEach(function (link) {
  link.addEventListener('click', sluitMenu);
});
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') sluitMenu();
});

// Contactformulier (demo — koppel later aan een e-maildienst of backend)
var form = document.querySelector('.contact-form form');
if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var status = form.querySelector('.form-status');
    status.textContent = 'Bedankt voor je berichtje! Ik neem zo snel mogelijk contact met je op.';
    form.reset();
  });
}
