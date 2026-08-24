const prompt = require("prompt-sync")();

const nome = prompt("Digite uma fruta: ");

const num = Number(prompt("Quantas unidades? "));

let texto="";
for(let i = 1; i<=num ; i++){
    
    texto += nome + " ";
}

console.log(texto);