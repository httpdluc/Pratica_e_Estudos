class Main{
  static execute(){
    let saida = 0;

    if(entrada%2 === 0){
      saida = entrada+1
    }else{
      saida = entrada +2
    }

    console.log(saida);
  }
}

Main.execute();