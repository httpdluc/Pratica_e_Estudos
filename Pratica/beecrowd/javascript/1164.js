class Main {
  static execute() {
    const lines = ['3', '1', '5', '28']
    const controle = Number(lines[0])

    for (let i = 1; i <= controle; i++) {
      const entrada = Number(lines[i])
      let valor = 0

      for (let j = 1; j < entrada; j++) {
        if (entrada % j === 0) {
          valor += j
        }
      }

      if (valor === entrada) {
        console.log(`${entrada} eh perfeito`)
      } else {
        console.log(`${entrada} nao eh perfeito`)
      }
    }
  }
}

Main.execute()
