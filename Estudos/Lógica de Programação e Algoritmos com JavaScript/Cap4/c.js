const prompt = require("prompt-sync")();

const valor = Number(prompt("Insira o valor: "));
let troco;


if(valor<1){
    console.log("Valor insuficiente!")
}else if (valor == 1 || valor < 1.75){
    console.log("tempo: 30 minutos")
    troco = valor-1;
    console.log(`Seu troco será de: ${troco.toFixed(2)}`)
}else if(valor == 1.75 || valor < 3){
    console.log("tempo: 60 minutos")
    troco = valor-1.75;
    console.log(`Seu troco será de: ${troco.toFixed(2)}`)
} else{
    console.log("tempo: 120 minutos")
    troco = (valor-3);
    console.log(`Seu troco será de: ${troco.toFixed(2)}`)
}
