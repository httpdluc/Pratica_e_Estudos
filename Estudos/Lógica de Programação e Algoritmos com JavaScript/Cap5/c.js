const prompt = require("prompt-sync")()

const num = Number(prompt("Informe um número: "));
let soma=0;
let total = 0;
let texto = " "

for (let i = 1;i<num; i++){
    if(num % i == 0){
        total += i;
        texto += soma =i + " ";
    }
}
    
    if(total == num){
        console.log(`Divisores de ${num}: ${texto} (Soma ${num})`)
        console.log(`${num} É um número perfeito!`)
    }else{
        console.log(`${num} Não é um número perfeito!`)
    }


