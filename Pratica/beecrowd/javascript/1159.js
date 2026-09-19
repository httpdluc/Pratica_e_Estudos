class Main{
  static execute(){
    for(let i=0; i<lines.length ; i++){
      const x = Number(lines[i])
      let saida = 0;
      let valor = 0;
      
      if(x == 0){
        break;
      }
      if(x%2===0){
        valor=x
      }else{
        valor=x+1
      }
      for(let j=1 ; j<=5 ; j++){
        saida+=valor;
        valor+=2
      }
      console.log(saida)
    }
  }
}
Main.execute()