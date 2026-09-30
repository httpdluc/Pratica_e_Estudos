class Main {
  static execute() {
    /*
    let lines = [
        ["S", 12, 45, 7, 83, 21, 9, 56, 34, 78, 3, 91],
        [42, 17, 65, 8, 29, 74, 51, 6, 88, 35, 14, 60],
        [23, 97, 41, 16, 52, 3, 69, 27, 84, 11, 58, 32],
        [76, 5, 38, 92, 19, 44, 61, 28, 7, 53, 86, 20],
        [31, 68, 13, 47, 99, 24, 55, 9, 72, 36, 81, 4],
        [15, 49, 63, 22, 87, 34, 10, 71, 26, 59, 43, 95],
        [8, 57, 29, 73, 18, 46, 90, 35, 62, 11, 77, 25],
        [54, 2, 68, 39, 83, 17, 45, 96, 21, 64, 30, 79],
        [33, 85, 12, 48, 70, 6, 91, 27, 56, 19, 42, 88],
        [67, 14, 52, 31, 9, 76, 43, 58, 24, 95, 37, 61],
        [20, 78, 5, 64, 36, 89, 13, 47, 72, 28, 54, 16],
        [93, 26, 41, 7, 59, 82, 34, 15, 68, 23, 50, 97]
    ];
    */
    const operacao = lines[0]
    let soma = 0;
    let quantidade = 0;
    let controle = 12

    for (let linha=0 ; linha<12; linha++) {
      for (let coluna=controle ; coluna<12; coluna++) {
        const indice = 1 + linha * 12 + coluna;

        soma+=Number((lines[indice]));
        quantidade++;
      }
      controle--
    }

    const resultado = operacao==='S' ? soma : soma/quantidade;

    console.log(resultado.toFixed(1));
  }
}

Main.execute();
