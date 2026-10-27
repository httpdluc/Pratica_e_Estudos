const frm = document.querySelector('form')
const clubes = document.querySelector('#outClubes')
const tabela = document.querySelector('table')

frm.addEventListener('submit', (e) => {
    e.preventDefault();

    const time = frm.inClube.value.toLowerCase().trim();

    const h5 = document.createElement('h5')
    const txt = document.createTextNode(time)

    h5.appendChild(txt)
    clubes.appendChild(h5)

    frm.inClube.value = ""
    frm.inClube.focus()
})

frm.montarTabela.addEventListener('click', () => {

    const corpoTabela = document.querySelectorAll('h5')
    const title = document.querySelector('h2')

    if (corpoTabela.length % 2 != 0) {

        if (!title) {
            const h2 = document.createElement('h2')
            const txt = document.createTextNode('Por gentileza, informar mais um clube')

            h2.appendChild(txt)
            clubes.appendChild(h2)
        }

        return
    }

    if (title) {
        clubes.removeChild(title)
    }

    for (let i = 0; i < corpoTabela.length; i += 2) {

        const linha = tabela.insertRow(-1)

        const cel1 = linha.insertCell(0)
        const cel2 = linha.insertCell(1)

        cel1.innerText = corpoTabela[i].innerText
        cel2.innerText = corpoTabela[i + 1].innerText
    }
    frm.querySelector('[type="submit"]').disabled = true;
    frm.querySelector("[id='montarTabela']").disabled = true;

})

frm.novosClubes.addEventListener('click', () =>{
    window.location.reload();
})