class Main{
  static execute(){
    for(let i=0 ; i<lines.length; i++){
      const entrada = lines[i].split(' ').map(Number);
      const m = entrada[0]
      const n = entrada[1]
    
      const menor = Math.min(m, n)
      const maior = Math.max(m, n)
    
      if(menor <=0){
        break;
      }

      let soma = 0;
      let texto = '';

      for(let x=menor ; x<=maior ; x++){
        soma += x;
        texto += x + ' ';
      }
      console.log(`${texto}Sum=${soma}`)
    }
  }
}
Main.execute()