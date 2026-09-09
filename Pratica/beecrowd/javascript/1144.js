 class Main {
  static execute() {
    const entrada = Number(lines[0]);

    for (let i = 1; i <= entrada; i++) {
      console.log(i, i ** 2, i ** 3);
      console.log(i, i ** 2 + 1, i ** 3 + 1);
    }
  }
}

Main.execute();
