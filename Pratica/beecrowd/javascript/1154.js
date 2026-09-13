class Main{
  static execute(){

    let valor = 0;
    let posicao = 0;


    for(let i=0 ; i<lines.length ; i++){
      const entrada = Number(lines[i])

      if(entrada < 0){
        break;
      }else{
        valor+=entrada;
        posicao=i+1;
      }
    }
    const saida = valor / posicao;
    console.log(saida.toFixed(2))
  }
}

Main.execute()