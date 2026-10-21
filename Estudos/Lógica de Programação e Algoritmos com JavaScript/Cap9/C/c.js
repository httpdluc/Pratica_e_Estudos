const frm = document.querySelector('form');
const msgPendentes = document.querySelector('h3');
const msgTarefa = document.querySelector('h4');

frm.addEventListener('submit', (e) => {
    e.preventDefault();

    const tarefa = frm.inTarefa.value.toLowerCase().trim();

    if(localStorage.getItem('tarefaNome')){
        const tarefaNome = localStorage.getItem('tarefaNome') + ';' + tarefa;
        localStorage.setItem('tarefaNome', tarefaNome);
    }else{
        localStorage.setItem('tarefaNome', tarefa);
    }

    contadorTarefas();
    exibirTarefa();

    frm.inTarefa.value = '';
    frm.inTarefa.focus();
});

const contadorTarefas = () => {

    if(!localStorage.getItem('tarefaNome')){
        msgPendentes.innerText = "Serviços Pendentes: 0";
        return;
    }

    const tarefas = localStorage.getItem('tarefaNome').split(';');

    msgPendentes.innerText = `Serviços Pendentes: ${tarefas.length}`;
}

const exibirTarefa = () => {

    if(!localStorage.getItem('tarefaNome')){
        msgTarefa.innerText = "";
        return;
    }

    const tarefas = localStorage.getItem('tarefaNome').split(';');

    msgTarefa.innerText = tarefas[0];
}

frm.apagar.addEventListener('click', () => {

    const tarefas = localStorage.getItem('tarefaNome').split(';');

    tarefas.shift();

    localStorage.setItem('tarefaNome', tarefas.join(';'));

    contadorTarefas();
    exibirTarefa();

})

window.addEventListener('load', () => {
    contadorTarefas();
    exibirTarefa();
})