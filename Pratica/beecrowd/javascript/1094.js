class Main{
  static execute(){

    const controle = Number(lines[0]);

    let coelhos = 0;
    let ratos = 0;
    let sapos = 0;

    for(let i=1 ; i<= controle ; i++){
      const entrada = lines[i].trim().split(' ')
      if(entrada[1] === 'C'){
        coelhos+=Number(entrada[0])
      }else if(entrada[1] === 'R'){
        ratos+=Number(entrada[0])
      }else{
        sapos+=Number(entrada[0])
      }
    }

    const total = coelhos + ratos + sapos;
    const percentualCoelhos = ((coelhos/total)*100).toFixed(2);
    const percentualRatos = ((ratos / total) * 100).toFixed(2);
    const percentualSapos = ((sapos / total) * 100).toFixed(2);

    console.log(`Total: ${total} cobaias`)
    console.log(`Total de coelhos: ${coelhos}`)
    console.log(`Total de ratos: ${ratos}`)
    console.log(`Total de sapos: ${sapos}`)
    console.log(`Percentual de coelhos: ${percentualCoelhos} %`)
    console.log(`Percentual de ratos: ${percentualRatos} %`)
    console.log(`Percentual de sapos: ${percentualSapos} %`)
  }
}
Main.execute()