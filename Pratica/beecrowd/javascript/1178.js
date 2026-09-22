class Main {
  static execute() {
    const lines = ['7716049313271.5625'];
    const numero = parseFloat(lines[0]);

    const n = [];

    for (let i = 0; i < 100; i++) {
      if (i === 0) {
        n[i] = numero;
      } else {
        n[i] = n[i - 1] / 2;
      }

      console.log(`N[${i}] = ${n[i].toLocaleString('en-US', {
        minimumFractionDigits: 4,
        maximumFractionDigits: 4,
        useGrouping: false
      })}`);
    }
  }
}

Main.execute();
