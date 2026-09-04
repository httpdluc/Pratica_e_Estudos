class Main{
  static execute(){

    const entrada = lines.map(linha => Number(linha))

    let positivos = 0;
    let valores = 0;

    for(let i=0 ; i<entrada.length ; i++){
      if(entrada[i]>0){
        positivos++
        valores += entrada[i]
      }
    }

    const media = valores / positivos;

    console.log(`${positivos} valores positivos\n${media.toFixed(1)}`)
  }
}

Main.execute();