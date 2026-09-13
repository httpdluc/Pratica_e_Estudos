class Main{
  static execute(){

    const controle = Number(lines[0])
    let t = 0;

    for(let i=0 ; i<1000; i++){
      if(t===controle){
        t=0
      }
      console.log(`N[${i}] = ${t}`)
      t++
    }
    
  }
}
Main.execute()