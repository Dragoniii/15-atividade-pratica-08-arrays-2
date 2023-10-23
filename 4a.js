//4. Desenvolva um algoritmo que declare uma lista de 10 números e solicite um

const array = [];
const quantidade = 2

let numero = undefined;
let resultado = undefined;

for (let i = 0; i < quantidade; i++){
    numero = Math.floor(Math.random()*99+1)
    array.push(numero)
    if (i === quantidade - 1) {
        numero = array[Math.floor(Math.random()*quantidade)]
    }
}

resultado = {array, numero}

console.log(resultado)