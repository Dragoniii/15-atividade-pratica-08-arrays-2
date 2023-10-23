//2. Desenvolva um algoritmo para percorrer um vetor de 20 elementos inteiros e no final mostre a soma de todos os elementos.

const array = [];
const quantidade = 100

let numero = undefined;
let soma = undefined;
let resultado = undefined

for (let i = 0; i < quantidade; i++ ){
    numero = Math.floor(Math.random()*99+1);
    array.push(numero);
}

soma = array.reduce((acumulador, atual) => acumulador + atual, 0)

resultado = {array, soma};
console.log(resultado);
