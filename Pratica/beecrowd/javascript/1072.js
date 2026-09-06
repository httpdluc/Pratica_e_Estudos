class Main {
  static execute() {
    const controle = Number(lines[0]);

    let dentro = 0;
    let fora = 0;

    for (let i = 1; i <= controle; i++) {
      const numero = Number(lines[i]);

      if (numero >= 10 && numero <= 20) {
        dentro++;
      } else {
        fora++;
      }
    }

    console.log(`${dentro} in\n${fora} out`);
  }
}

Main.execute();