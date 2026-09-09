let quantidadeValidas = 0;
let soma = 0;
let i = 0;

while (quantidadeValidas < 2) {
    const nota = Number(lines[i]);

    if (nota >= 0 && nota <= 10) {
        soma += nota;
        quantidadeValidas++;
    } else {
        console.log('nota invalida');
    }

    i++;
}

const media = soma / 2;

console.log(`media = ${media.toFixed(2)}`);
