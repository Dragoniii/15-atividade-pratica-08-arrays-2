const array = [];
const arrayPar = [];
const arrayImpar = [];

for (let i = 0; i < 15; i++) {
    const numero = Math.floor(Math.random() * 99 + 1);
    array.push(numero);
}

array.forEach(num => (num % 2 === 0 ? arrayPar : arrayImpar).push(num));

const resultado = { array, arrayPar, arrayImpar };
console.log(resultado);
