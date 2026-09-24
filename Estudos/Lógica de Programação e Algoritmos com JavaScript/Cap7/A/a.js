const frm = document.querySelector('form');
const msg = document.querySelector('pre');

frm.addEventListener('submit', (e) => {
    e.preventDefault()

    const mensagem = frm.inMensagem.value.trim();

    let text = '';

    if(mensagem == ''){
        msg.innerText = 'Por gentileza!\nInserir uma mensagem'
        return
    }

    for(let i=0 ; i<mensagem.length ; i+2){
        text += mensagem.charAt(i)
    }
    for(let i=1 ; i<mensagem.length ; i+2){
        text += mensagem.charAt(i)
    }

    msg.innerText = `${text}`
})

frm.addEventListener('click', () => {
    msg.innerText = frm.inMensagem.value;
})