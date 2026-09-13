class Main{
  static execute(){

    let alcool = 0;
    let gasolina = 0;
    let diesel = 0;

    for (let i = 0; i < lines.length; i++) {
      let codigo = Number(lines[i].trim());
  
      if (codigo === 1) {
          alcool++;
      } else if (codigo === 2) {
          gasolina++;
      } else if (codigo === 3) {
          diesel++;
      } else if (codigo === 4) {
          break;
      }
    }

    console.log('MUITO OBRIGADO');
    console.log(`Alcool: ${alcool}`);
    console.log(`Gasolina: ${gasolina}`);
    console.log(`Diesel: ${diesel}`);
  }
}

Main.execute()