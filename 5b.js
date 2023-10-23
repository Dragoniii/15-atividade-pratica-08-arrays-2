const quantidade = 10;

function numeroAleatorioNaoRepetido(existentes) {
    let numero;
    do {
        numero = Math.floor(Math.random() * 99 + 1);
    } while (existentes.includes(numero));
    return numero;
}

function gerarArrayOriginal(quantidade) {
    const array = [];
    for (let i = 0; i < quantidade; i++) {
        array.push(numeroAleatorioNaoRepetido(array));
    }
    return array;
}

const arrayOriginal = gerarArrayOriginal(quantidade);
const arrayInvertido = [...arrayOriginal].reverse();
const arrayOrdemAlfabetica = [...arrayOriginal].sort();
const arrayOrdemCrescente = [...arrayOriginal].sort((a, b) => a - b);
const arrayAleatorio = [...arrayOriginal].sort(() => Math.random() - 0.5);

const resultado = [
  arrayOriginal,
  arrayInvertido,
  arrayOrdemAlfabetica,
  arrayOrdemCrescente,
  arrayAleatorio,
];

console.log(resultado);
