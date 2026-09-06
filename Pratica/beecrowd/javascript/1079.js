class Main{
  static execute(){

    const controle =  Number(lines[0])

    for(let i=1 ; i <= controle ; i++){
      const caso = lines[i].split(' ').map(Number)

      const calculo = ((caso[0]*2)+(caso[1]*3)+(caso[2]*5))/10
      console.log(calculo.toFixed(1))
    }
  }
}

Main.execute();
