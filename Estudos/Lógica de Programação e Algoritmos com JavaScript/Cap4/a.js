const prompt = require("prompt-sync")();

const valor = Number(prompt("Informe um número: "));

/* Usanda if else
if(valor%2==0){
    console.log(`O número: ${valor}, é par!`)
}else{
    console.log(`O número: ${valor}, é impar!`)
}
*/
// Usando operador ternário
const parImpar = valor%2==0 ? `O número: ${valor}, é par!`:`O número: ${valor}, é impar!`;

console.log(parImpar);