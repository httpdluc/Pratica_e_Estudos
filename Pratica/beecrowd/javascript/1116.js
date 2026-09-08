class Calculo {

  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  calcular() {
    if (this.y === 0) {
      return "divisao impossivel";
    }

    return (this.x / this.y).toFixed(1);
  }
}


class Main {

  static execute() {
    const controle = Number(lines[0]);

    for (let i = 1; i <= controle; i++) {
      const [x, y] = lines[i].trim().split(' ').map(Number);

      const calculo = new Calculo(x, y);

      console.log(calculo.calcular());
    }
  }
}


Main.execute();
