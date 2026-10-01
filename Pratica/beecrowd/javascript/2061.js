class Main{
  static execute(){
    const lines = ['3 5','fechou','fechou','clicou','clicou','clicou']

    const [abas, acoes] = lines[0].split(' ').map(Number);
    let saida = abas;

    for(let i=1 ; i<=acoes ; i++){
      if(lines[i]==='fechou'){
        saida++;
      }else{
        saida--;
      }
    }
    console.log(saida);
  }
}
Main.execute();