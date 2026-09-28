class Main {
  static execute() {
    const controle = Number(lines[0]);

    for (let i=1 ; i<=controle; i++) {
      const [pa, pb, g1, g2] = lines[i].split(' ').map(Number);

      let populacaoA = pa;
      let populacaoB = pb;
      let anos = 0;

      while (populacaoA <= populacaoB && anos <= 100) {
        populacaoA = Math.floor(populacaoA + populacaoA * (g1 / 100));
        populacaoB = Math.floor(populacaoB + populacaoB * (g2 / 100));

        anos++;
      }

      if (anos > 100) {
        console.log('Mais de 1 seculo.');
      } else {
        console.log(`${anos} anos.`);
      }
    }
  }
}

Main.execute();
