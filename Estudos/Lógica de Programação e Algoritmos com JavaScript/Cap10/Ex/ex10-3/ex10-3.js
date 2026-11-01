const frm = document.querySelector('form')
const tabela = document.querySelector('table')

frm.addEventListener('submit', (e) => {
    e.preventDefault()

    const titulo = frm.inTitulo.value;
    const genero = frm.inGenero.value;

    inserirLinhas(titulo, genero);
    gravarFilmes(titulo, genero);

    frm.reset();
    frm.inTitulo.focus();
})

const inserirLinhas = (titulo, genero) => {
    const linha = tabela.insertRow(-1);

    const col1 = linha.insertCell(0)
    const col2 = linha.insertCell(1)
    const col3 = linha.insertCell(2)

    col1.innerText = titulo;
    col2.innerText = genero;
    col3.innerHTML = '<i class="excluir" title="Excluir">&#10008;</i>'
}

const gravarFilmes = (titulo, genero) => {

    if(localStorage.getItem('tituloNome')){
        const tituloNome = localStorage.getItem('tituloNome') + ';' + titulo;
        const generoNome = localStorage.getItem('generoNome') + ';' + genero;

        localStorage.setItem('tituloNome', tituloNome)
        localStorage.setItem('generoNome', generoNome)
    }else{
        localStorage.setItem('tituloNome', titulo);
        localStorage.setItem('generoNome', genero);
    }
}

tabela.addEventListener('click', (e) => {
    if(e.target.classList.contains('excluir')){

       e.target.parentElement.parentElement.remove()

       localStorage.removeItem('tituloNome')
       localStorage.removeItem('generoNome')

       for(let i=0 ; i<tabela.rows.length ; i++){
        const titulo = tabela.rows[i].cells[0].innerText;
        const genero = tabela.rows[i].cells[1].innerText;

        gravarFilmes(titulo, genero)
       }
    }
})

window.addEventListener('load', () => {
    
    if(!localStorage.getItem('tituloNome')) return

    const titulo = localStorage.getItem('tituloNome').split(';');
    const genero = localStorage.getItem('generoNome').split(';');

    for(let i=0 ; i<titulo.length ; i++){
        inserirLinhas(titulo[i], genero[i])
    }
})