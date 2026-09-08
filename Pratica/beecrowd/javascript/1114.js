class Main {
  static execute(){
    for(let i=0 ; i<=lines.length ; i++){
      if(lines[i] === '2002'){
        console.log('Acesso Permitido');
        break;
      }else{
        console.log('Senha Invalida');
      }
    }
  }
}
Main.execute()