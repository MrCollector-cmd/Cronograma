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
  if ((diaDeLaSemana) == 7) {
    funcionesL.innerHTML = `${dia + 1}/${mes + 1}/2021`;
  }
  else if ((diaDeLaSemana) == 1) {
    funcionesL.innerHTML = `${dia}/${mes + 1}/2021`;
  }
  if ((diaDeLaSemana) == 3) {
    funcionesJ.innerHTML = `${dia + 1}/${mes + 1}/2021`;
  }
  else if ((diaDeLaSemana) == 4) {
    funcionesJ.innerHTML = `${dia}/${mes + 1}/2021`;
  };

};
const elDiaArc = () => {
  let fecha = new Date();
  let diaDeLaSemana = fecha.getDay();
  let dia = fecha.getDate(); let mes = fecha.getMonth();
  if (diaDeLaSemana == 1) {
    arcOrgM.innerHTML = `${dia + 1}/${mes + 1}/2021`;
  }
  else if (diaDeLaSemana == 2) {
    arcOrgM.innerHTML = `${dia}/${mes + 1}/2021`;
  };
  if (diaDeLaSemana == 2) {
    arcOrgm.innerHTML = `${dia + 1}/${mes + 1}/2021`;
  }
  else if (diaDeLaSemana == 3) {
    arcOrgm.innerHTML = `${dia}/${mes + 1}/2021`;
  };
  if (diaDeLaSemana == 4) {
    arcOrgV.innerHTML = `${dia + 1}/${mes + 1}/2021`;
  }
  else if (diaDeLaSemana == 5) {
    arcOrgV.innerHTML = `${dia}/${mes + 1}/2021`;
  };

};
const elDiaTaller = () => {
  let fecha = new Date();
  let diaDeLaSemana = fecha.getDay();
  let dia = fecha.getDate(); let mes = fecha.getMonth();
  if ((diaDeLaSemana) == 7) {
    tallerL.innerHTML = `${dia + 1}/${mes + 1}/2021`;
  }
  else if ((diaDeLaSemana) == 1) {
    tallerL.innerHTML = `${dia}/${mes + 1}/2021`;
  }
  if ((diaDeLaSemana) == 3) {
    tallerJ.innerHTML = `${dia + 1}/${mes + 1}/2021`;
  }
  else if ((diaDeLaSemana) == 4) {
    tallerJ.innerHTML = `${dia}/${mes + 1}/2021`;
  };

};

elDiaMate();
elDiaArc();
elDiaTaller();