class Main{
  static execute(){

    const controle =  Number(lines[0])

    for(let i=1 ; i<=controle ; i++){
      const numero = Number(lines[i])
      if(numero%2==0){
        if(numero<0){
          console.log(`EVEN NEGATIVE`)
        }else if(numero>0){
          console.log(`EVEN POSITIVE`)
        }else{
          console.log(`NULL`)
        }
      }else{
        if(numero<0){
          console.log(`ODD NEGATIVE`)
        }else if(numero>0){
          console.log(`ODD POSITIVE`)
        }
      }
    }
  }
}

Main.execute();