class Main{
  static executar(){
    const [inicio, fim] = lines[0].split(' ').map(Number);
    let calculo=0;
    if(inicio === fim){
      calculo = 24;
    }else if(inicio > fim){
      calculo = (24-inicio)+fim;
    }else{
      calculo = Math.abs(inicio - fim);
    }
    console.log(`O JOGO DUROU ${calculo} HORA(S)`)
  }
}

Main.executar()