class Main{
  static execute(){
    for(let i=0; i<100 ; i++){
      const entrada = Number(lines[i])
      if(entrada<=10){
        console.log(`A[${i}] = ${(entrada).toFixed(1)}`)
      }
    }
  }
}
Main.execute()