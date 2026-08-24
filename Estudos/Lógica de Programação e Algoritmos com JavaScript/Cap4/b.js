const prompt = require("prompt-sync")();

const velocidadePermitida = Number(prompt("Informe a velocidade permitida: "));
const velocidadeDirigida = Number(prompt("Informe a velocidade do motorista: "));

const multa = velocidadePermitida + (velocidadePermitida * 0.20);

/* Usando if else
if(velocidadeDirigida <= velocidadePermitida){
    console.log("Sem Multa!")
}else if(velocidadeDirigida <= multa){
    console.log("Multa Leve!")
}else{
    console.log("Multa Grave!")
}
*/
// Usando operador ternário

const temMulta = velocidadeDirigida > multa ? "Multa Grave!": velocidadeDirigida <= multa && velocidadeDirigida > velocidadePermitida ? "Multa Leve!" : "Sem Multa!";

console.log(temMulta);