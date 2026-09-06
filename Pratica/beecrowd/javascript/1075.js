class Main{
  static execute(){
    const entrada =  Number(lines[0])

    for(let i=1 ; i<=10000 ; i++){
      if(i%entrada == 2){
        console.log(i)
      }
    }
  }
}

Main.execute();