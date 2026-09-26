const frm = document.querySelector('form');
const msgData = document.querySelector('h3');
const msgValor = document.querySelector('h4');

frm.addEventListener('submit', (e) => {
    e.preventDefault();

    const valor = Number(frm.inValor.value);
    const desconto = (valor-(valor*0.2));

    const data = frm.inData.value;
    const venc = new Date;
    const partes = data.split('-')

    venc.setDate(Number(partes[2]));
    venc.setMonth(Number(partes[1])-2);
    venc.setFullYear(Number(partes[0]))

    venc.setMonth(venc.getMonth()+3);

    msgData.innerText = `Data limite para pagamento com desconto: ${venc.getDate()}/${venc.getMonth()}/${venc.getFullYear()}`
    msgValor.innerText = `Valor com Desconto R$: ${desconto.toFixed(2)}`
})