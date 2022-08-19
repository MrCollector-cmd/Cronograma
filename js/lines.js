const line = document.querySelectorAll('.line');
const inicio = document.querySelector('.inicio');
const mat = document.querySelector('.cronograma_matematicas');
const inicio__linea = document.querySelector('.line_nav__inicio');
line.forEach(lines => {
  lines.style.width = '55%';
  lines.style.transition = 'transform 2s';
  ScrollReveal().reveal('.line', { delay: 100, reset: true, scale: 2, duration: 800 });
});