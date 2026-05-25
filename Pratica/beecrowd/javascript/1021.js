const valor = lines[0]

const listNotas = [100, 50, 20, 10, 5, 2, 1, 0.50, 0.25, 0.10, 0.05, 0.01]

const quantEspecie = (valor, especie) => Math.trunc(valor / especie);
const sobra = (valor, especie) => (valor % especie).toFixed(2);

const calc = (valor, especies) => {
    const listEspecies = especies.map(especie =>{
        const quantidade = quantEspecie(valor, especie)
        valor = sobra(valor, especie)
        return{
            especie: especie,
            quantidade: quantidade
        }
    })
    return listEspecies
}

const exibir = () => {
    const especies = calc(valor, listNotas)
    const notas = especies.slice(0, 6)
    const moedas = especies.slice(6, 12)
    console.log("NOTAS")
    notas.forEach(nota => console.log(`${nota.quantidade} nota(s) de R$ ${nota.especie.toFixed(2)}`));
    console.log("MOEDAS:")
    moedas.forEach(moeda => console.log(`${moeda.quantidade} moeda(s) de R$ ${moeda.especie.toFixed(2)}`));
}

exibir()
