class Main {
  static execute() {
    const lines = ['1', '2', '3', '4', '5', '0'];

    for (let k=0 ; k<lines.length ; k++) {
      const n = Number(lines[k]);

      if (n === 0) {
        break;
      }

      for (let i=0 ; i<n ; i++) {
        let row = [];

        for (let j=0 ; j<n ; j++) {
          const value = Math.min(
            i+1,
            j+1,
            n-i,
            n-j
          );
          row.push(String(value).padStart(3, ' '));
        }
        console.log(row.join(' '));
      }

      console.log();
    }
  }
}

Main.execute();
