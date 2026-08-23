class Main {
  static execute() {
    const posicao = lines[0].split(' ').map(Number);
    const x = posicao[0];
    const y = posicao[1]

    switch (true) {
      case x > 0 && y > 0:
        console.log('Q1');
        break;
      case x < 0 && y > 0:
        console.log('Q2');
        break;          
      case x < 0 && y < 0:
        console.log('Q3');
        break;
      case x > 0 && y < 0:
        console.log('Q4');
        break;
      case x === 0 && y === 0:
        console.log('Origem');
        break;
      case x === 0:
        console.log('Eixo Y');
        break;
      case y === 0:
        console.log('Eixo X');
        break;
    }
  }
}

Main.execute();