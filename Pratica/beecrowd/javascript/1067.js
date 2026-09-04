class Main{
  static execute(){
    
    const entrada = Number(lines[0]);

    let i = 0;

    while(i<=entrada){
      if(i%2 != 0){
        console.log(`${i}`)
      }
      i++
    }
  }
}

Main.execute();