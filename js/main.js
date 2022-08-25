const icono = document.querySelector(".fa-bars");
const menu = document.querySelector(".menu");
const img = document.querySelector(".pdf-vista");
const contenedroLight = document.querySelector(".show-img");
const imagenes = document.querySelectorAll(".pdf-vista");
const depImg = document.querySelector(".drop-img");
const galeria = document.querySelector(".galeria-pdf");
let clase;

icono.addEventListener('click', () => {
  menu.classList.toggle('move');
  icono.style.display = 'none';
  document.querySelector('.move');
});
window.addEventListener('click', e => {
  if (menu.classList.contains('move')
    && e.target != menu && e.target != icono) {

    menu.classList.toggle('move');

    icono.style.display = 'inline-block';

  };

});


imagenes.forEach(imagen => {
  imagen.addEventListener('click', () => {
    clase = imagen.classList.item(1);
    if (clase == 'funciones') {
      console.log(clase)
      depImg.setAttribute('src', 'src/mat/Funciones.pdf#toolbar=0')
      contenedroLight.classList.toggle('show');
      depImg.classList.toggle('showImage')
      icono.style.opacity = '0';
    }
    else if (clase == 'limites') {
      console.log(clase)
      depImg.setAttribute('src', 'src/mat/Limites.pdf#toolbar=0')
      contenedroLight.classList.toggle('show');
      depImg.classList.toggle('showImage')
      icono.style.opacity = '0';
    }
    else if (clase == 'derivadas') {
      console.log(clase)
      depImg.setAttribute('src', 'src/mat/Derivadas.pdf#toolbar=0')
      contenedroLight.classList.toggle('show');
      depImg.classList.toggle('showImage')
      icono.style.opacity = '0';
    }
    else if (clase == 'continuidad') {
      console.log(clase)
      depImg.setAttribute('src', 'src/mat/Continuidad.pdf#toolbar=0')
      contenedroLight.classList.toggle('show');
      depImg.classList.toggle('showImage')
      icono.style.opacity = '0';
    }
    else if (clase == 'integrales') {
      console.log(clase)
      depImg.setAttribute('src', 'src/mat/Integrales.pdf#toolbar=0')
      contenedroLight.classList.toggle('show');
      depImg.classList.toggle('showImage')
      icono.style.opacity = '0';
    }
    else if (clase == 'arc_clase1') {
      console.log(clase)
      depImg.setAttribute('src', 'src/arc/clase 01.pdf#toolbar=0')
      contenedroLight.classList.toggle('show');
      depImg.classList.toggle('showImage')
      icono.style.opacity = '0';
    }
    else if (clase == 'anexo_arc') {
      console.log(clase)
      depImg.setAttribute('src', 'src/arc/anexo clase 01.pdf#toolbar=0')
      contenedroLight.classList.toggle('show');
      depImg.classList.toggle('showImage')
      icono.style.opacity = '0';
    }
  });
});

contenedroLight.addEventListener('click', (e) => {
  if (e.target !== depImg) {
    contenedroLight.classList.toggle('show');
    depImg.classList.toggle('showImage');
    icono.style.opacity = '1';
  };
});