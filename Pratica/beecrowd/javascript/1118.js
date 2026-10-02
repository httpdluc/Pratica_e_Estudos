class Main {
  static execute() {
    const lines = [
      '-3.5',
      '3.5',
      '11.0',
      '10.0',
      '4',
      '1',
      '8.0',
      '9.0',
      '2'
    ];

    let i = 0;
    let continuar = 1;

    while (continuar===1) {
      let nota1;
      let nota2;

      while (nota1===undefined) {
        const entrada = Number(lines[i++]);

        if (entrada<0 || entrada>10) {
          console.log('nota invalida');
        } else {
          nota1 = entrada;
        }
      }

      while (nota2===undefined) {
        const entrada = Number(lines[i++]);

        if (entrada<0 || entrada>10) {
          console.log('nota invalida');
        } else {
          nota2 = entrada;
        }
      }

      const media = (nota1+nota2)/2;

      console.log(`media = ${media.toFixed(2)}`);

      while (true) {
        console.log('novo calculo (1-sim 2-nao)');

        const opcao = Number(lines[i++]);

        if (opcao===1) {
          continuar = 1;
          break;
        }

        if (opcao===2) {
          continuar = 2;
          break;
        }
      }
    }
  }
}

Main.execute();
