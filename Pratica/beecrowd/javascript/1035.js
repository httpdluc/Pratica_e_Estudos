const valor = lines[0].split(" ").map(Number)

const res = (a, b, c, d) => {
    if (b > c && d > a && (c + d) > (a + b) && c>0 && d>0 && a%2===0){
        console.log("Valores aceitos")
    }else{
        console.log("Valores nao aceitos")
    }
}

res(...valor)
