class Main {
  static execute() {
    const [hInicial, mInicial, hFinal, mFinal] = lines[0].split(' ').map(Number);

    const tInicial = ((hInicial * 60) + mInicial) * 60;
    const tFinal = ((hFinal * 60) + mFinal) * 60;

    let saida = 0;

    if (tInicial === tFinal) {
      saida = 86400;
    } else if (tInicial > tFinal) {
      saida = (86400 - tInicial) + tFinal;
    } else {
      saida = tFinal - tInicial;
    }

    const horas = Math.floor(saida / 3600);
    const minutos = Math.floor((saida % 3600) / 60);

    console.log(`O JOGO DUROU ${horas} HORA(S) E ${minutos} MINUTO(S)`);
  }
}

Main.execute();
