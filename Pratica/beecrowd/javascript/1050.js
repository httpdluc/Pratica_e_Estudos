class Main{
  static execute(){
    const entrada = Number(lines[0])

    let saida=''

    switch(true){
      case entrada === 61:
        saida = 'Brasilia'
      break;
      case entrada === 71:
        saida = 'Salvador'
      break;
      case entrada === 11:
        saida = 'Sao Paulo'
      break;
      case entrada === 21:
        saida = 'Rio de Janeiro'
      break;
      case entrada === 32:
        saida = 'Juiz de Fora'
      break;
      case entrada === 19:
        saida = 'Campinas'
      break;
      case entrada === 27:
        saida = 'Vitoria'
      break;
      case entrada === 31:
        saida = 'Belo Horizonte'
      break;
      default:
        saida = 'DDD nao cadastrado'
      break;
    }
    console.log(saida);
  }
}

Main.execute()