class Main {
  static execute() {

    const entrada = Number(lines[0])
    let imposto = 0

    if (entrada <= 2000) {
      console.log('Isento')
      return
    }

    if (entrada > 2000) {
      const faixa = Math.min(entrada, 3000) - 2000
      imposto += faixa * 0.08
    }

    if (entrada > 3000) {
      const faixa = Math.min(entrada, 4500) - 3000
      imposto += faixa * 0.18
    }

    if (entrada > 4500) {
      const faixa = entrada - 4500
      imposto += faixa * 0.28
    }

    console.log(`R$ ${imposto.toFixed(2)}`)
  }
}

Main.execute()
