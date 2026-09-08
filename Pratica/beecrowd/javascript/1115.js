class Coordenadas {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  descobrirQuadrante() {
    if (this.x > 0 && this.y > 0) {
      return 'primeiro';
    }

    if (this.x < 0 && this.y > 0) {
      return 'segundo';
    }

    if (this.x < 0 && this.y < 0) {
      return 'terceiro';
    }

    return 'quarto';
  }

  estaNaOrigem() {
    return this.x === 0 || this.y === 0;
  }
}

class Main {
  static execute() {
    for (let i = 0; i < lines.length; i++) {

      const entrada = lines[i].split(' ').map(Number);

      const x = entrada[0];
      const y = entrada[1];

      const coordenadas = new Coordenadas(x, y);

      if (coordenadas.estaNaOrigem()) {
        break;
      }

      console.log(coordenadas.descobrirQuadrante());
    }
  }
}

Main.execute();



/*class Main{
  static execute(){

    for(let i=0 ; i<lines.length ; i++){
      const entrada = lines[i].split(' ').map(Number);

      const x = entrada[0]; 
      const y = entrada[1];

      if(x===0 || y===0){
        break;
      }else{
        if(x>0 && y>0){
          console.log('primeiro');
        }else if(x<0 && y>0){
          console.log('segundo');
        }else if(x<0 && y<0){
          console.log('terceiro');
        }else{
          console.log('quarto');
        }
      }
    }
  }
}

Main.execute();
*/