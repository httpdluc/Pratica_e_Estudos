const frm  = document.querySelector('form');
const msg = document.querySelector('pre');

const apostas = [];

frm.addEventListener('submit', (e) => {
    e.preventDefault();

    const nome = frm.inNome.value;
    const peso = Number(frm.inPeso.value);

    if(verApostas(peso)){
        msg.innerText = `Por gentileza, informar outro peso`
        return
    }

    if(localStorage.getItem('melanciaNome')){
        const melanciaNome = localStorage.getItem('melanciaNome') + ';' + nome
        const melanciaPeso = localStorage.getItem('melanciaPeso') + ';' + peso

        localStorage.setItem('melanciaNome', melanciaNome)
        localStorage.setItem('melanciaPeso', melanciaPeso)
    }else{
        localStorage.setItem('melanciaNome', nome);
        localStorage.setItem('melanciaPeso', peso);
    }
    
    mostrarApostas()
})

const verApostas = (peso) => {

    if(localStorage.getItem('melanciaPeso')){
        const pesos = localStorage.getItem('melanciaPeso').split(';');

        return pesos.includes(peso.toString())
    }else{
        return false
    }

}

const mostrarApostas = () => {
    if(!localStorage.getItem('melanciaNome')){
        msg.innerText = ``
        return
    }
    const nomes = localStorage.getItem('melanciaNome').split(';');
    const pesos = localStorage.getItem('melanciaPeso').split(';');

    let lista = ''

    

    for(let i=0;i<nomes.length;i++){
        lista+= nomes[i] + ' - ' + pesos[i] +'\n'
    }

    msg.innerText =  lista

}

window.addEventListener('load', mostrarApostas)

frm.vencedor.addEventListener('click', () =>{

    const peso = Number(prompt('informe o valor da melancia:'))

    if(!localStorage.getItem('melanciaPeso')){
        msg.innerText = `Não há apostas`
        return
    }

    const nomes = localStorage.getItem('melanciaNome').split(';')
    const pesos = localStorage.getItem('melanciaPeso').split(';')

    let vencedorNome = nomes[0];
    let vencedorPeso = Number(pesos[0]);

    for(let i=0; i< pesos.length ; i++){
        const pesoVenc = Math.abs(vencedorPeso - peso);
        const apostVenc = Math.abs(Number(pesos[i]) - peso);

        if(apostVenc < pesoVenc){
            vencedorNome = nomes[i]
            vencedorPeso = Number(pesos[i])
        }
    }

    msg.innerText = `${vencedorNome} - ${vencedorPeso}`
})

frm.limpar.addEventListener('click', () => {

    if(!localStorage.getItem('melanciaNome')){
        msg.innerText = 'Não há dados para seram apagados.'
        return
    } 
    localStorage.removeItem('melanciaNome')
    localStorage.removeItem('melanciaPeso')

    mostrarApostas()

})