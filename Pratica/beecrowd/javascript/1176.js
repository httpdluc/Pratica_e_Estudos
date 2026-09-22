class Main {
  static execute() {
    const lines = ['3', '0', '4', '2'];

    const controle = Number(lines[0]);

    const fib = new Array(61);

    fib[0] = 0;
    fib[1] = 1;

    for (let i = 2; i <= 60; i++) {
      fib[i] = fib[i - 1] + fib[i - 2];
      console.log(fib[i])
    }

    for (let i = 1; i <= controle; i++) {
      const entrada = Number(lines[i]);

      console.log(`Fib(${entrada}) = ${fib[entrada]}`);
    }
  }
}

Main.execute();
