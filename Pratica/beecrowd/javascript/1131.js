class Main {
  static execute() {

    let grenais = 0;
    let inter = 0;
    let gremio = 0;
    let empates = 0;

    let i = 0;

    while (true) {

      const entrada = lines[i++].trim().split(' ').map(Number);

      const golsInter = entrada[0];
      const golsGremio = entrada[1];

      grenais++;

      if (golsInter>golsGremio) {
        inter++;
      } else if (golsGremio>golsInter) {
        gremio++;
      } else {
        empates++;
      }

      console.log('Novo grenal (1-sim 2-nao)');

      const opcao = Number(lines[i++]);

      if (opcao===2) {
        break;
      }
    }

    console.log(`${grenais} grenais`);
    console.log(`Inter:${inter}`);
    console.log(`Gremio:${gremio}`);
    console.log(`Empates:${empates}`);

    if (inter > gremio) {
      console.log('Inter venceu mais');
    } else if (gremio > inter) {
      console.log('Gremio venceu mais');
    } else {
      console.log('Nao houve vencedor');
    }
  }
}

Main.execute();
