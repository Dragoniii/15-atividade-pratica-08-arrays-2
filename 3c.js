//3. Desenvolva um algoritmo que preenche um vetor com os 4 primeiros números perfeitos.

function somaDosDivisores(num) {
    let soma = 0;
    for (let i = 1; i <= num / 2; i++) {
        if (num % i === 0) {
            soma += i;
        }
    }
    return soma;
}

function encontraNumerosPerfeitos(quantidade) {
    const numerosPerfeitos = [];
    let n = 1;

    while (numerosPerfeitos.length < quantidade) {
        if (n === somaDosDivisores(n)) {
            numerosPerfeitos.push(n);
        }
        n++;
    }

    return numerosPerfeitos;
}

const vetor = encontraNumerosPerfeitos(4);
console.log(vetor);  
