const prompt = require("prompt-sync")();
const kg = Number(prompt("Informe quantos quilos de ração você comprou: "));
const gr = Number(prompt("Informe quantos gramas o animal consome por dia: "));

const kgEmGr = kg * 1000
const constumoDiario = Math.floor(kgEmGr / gr);
const sobra = kgEmGr % gr;

console.log(`A ração irá durar: ${constumoDiario} dias`)
console.log(`Irá sobrar: ${sobra}gm de ração`)