let [a, b, c] = lines[0].split(" ").map(Number)
    
const ordenarLados = (lados) => lados.sort((x, y) => y - x)
const verificarTriangulo = ([a, b, c]) => a < b + c

const triangulos = ([a, b, c]) => {
    const mensagem = []
    if(a >= b + c){
        mensagem.push("NAO FORMA TRIANGULO")
    }
    if(a*a == b*b + c*c){
        mensagem.push("TRIANGULO RETANGULO")
    }
    if(a*a > b*b + c*c){
        mensagem.push("TRIANGULO OBTUSANGULO")
    }
    if(a*a < b*b + c*c){
        mensagem.push("TRIANGULO ACUTANGULO")
    }if(a==b && b == c){
        mensagem.push("TRIANGULO EQUILATERO")
    } else if(a == b || a == c || b == c){
        mensagem.push("TRIANGULO ISOSCELES")
    }
    return mensagem.join("\n")
}

const principal = (a, b, c)=> {
    const ladosOrdenados = ordenarLados([a, b, c])
    if(verificarTriangulo(ladosOrdenados)){
        const classificacao = triangulos(ladosOrdenados)
        console.log(classificacao)
    }else{
        console.log("NAO FORMA TRIANGULO")
    }
}

principal(a,b,c) 