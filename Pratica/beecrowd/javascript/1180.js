const N = input[0];

let menor = input[1];
let posicao = 0;

for (let i = 1; i < N; i++) {
    if (input[i + 1] < menor) {
        menor = input[i + 1];
        posicao = i;
    }
}

console.log(`Menor valor: ${menor}`);
console.log(`Posicao: ${posicao}`);
