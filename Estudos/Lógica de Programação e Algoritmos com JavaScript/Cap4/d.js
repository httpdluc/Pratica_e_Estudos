const prompt = require("prompt-sync")();

const n1 = Number(prompt("Informe o primeiro valor: "));
const n2 = Number (prompt("Informe o segundo valor: "));
const n3 = Number(prompt("Informe o terceiro valor: "));

if(n1 != n2 && n1 != n3 && n2 != n3){
    console.log("Este é um triangulo Escaleno");
} else if(n1 == n2 && n1 == n3 && n2 == n3){
    console.log("Este é um triangulo Equilátero");
} else if(n1 == n2 || n1 == n3 || n2 == n3 ){
    if(n1 + n2 <= n3 || n1 + n3 <= n2 || n2 + n3 <= n1){
        console.log("Um dos lados não pode ser maior que a soma dos outros lados!");
        return
    }
    console.log("Este é um triangulo Isóceles");
} 
