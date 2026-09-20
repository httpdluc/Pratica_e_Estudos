class Main{
  static execute(){
    let entrada = Number(lines[0])
    for(let i=0; i<10;i++){
      console.log(`N[${i}] = ${entrada}`)
      entrada+=entrada
    }
  }
}
Main.execute()