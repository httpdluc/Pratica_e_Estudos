const problem = (lines) => {

const nDias = (calculo) => {
    const ano = Math.trunc(calculo/365);
    calculo %= 365;
    const mes = Math.trunc(calculo/30);
    calculo %= 30;
    const dias = calculo;

    return {
        ano,
        mes,
        dias
    }

} 

const idade = nDias(lines[0]);

console.log(`${idade.ano} ano(s)\n${idade.mes} mes(es)\n${idade.dias} dia(s)`);
}