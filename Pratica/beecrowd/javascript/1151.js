class Main{
  static execute(){
    const entrada = Number(lines[0])
    let saida = [];

    for(let i=0 ; i<entrada ; i++){
      let calculo=0;
      if(i===0){
        saida.push(i)
      }else if(i===1){
        calculo = i + saida[i-1]
        saida.push(calculo)
      }else{
        calculo = saida[i-1]+saida[i-2]
        saida.push(calculo)
      }
    }
    console.log(saida.join(' '))
  }
}
Main.execute()