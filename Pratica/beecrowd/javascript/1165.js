class Main {
  static execute() {
    const lines = ['3', '8', '51', '7']
    const controle = Number(lines[0])

    for (let i = 1; i <= controle; i++) {
      const entrada = Number(lines[i])
      let primo = true

      for (let j = 2; j < entrada; j++) {
        if (entrada % j === 0) {
          primo = false
          break
        }
      }

      if (primo) {
        console.log(`${entrada} eh primo`)
      } else {
        console.log(`${entrada} nao eh primo`)
      }
    }
  }
}

Main.execute()
