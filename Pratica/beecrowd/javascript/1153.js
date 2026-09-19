class Main{
  static execute(){
    const entrada = Number(lines[0])
    let saida = 1;

    for(let i=1 ; i<entrada ; i++){
      const calculo = i * saida
      saida+=calculo
    }
    console.log(saida)
  }
}
Main.execute()