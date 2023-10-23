let numero = undefined;
const quantidade = 5;
const arrayOriginal = [];
const arrayInvertido = [];
const arrayOrdemAlfabetica = [];
const arrayOrdemCrescente = [];
const arrayAleatorio = [];
const resultado = [
  arrayOriginal,
  arrayInvertido,
  arrayOrdemAlfabetica,
  arrayOrdemCrescente,
  arrayAleatorio,
];

for (let i = 0; i < quantidade; i++) {
    do {
        numero = Math.floor(Math.random() * 999 + 1);
    } while (arrayOriginal.includes(numero));
    arrayOriginal.push(numero);
}

arrayInvertido.push(...arrayOriginal.slice().reverse());
arrayOrdemAlfabetica.push(...arrayOriginal.slice().sort());
arrayOrdemCrescente.push(
  ...arrayOriginal.slice().sort((a, b) => a - b)
);

let arrayTemp = [...arrayOriginal];
while (arrayTemp.length) {
  const index = Math.floor(Math.random() * arrayTemp.length);
  arrayAleatorio.push(arrayTemp.splice(index, 1)[0]);
}

console.log(resultado);
