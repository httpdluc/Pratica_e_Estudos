const notas = lines[0].split(" ").map(Number)
const pesos = [2, 3, 4, 1]

const somaPesos = (total, peso) => total + peso
const totalPesos = pesos.reduce(somaPesos,0)

let somaNotas = (total, nota, indice) => total + (nota * pesos[indice])
const totalNotas = notas.reduce(somaNotas,0)

const media = totalNotas / totalPesos

console.log(`Media: ${media.toFixed(1)}`)

if(media >= 7 ){
    console.log(`Aluno aprovado.`)
}else if(media >= 5){

    const notaExame = Number(lines[1])

    console.log(`Aluno em exame.`)

    console.log(`Nota do exame: ${notaExame.toFixed(1)}`)

    const mediaExame = (media + notaExame) / 2

    if(mediaExame >= 5){
        console.log(`Aluno aprovado.`)
    }else{
        console.log(`Aluno reprovado.`)
    }

    console.log(`Media final: ${mediaExame.toFixed(1)}`)

}else{
    console.log(`Aluno reprovado.`)
}