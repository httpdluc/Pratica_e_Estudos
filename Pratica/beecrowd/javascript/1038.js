
const tabela = (codigo) => {
    const tabelaProd = {
        1 : {espec: "Cachorro Quente", preco: 4.0},
        2 : {espec: "X-Salada", preco: 4.5},
        3 : {espec: "X-Bacon", preco: 5.0},
        4 : {espec: "Torrada Simples", preco: 2.0},
        5 : {espec: "refrigerante", preco: 1.5}
    }
    return tabelaProd[codigo]
}

const res = (codigo, quantidade) => {
    const {preco} = tabela(codigo)
    return preco * quantidade
}

const total = (valores) => {
    const [codigo, quantidade] = valores.split(" ")
    const valorTotal = res(codigo, quantidade)
    console.log(`Total: R$ ${valorTotal.toFixed(2)}`)
}

total(lines[0])
    