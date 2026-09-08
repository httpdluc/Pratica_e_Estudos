class Main {
  static execute() {
    const lines = [
      '7',
      '4 5',
      '13 10',
      '6 4',
      '3 3',
      '3 5',
      '3 4',
      '3 8'
    ];

    const controle = Number(lines[0]);

    for (let i = 1; i <= controle; i++) {
      const valores = lines[i].split(' ').map(Number);

      const x = valores[0];
      const y = valores[1];

      const menor = Math.min(x, y);
      const maior = Math.max(x, y);

      let calculo = 0;

      for (let numero = menor + 1; numero < maior; numero++) {
        if (numero % 2 !== 0) {
          calculo += numero;
        }
      }

      console.log(calculo);
    }
  }
}

Main.execute();
