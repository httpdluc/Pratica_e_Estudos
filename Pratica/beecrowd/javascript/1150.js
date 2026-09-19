class Main {
  static execute() {
    const entrada = lines.map(Number);

    const x = entrada[0];
    let z = 0;

    
    for (let i = 1; i < entrada.length; i++) {
      if (entrada[i] > x) {
        z = entrada[i];
        break;
      }
    }

    let soma = 0;
    let quantidade = 0;

    while (soma <= z) {
      soma += x + quantidade;
      quantidade++;
    }

    console.log(quantidade);
  }
}

Main.execute();
