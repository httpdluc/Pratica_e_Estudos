class Main{
  static execute(){
    let saida = 0;

    for(let i=1 ; i<=100 ; i++){
      saida+= 1/i;
    }
    
    console.log(saida.toFixed(2))
  }
}
Main.execute()