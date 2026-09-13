class Main{
  static execute(){
    const entrada = lines[0].split(' ').map(Number);

    console.log(((((entrada[0]+entrada[1]-1)+entrada[2])-1)+entrada[3]-1))
  }
}

Main.execute()