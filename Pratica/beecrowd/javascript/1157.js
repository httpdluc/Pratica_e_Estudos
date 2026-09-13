class Main{
  static execute(){

    const entrada = Number(lines[0])

    for(let i=1; i<=entrada ; i++){
      if(entrada % i === 0){
        console.log(i)
      }
    }

  }
}

Main.execute()