class Main{
  static execute(){

    for(let i=0 ; i<lines.length ; i++){
      const entrada = lines.map(line => line.replace(/\s+/g, ''))

      console.log(entrada[i])
    }
  }
}
Main.execute()