const hora = document.getElementById('hora');
const dia = document.getElementById('data');
let dataAtual = new Date();
let horaAtual = dataAtual.getHours();
let minutoAtual = dataAtual.getMinutes();
let diaAtual = dataAtual.getDate();
let mesAtual = dataAtual.getMonth();
let anoAtual = dataAtual.getFullYear();

hora.innerHTML = `${horaAtual}:${minutoAtual}h`;
dia.innerHTML = `${diaAtual} / ${mesAtual} / ${anoAtual}`;
