class Main{
  static executar(){

    const entrada = lines.map(linha => linha.trim());

    let saida = ''

    function ave(tipo){
      if(tipo === 'carnivoro'){
        saida = 'aguia';
      }else{
        saida = 'pomba';
      }
    }
    function mamifero(tipo){
      if(tipo === 'onivoro'){
        saida = 'homem';
      }else{
        saida = 'vaca';
      }
    }
    function inseto(tipo){
      if(tipo === 'hematofago'){
        saida = 'pulga';
      }else{
        saida = 'lagarta';
      }
    }
    function anelideo(tipo){
      if(tipo === 'hematofago'){
        saida = 'sanguessuga';
      }else{
        saida = 'minhoca';
      }
    }

    switch(true){
      case entrada[1] === 'ave':
        ave(entrada[2])
      break;
      case entrada[1] === 'mamifero':
        mamifero(entrada[2])
      break;
      case entrada[1] === 'inseto':
        inseto(entrada[2])
      break;
      case entrada[1] === 'anelideo':
        anelideo(entrada[2])
      break;
    }
    console.log(saida)
  }
}

Main.executar()