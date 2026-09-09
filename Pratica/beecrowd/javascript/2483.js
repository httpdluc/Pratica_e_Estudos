class Feliz{
 constructor(i){
  this.i=i;
  }

  natal() {
    let a = '';

    for(let x=0; x!=this.i; x++){
     a+='a'  
    }
    return console.log(`Feliz nat${a}l!`)
  }
}

class Main{
  static execute(){

    const entrada = Number(lines[0])

    const feliz = new Feliz(entrada)

    feliz.natal();
  }
}

Main.execute();