const frm = document.querySelector('form');
const msg = document.querySelector('#msg');

let select = 0

frm.addEventListener('submit', (e) => {
    e.preventDefault();

    const tarefa = frm.inTarefa.value.toLowerCase().trim();
  
    const pre = document.createElement('pre');
    const texto = document.createTextNode(tarefa)
    pre.appendChild(texto);
    msg.appendChild(pre);


    frm.inTarefa.value ='';
    frm.inTarefa.focus();
    
})

frm.selecionar.addEventListener('click', () => {
    const tarefas = msg.children;
    
    if(select >= tarefas.length){
        select = 0;
    }

    for(let i=0 ; i<tarefas.length ; i++){
        const texto = tarefas[i].innerText
        let tipo = '';

        if(select === i){
            tipo = document.createElement('h4')
        }else{
            tipo = document.createElement('pre')
        }
        
        tipo.innerText = texto;
        msg.replaceChild(tipo, tarefas[i])
    }
    select++
})

frm.apagar.addEventListener('click', () => {
    const tarefas = msg.children;

    if(tarefas.length === 0) return;

    let pos = select - 1;

    if(pos < 0){
        pos =tarefas.length-1
    }
    msg.removeChild(tarefas[pos])

    if(select > tarefas.length){
        select = 0
    }    
})

frm.salvar.addEventListener('click', () => {
    const tarefas = msg.children

    const lista = [...tarefas].map(tarefa => tarefa.innerText).join(';');

    localStorage.setItem('tarefas', lista)
    
})

window.addEventListener('load', () => {

    if(!localStorage.getItem('tarefas')) return

    const tarefas = localStorage.getItem('tarefas').split(';');

    tarefas.forEach(t => {
        const pre = document.createElement('pre')
        const texto = document.createTextNode(t)
        pre.appendChild(texto)
        msg.appendChild(pre)
    })
})