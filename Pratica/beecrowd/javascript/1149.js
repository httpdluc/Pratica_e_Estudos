class Main {
  static execute() {
    const lines = ['3 -1 0 -2 2'];
    const entrada = lines[0].split(' ').map(Number);

    const A = entrada[0];
    let N;

    for (let i = 1; i < entrada.length; i++) {
      if (entrada[i] > 0) {
        N = entrada[i];
        break;
      }
    }
    let saida = 0;

    for (let i = 0; i < N; i++) {
      saida += A + i;
    }

    console.log(saida);
  }
}

Main.execute();
