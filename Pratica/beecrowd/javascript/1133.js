class Main{
  static execute(){

    const x = Number(lines[0]);
    const y = Number(lines[1]);

    const menor = Math.min(x, y);
    const maior = Math.max(x, y);

    for(let i=menor+1 ; i<maior ; i++){
      if(i%5==2 || i%5==3){
        console.log(i);
      }
    }
  }
}
Main.execute();