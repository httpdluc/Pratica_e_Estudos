const space = " "
    
const [cod1, qtd1, valor1] = lines[0].split(space)
const [cod2, qtd2, valor2] = lines[1].split(space)

const res = (qtd1 * valor1) + (qtd2 * valor2);

console.log(`VALOR A PAGAR: R$ ${res.toFixed(2)}`);
