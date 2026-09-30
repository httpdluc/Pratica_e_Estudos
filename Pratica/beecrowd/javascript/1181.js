class Main {
  static execute() {

    const linha = Number(lines[0]);
    const calculo = lines[1].trim();

    let soma = 0;

    for (let coluna = 0; coluna < 12; coluna++) {
      const indice = 2 + linha * 12 + coluna;
      soma += Number(lines[indice]);
    }

    const resultado = calculo==='M' ? soma/12 : soma;

    console.log(resultado.toFixed(1));
  }
}

Main.execute();
