class Main {
  static execute() {
    for (const line of lines) {
      if (line.trim() === '') continue;
      const n = Number(line);
    
      for (let j = 0; j < n; j++) {
        let row = '';
        for (let k = 0; k < n; k++) {
          if (j + k === n - 1) row += '2';
          else if (j === k) row += '1';
          else row += '3';
        }
        out.push(row);
      }
    }
    console.log(out.join('\n'));
  }
}

Main.execute();
