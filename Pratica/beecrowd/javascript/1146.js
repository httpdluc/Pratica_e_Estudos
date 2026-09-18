class Main{
  static execute(){
    for(let i=0 ; i<lines.length ; i++){
      const x = Number(lines[i])
      let saida = '';
      if(x < 1){
        break;
      }
      for(let j=1 ; j<=x ; j++){
        saida+= j + ' '
      }
      console.log(saida.trim())
    }
  }
}
Main.execute()