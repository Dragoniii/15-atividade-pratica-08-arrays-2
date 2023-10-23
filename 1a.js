//1. Desenvolva um algoritmo para percorrer um vetor de 15 elementos inteiros já preenchido e imprima todos os valores pares.

const array = [];
const arrayPar = [];
const arrayImpar = [];

let i = 0;
let numero = undefined;
let resultado = undefined;
let testar = undefined;

while(i < 15 ){
    numero = Math.floor(Math.random()*99+1);
    array.push(numero);
    i++
}

for (let i = 0; i < array.length; i++){
    testar = (array[i] % 2 === 0) ? arrayPar.push(array[i]) : arrayImpar.push(array[i]);
}

resultado = {array, arrayPar, arrayImpar}
console.log(resultado)
