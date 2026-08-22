const prompt = require("prompt-sync")();
const salario = Number(prompt("Salário atual R$: "));
const anos = Number(prompt("Quantos anos você está na empresa? "));

const participacao = Math.floor(anos / 4);
const salarioAtual = salario+(salario * participacao /100);

console.log(`Quadriênos: ${participacao}`);
console.log(`Salario Final R$: ${salarioAtual.toFixed(2)}`);