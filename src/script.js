const minutosElement = document.getElementById('minutos');
const segundosElement = document.getElementById('segundos');
const milissegundosElement = document.getElementById('milissegundos');
const iniciar = document.getElementById('iniciar');
const pausar = document.getElementById('pausar');
const resetar = document.getElementById('resetar');

let interval;
let contMin = 0;
let contSec = 0;
let contMili = 0;

const formatarNumero = (numero) => {
    return numero.toString().padStart(2, '0');
};

const iniciarCronometro = () => {
    clearInterval(interval);
    interval = setInterval(() => {
        contMili += 10;

        if (contMili === 1000) {
            contSec++;
            contMili = 0;
        }
        if (contSec === 60) {
            contMin++;
            contSec = 0;
        }

        minutosElement.textContent = formatarNumero(contMin);
        segundosElement.textContent = formatarNumero(contSec);
        milissegundosElement.textContent = formatarNumero(contMili);
    }, 10);
};

const pausarCronometro = () => {
    clearInterval(interval);
};

const resetarCronometro = () => {
    clearInterval(interval);
    contMin = 0;
    contSec = 0;
    contMili = 0;
    minutosElement.textContent = '00';
    segundosElement.textContent = '00';
    milissegundosElement.textContent = '00';
};

iniciar.addEventListener('click', iniciarCronometro);
pausar.addEventListener('click', pausarCronometro);
resetar.addEventListener('click', resetarCronometro);
