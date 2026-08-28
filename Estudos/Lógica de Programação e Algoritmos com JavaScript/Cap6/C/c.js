const frm = document.querySelector('form');
const msg = document.querySelector('h4');
const ntf = document.querySelector('pre')

const pessoas = [];
let corte = 0;


frm.addEventListener('submit', (e) => {
    e.preventDefault();

    const aluno = frm.inAluno.value;
    const nota = Number(frm.inNota.value);

    pessoas.push({aluno, nota});
    pessoas.sort((a,b) => a.aluno.localeCompare(b.aluno))

    frm.btListar.dispatchEvent(new Event ('click'))

    frm.inAluno.value = '';
    frm.inNota.value = '';

    frm.inAluno.focus()
})

frm.btListar.addEventListener('click', () => {
     let texto = '';

    for(const p of pessoas){
        texto += `${p.aluno} - ${p.nota}\n`
    }

    msg.innerText = texto
})

frm.btCorte.addEventListener('click', () => {
    let n = Number(frm.inAprovacao.value);

    if(n <= 0){
        ntf.innerText = 'Por favor, Informar a nota de corte.'
    }else{
        corte = n;
        ntf.innerText = `A nota de corte é ${n}!`
        frm.inAprovacao.value = ''
    }
})

frm.btEtapa.addEventListener('click', () => {

    let texto = ''
    
    if(corte == 0){
        ntf.innerText = 'Por favor, Informar a nota de corte.'
        return
    }
    const infoNota = pessoas.filter(aux => aux.nota >= corte)

    if(infoNota.length == 0){
        ntf.innerText = 'Não há alunos aprovados'
        return
    }

    infoNota.reverse((a , b) => a.nota - b.nota)

    for(const info of infoNota){
        texto += `${info.aluno} - ${info.nota}\n`
    }

    msg.innerText = texto
})

