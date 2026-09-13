class Main {
  static execute() {
    for (let n = 0; n <= 20; n += 2) {
      const i = n / 10

      console.log(`I=${i} J=${i + 1}`)
      console.log(`I=${i} J=${i + 2}`)
      console.log(`I=${i} J=${i + 3}`)
    }
  }
}

Main.execute()
