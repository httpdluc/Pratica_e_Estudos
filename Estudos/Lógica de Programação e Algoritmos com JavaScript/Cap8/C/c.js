const frm = document.querySelector('form');
const msg = document.querySelector('pre');

frm.addEventListener('submit', (e) => {
    e.preventDefault();

    const valor = Number(frm.inValor.value);
    const total = calcularDesconto(valor);

    msg.innerText = `Total a Pagar: ${total}`
})

const calcularDesconto = (valor) => {

    let total = valor;

    if(frm.inNao.checked){
        total = valor - (valor * 0.10);
    } else if(frm.inSim.checked){

        const tipo = frm.inConvenio.value;

        if(tipo == "amigos"){
            total = valor - (valor * 0.20);
        } else if(tipo == "saude"){
            total = valor - (valor * 0.50);
        }
    }

    return total;
}