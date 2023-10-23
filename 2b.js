const quantidade = 100;
const array = Array.from({ length: quantidade }, () => Math.floor(Math.random() * 99 + 1));
const soma = array.reduce((acc, num) => acc + num, 0);

console.log({ array, soma });
