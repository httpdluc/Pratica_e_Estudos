class Main {
  static execute() {
    const x = Number(lines[0]);
    const y = Number(lines[1]);

    const menor = Math.min(x, y);
    const maior = Math.max(x, y);

    let resultado = 0;

    for (let i = menor + 1; i < maior; i++) {
      if (i % 2 !== 0) {
        resultado += i;
      }
    }
    console.log(resultado);
  }
}

Main.execute();
