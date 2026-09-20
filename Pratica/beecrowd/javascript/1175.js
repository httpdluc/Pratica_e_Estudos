class Main{
  static execute(){
    let y = lines.length-1;
    for(let i=0; i<lines.length ; i++){
      const entrada = Number(lines[y])
      console.log(`N[${i}] = ${entrada}`)
      y--
    }
  }
}
Main.execute()