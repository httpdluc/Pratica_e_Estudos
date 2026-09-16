class Main {
  static execute() {
    const [x, y] = lines[0].split(' ').map(Number);

    let linha = [];

    for (let i = 1; i <= y; i++) {
      linha.push(i);

      if (linha.length === x) {
        console.log(linha.join(' '));
        linha = [];
      }
    }
  }
}

Main.execute();
