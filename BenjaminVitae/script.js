// Animar secciones al hacer scroll
const sections = document.querySelectorAll('.section');
function mostrarSecciones() {
  const trigger = window.innerHeight * 0.85;
  sections.forEach(sec => {
    const top = sec.getBoundingClientRect().top;
    if (top < trigger) sec.classList.add('visible');
  });
}
window.addEventListener('scroll', mostrarSecciones);
mostrarSecciones();

// --- Menú hamburguesa funcional ---
const toggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

toggle.addEventListener('click', () => {
  menu.classList.toggle('active');
  toggle.querySelector('i').classList.toggle('fa-times');
});
// Cierra el menú al hacer clic en un enlace
document.querySelectorAll('.nav-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    menu.classList.remove('active');
    toggle.querySelector('i').classList.remove('fa-times');
  });
});

// --- Interactividad de Habilidades Dinámicas ---
const skillCards = document.querySelectorAll('.skill-card');
const skillTitle = document.getElementById('skill-title');
const skillDesc = document.getElementById('skill-desc');
const skillBg = document.querySelector('.skill-bg');

const skillImages = {
  html: 'url("img/skills/html.webp")',
  python: 'url("img/skills/python.webp")',
  redes: 'url("img/skills/redes.webp")',
  yolo: 'url("img/skills/yolo.webp")'
};

// Estado inicial
window.addEventListener('DOMContentLoaded', () => {
  skillBg.style.backgroundImage = skillImages['html'];
  skillCards[0].classList.add('active');
});

// Cambiar contenido dinámicamente
skillCards.forEach(card => {
  card.addEventListener('mouseenter', () => updateSkill(card));
  card.addEventListener('click', () => updateSkill(card));
});

function updateSkill(card) {
  const skillKey = card.getAttribute('data-skill');
  const title = card.textContent;
  const desc = card.getAttribute('data-desc');

  // actualizar texto e imagen
  skillTitle.textContent = title;
  skillDesc.textContent = desc;
  skillBg.style.backgroundImage = skillImages[skillKey];

  // actualizar estado activo
  skillCards.forEach(c => c.classList.remove('active'));
  card.classList.add('active');
}
// ===== Botón de volver arriba =====
const btnTop = document.getElementById("btn-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    btnTop.style.display = "block";
  } else {
    btnTop.style.display = "none";
  }
});

btnTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});