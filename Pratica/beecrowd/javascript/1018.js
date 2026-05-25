const vTotal= lines[0];

const notasDispo = [100, 50, 20, 10, 5, 2, 1];

function quantNotas (valor, nota){
    const quantidade = Math.floor(valor/nota);
    return quantidade;

}

function quantPorNota (valor, notas){
    const listNotas = notas.map(nota => {
        const quantidade = quantNotas(valor, nota)
        valor = valor - (quantidade * nota)
        return{nota,quantidade};
    })
    return listNotas

}

function result (valor,notas){
    const i = quantPorNota(valor, notas)
    console.log(valor)
    i.forEach(({quantidade, nota}) => {
        console.log(`${quantidade} nota(s) de R$ ${nota},00`)
    })
 }

 result(vTotal,notasDispo)