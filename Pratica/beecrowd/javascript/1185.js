class Main {
  static execute() {

    const operacao = lines[0].trim()
    let soma = 0;
    let quantidade = 0;
    let controle = 11

    for (let linha=0 ; linha<12; linha++) {
      for (let coluna=0 ; coluna<controle; coluna++) {
        const indice = 1 + linha * 12 + coluna;

        soma+=Number((lines[indice]));
        quantidade++;
      }
      controle--
    }

    const resultado = operacao==='S' ? soma : soma/quantidade;

    console.log(resultado.toFixed(1));
  }
}

Main.execute();

