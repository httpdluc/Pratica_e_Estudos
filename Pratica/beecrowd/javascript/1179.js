class Main {
  static execute() {

    const par = [];
    const impar = [];

    for (let i = 0; i < 15; i++) {
      const entrada = Number(lines[i]);

      if (entrada % 2 === 0) {
        par.push(entrada);

        if (par.length === 5) {
          for (let j = 0; j < par.length; j++) {
            console.log(`par[${j}] = ${par[j]}`);
          }

          par.length = 0;
        }
      } else {
        impar.push(entrada);

        if (impar.length === 5) {
          for (let j = 0; j < impar.length; j++) {
            console.log(`impar[${j}] = ${impar[j]}`);
          }

          impar.length = 0;
        }
      }
    }
    for (let i = 0; i < impar.length; i++) {
      console.log(`impar[${i}] = ${impar[i]}`);
    }

    for (let i = 0; i < par.length; i++) {
      console.log(`par[${i}] = ${par[i]}`);
    }
  }
}

Main.execute();
