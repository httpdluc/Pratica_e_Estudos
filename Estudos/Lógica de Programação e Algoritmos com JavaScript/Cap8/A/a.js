const frm = document.querySelector('form');
const msg = document.querySelector('pre');

frm.addEventListener('submit', (e) => {
    e.preventDefault()

    const nome = frm.inNome.value.trim();
    const idade = Number(frm.inIdade.value);
    
    const tracos = retornarTracos(nome);
    const categoria = categorizarAluno(idade);

    msg.innerText = `${nome.toUpperCase()}\n${tracos}\n${categoria}`
})

const retornarTracos = (nome) => {
    let tracos='';
    for(let i = 0 ; i<nome.length ; i++){
        tracos += '-'
    }

    return tracos;
}

const categorizarAluno = (idade) => {
    let texto = '';

    if(idade<13){
        texto = 'Infantil'
    }else if(idade>=18){
        texto = 'Adulto'
    }else{
        texto = 'Juvenil'
    }

    return texto;
}
