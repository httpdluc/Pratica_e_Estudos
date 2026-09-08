class Main {
  static execute() {
    for (let i = 0; i < lines.length; i++) {
      const entrada = lines[i].split(' ').map(Number);
      const x = entrada[0];
      const y = entrada[1];
      if (x === y) {
        return;
      }
      if (x > y) {
        console.log('Decrescente');
      } else {
        console.log('Crescente');
      }
    }
  }
}

Main.execute();
