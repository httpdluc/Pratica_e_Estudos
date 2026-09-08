 class Main {
  static execute() {


    const entrada = lines.map(Number);

    let maior = entrada[0];
    let posicao = 1;

    for (let i = 1; i < entrada.length; i++) {
      if (entrada[i] > maior) {
        maior = entrada[i];
        posicao = i + 1;
      }
    }

    console.log(maior);
    console.log(posicao);
  }
}

Main.execute();
