const frm = document.querySelector('form');
const msg = document.querySelector('pre');

frm.addEventListener('submit', (e) => {
    e.preventDefault();

    const produto = frm.inProdutos.value.trim().toLowerCase();

    if(localStorage.getItem('produtoNome')){
        const produtoNome = localStorage.getItem('produtoNome') + ';' + produto;
        localStorage.setItem('produtoNome', produtoNome)
    }else{
        localStorage.setItem('produtoNome', produto)
    }

    frm.inProdutos.value = ''
    frm.inProdutos.focus()

    mostrarLista()
})

const mostrarLista = () =>{

    const produtos = localStorage.getItem('produtoNome').split(';').sort()
    let lista = ''

    for(const produto of produtos){
        lista+= produto + '\n'
    }


    msg.innerText = lista

}
frm.limpar.addEventListener('click', () => {
    localStorage.clear();

    msg.innerText =''
})

window.addEventListener('load', mostrarLista)



