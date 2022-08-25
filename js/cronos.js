const funcionesL = document.querySelector('.FL');
const funcionesJ = document.querySelector('.FJ');
const arcOrgM = document.querySelector('.AM');
const arcOrgm = document.querySelector('.Am');
const arcOrgV = document.querySelector('.AV');
const tallerL = document.querySelector('.TL');
const tallerJ = document.querySelector('.TJ');
const elDiaMate = () => {
  let fecha = new Date();
  let diaDeLaSemana = fecha.getDay();
  let dia = fecha.getDate(); let mes = fecha.getMonth();
  switch (diaDeLaSemana) {
    case 1: funcionesL.innerHTML = `${dia}/${mes + 1}/2021`;
      break;
    case 2: funcionesL.innerHTML = `${dia + 6}/${mes + 1}/2021`;
      break;
    case 3: funcionesL.innerHTML = `${dia + 5}/${mes + 1}/2021`;
      break;
    case 4: funcionesL.innerHTML = `${dia + 4}/${mes + 1}/2021`;
      break;
    case 5: funcionesL.innerHTML = `${dia + 3}/${mes + 1}/2021`;
      break;
    case 6: funcionesL.innerHTML = `${dia + 2}/${mes + 1}/2021`;
      break;
    case 7: funcionesL.innerHTML = `${dia + 1}/${mes + 1}/2021`;
      break;
    default:
      break;
  }
  switch (diaDeLaSemana) {
    case 1: funcionesJ.innerHTML = `${dia + 3}/${mes + 1}/2021`;
      break;
    case 2: funcionesJ.innerHTML = `${dia + 2}/${mes + 1}/2021`;
      break;
    case 3: funcionesJ.innerHTML = `${dia + 1}/${mes + 1}/2021`;
      break;
    case 4: funcionesJ.innerHTML = `${dia}/${mes + 1}/2021`;
      break;
    case 5: funcionesJ.innerHTML = `${dia + 6}/${mes + 1}/2021`;
      break;
    case 6: funcionesJ.innerHTML = `${dia + 5}/${mes + 1}/2021`;
      break;
    case 7: funcionesJ.innerHTML = `${dia + 4}/${mes + 1}/2021`;
      break;
    default:
      break;
  }
};
const elDiaArc = () => {
  let fecha = new Date();
  let diaDeLaSemana = fecha.getDay();
  let dia = fecha.getDate(); let mes = fecha.getMonth();
  switch (diaDeLaSemana) {
    case 1: arcOrgM.innerHTML = `${dia + 1}/${mes + 1}/2021`;
      break;
    case 2: arcOrgM.innerHTML = `${dia}/${mes + 1}/2021`;
      break;
    case 3: arcOrgM.innerHTML = `${dia + 6}/${mes + 1}/2021`;
      break;
    case 4: arcOrgM.innerHTML = `${dia + 5}/${mes + 1}/2021`;
      break;
    case 5: arcOrgM.innerHTML = `${dia + 4}/${mes + 1}/2021`;
      break;
    case 6: arcOrgM.innerHTML = `${dia + 3}/${mes + 1}/2021`;
      break;
    case 7: arcOrgM.innerHTML = `${dia + 2}/${mes + 1}/2021`;
      break;
    default:
      break;
  }
  switch (diaDeLaSemana) {
    case 1: arcOrgm.innerHTML = `${dia + 2}/${mes + 1}/2021`;
      break;
    case 2: arcOrgm.innerHTML = `${dia + 1}/${mes + 1}/2021`;
      break;
    case 3: arcOrgm.innerHTML = `${dia}/${mes + 1}/2021`;
      break;
    case 4: arcOrgm.innerHTML = `${dia + 6}/${mes + 1}/2021`;
      break;
    case 5: arcOrgm.innerHTML = `${dia + 5}/${mes + 1}/2021`;
      break;
    case 6: arcOrgm.innerHTML = `${dia + 4}/${mes + 1}/2021`;
      break;
    case 7: arcOrgm.innerHTML = `${dia + 3}/${mes + 1}/2021`;
      break;
    default:
      break;
  }
  switch (diaDeLaSemana) {
    case 1: arcOrgV.innerHTML = `${dia + 4}/${mes + 1}/2021`;
      break;
    case 2: arcOrgV.innerHTML = `${dia + 3}/${mes + 1}/2021`;
      break;
    case 3: arcOrgV.innerHTML = `${dia + 2}/${mes + 1}/2021`;
      break;
    case 4: arcOrgV.innerHTML = `${dia + 1}/${mes + 1}/2021`;
      break;
    case 5: arcOrgV.innerHTML = `${dia}/${mes + 1}/2021`;
      break;
    case 6: arcOrgV.innerHTML = `${dia + 6}/${mes + 1}/2021`;
      break;
    case 7: arcOrgV.innerHTML = `${dia + 5}/${mes + 1}/2021`;
      break;
    default:
      break;
  }

};
const elDiaTaller = () => {
  let fecha = new Date();
  let diaDeLaSemana = fecha.getDay();
  let dia = fecha.getDate(); let mes = fecha.getMonth();
  switch (diaDeLaSemana) {
    case 1: tallerL.innerHTML = `${dia}/${mes + 1}/2021`;
      break;
    case 2: tallerL.innerHTML = `${dia + 6}/${mes + 1}/2021`;
      break;
    case 3: tallerL.innerHTML = `${dia + 5}/${mes + 1}/2021`;
      break;
    case 4: tallerL.innerHTML = `${dia + 4}/${mes + 1}/2021`;
      break;
    case 5: tallerL.innerHTML = `${dia + 3}/${mes + 1}/2021`;
      break;
    case 6: tallerL.innerHTML = `${dia + 2}/${mes + 1}/2021`;
      break;
    case 7: tallerL.innerHTML = `${dia + 1}/${mes + 1}/2021`;
      break;
    default:
      break;
  }
  switch (diaDeLaSemana) {
    case 1: tallerJ.innerHTML = `${dia + 2}/${mes + 1}/2021`;
      break;
    case 2: tallerJ.innerHTML = `${dia + 1}/${mes + 1}/2021`;
      break;
    case 3: tallerJ.innerHTML = `${dia}/${mes + 1}/2021`;
      break;
    case 4: tallerJ.innerHTML = `${dia + 6}/${mes + 1}/2021`;
      break;
    case 5: tallerJ.innerHTML = `${dia + 5}/${mes + 1}/2021`;
      break;
    case 6: tallerJ.innerHTML = `${dia + 4}/${mes + 1}/2021`;
      break;
    case 7: tallerJ.innerHTML = `${dia + 3}/${mes + 1}/2021`;
      break;
    default:
      break;
  }
};

elDiaMate();
elDiaArc();
elDiaTaller();