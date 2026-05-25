const [name, sal, vendas] = lines;
    
const comissao = 0.15

const res = Number(sal) + (Number(vendas) * comissao);

console.log(`TOTAL = ${res.toFixed(2)}`);