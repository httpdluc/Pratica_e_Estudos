class Main{
  static execute(){
    for(let i=0; i<lines.length;i++){
      const entrada = Number(lines[i])
      if(entrada<1){
        console.log(`X[${i}] = 1`)
      }else{
        console.log(`X[${i}] = ${entrada}`)
      }
    }
  }
}
Main.execute()