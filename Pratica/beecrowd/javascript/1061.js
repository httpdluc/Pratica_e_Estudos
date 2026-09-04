class Main {
  static execute() {

    const entrada = Number(lines[0].split(' ')[1]);
    const [horaEntrada, minutoEntrada, segundoEntrada] =
      lines[1].split(':').map(Number);

    const saida = Number(lines[2].split(' ')[1]);
    const [horaSaida, minutoSaida, segundoSaida] =
      lines[3].split(':').map(Number);

    const inicio =
      entrada * 24 * 60 * 60 +
      horaEntrada * 60 * 60 +
      minutoEntrada * 60 +
      segundoEntrada;

    const fim =
      saida * 24 * 60 * 60 +
      horaSaida * 60 * 60 +
      minutoSaida * 60 +
      segundoSaida;

    let diferenca = fim - inicio;

    const dias = Math.floor(diferenca / 86400);
    diferenca %= 86400;

    const horas = Math.floor(diferenca / 3600);
    diferenca %= 3600;

    const minutos = Math.floor(diferenca / 60);
    const segundos = diferenca % 60;

    console.log(
      `${dias} dia(s)\n${horas} hora(s)\n${minutos} minuto(s)\n${segundos} segundo(s)`
    );
  }
}

Main.execute();
