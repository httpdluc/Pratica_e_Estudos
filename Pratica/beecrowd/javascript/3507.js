class Main {
  static execute() {

    const animais = Number(lines[0]);
    const patas = Number(lines[1]);

    const tigres = (patas - 2 * animais) / 2;
    const gansos = animais - tigres;

    console.log(tigres);
    console.log(gansos);
  }
}

Main.execute();
