const array = [];
const quantidade = 10;

for (let i = 0; i < quantidade; i++) {
    array.push(Math.floor(Math.random() * 99 + 1));
}

const numero = array[Math.floor(Math.random() * quantidade)];

const resultado = { array, numero };

console.log(resultado);
