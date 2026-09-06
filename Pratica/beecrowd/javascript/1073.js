class Main {
  static execute() {
    const entrada = Number(lines[0]);

    let i = 2;
    const calculo = 2;

    while(i<=entrada){
      console.log(`${i}^${calculo} = ${Math.pow(i,calculo)}`)
      i+=2
    }
  }
}

Main.execute();
