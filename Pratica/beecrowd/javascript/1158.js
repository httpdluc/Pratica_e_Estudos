class Main{
  static execute(){
    const controle = Number(lines[0])

    for(let i=1 ; i<=controle ; i++){
      const entrada = lines[i].split(' ').map(Number);
      const x = entrada[0]
      const y = entrada[1]

      let saida = 0;
      let valor = 0;

      if(x%2!==0){
        valor = x;
      }else{
        valor = x+1;
      }

      for(let j=1 ; j<=y ; j++){
        saida+=valor
        valor+=2
      }
      console.log(saida)
    }
  }
}
Main.execute()