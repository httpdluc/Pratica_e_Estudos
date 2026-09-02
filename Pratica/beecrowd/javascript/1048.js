class Main{
  static executar(){
    const entrada = Number(lines[0])

    let porcentagem = 0;

    switch(true){
      case entrada <= 400:
        porcentagem = 15
      break;
      case entrada > 400 && entrada <= 800:
        porcentagem = 12
      break;
      case entrada > 800 && entrada <= 1200:
        porcentagem = 10
      break;
      case entrada > 1200 && entrada <= 2000:
        porcentagem = 7
      break;
      case entrada > 2000:
        porcentagem = 4
      break;
    }
      
    const ganho = Math.floor(entrada/100)*porcentagem;
    const total = entrada + ganho;
    
    return console.log(`Novo salario: ${total.toFixed(2)}\nReajuste ganho: ${ganho.toFixed(2)}\nEm percentual: ${porcentagem} %`)
  }
}

Main.executar();