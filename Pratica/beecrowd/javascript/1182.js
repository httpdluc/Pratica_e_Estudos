class Main{
  static execute(){
    const coluna = Number(lines[0]);
    const tipo = lines[1].trim();

    let soma = 0;
    
    for(let i=0 ; i<12 ; i++){
      const indice = 2 + i * 12 + coluna;
      soma+=Number(lines[indice])
    }

    const saida = tipo==='M' ? soma/12 : soma;

    console.log(saida.toFixed(1))

  }
}
Main.execute()