const prompt = require("prompt-sync")();

    let chinchilas = Number(prompt("Digite o número de chinchilas: "));
    const ano = Number(prompt("Quantos anos se passaram? "));
    let i = 1;

do{
    if(chinchilas<2){
       chinchilas = Number(prompt("O número não deve ser menor que 2! Digite novamente o número de chinchilas: ")); 
       continue;
    }else{
        console.log(`${i}º ano: ${chinchilas} chinchilas`);
        chinchilas = chinchilas*3;
        
        if(i==ano){
            break;
        }
        
        i++;
   }
}while(true);