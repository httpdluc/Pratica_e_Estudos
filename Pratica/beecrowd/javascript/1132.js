class Main {
  static execute() {
    const x = Number(lines[0]);
    const y = Number(lines[1]);

    const inicio = Math.min(x, y);
    const fim = Math.max(x, y);


    let soma = 0;

    for (let i = inicio; i <= fim; i++){
      if (i % 13 !== 0) {
        soma += i;
      }
    }

    console.log(soma);
  }
}

Main.execute();
