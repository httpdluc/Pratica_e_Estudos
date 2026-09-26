class Main{
  static execute(){
    let saida = 0;
    let valor = 1;

    for(let i=1 ; i<=39 ; i+=2){
      saida+= i/valor
      valor*=2
    }

    console.log(saida.toFixed(2))
  }
}
Main.execute()