function gerarNumerosEResultadoAleatorio(quantidade = 100) {
    const arrayNumeros = Array.from({ length: quantidade }, () => Math.floor(Math.random() * 99 + 1));
    const numeroAleatorio = arrayNumeros[Math.floor(Math.random() * quantidade)];
    
    return { arrayNumeros, numeroAleatorio };
}

const resultado = gerarNumerosEResultadoAleatorio();
console.log(resultado);
