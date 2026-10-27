const frm = document.querySelector('form');
const msg = document.querySelector('#outText');

frm.addEventListener('submit', (e) => {
    e.preventDefault()

    const nome = frm.inNome.value.toUpperCase().trim();
    
    if(!nome.includes(' ')) return

    frm.inNome.value=''
    frm.inNome.focus();

    separadorNome(nome);
})

const separadorNome = (nome) => {
    

    const partes = nome.split(' ')
    partes.forEach(p =>{
        const cor = '#' + Math.ceil(Math.random()*16777125).toString(16);
        const h1 = document.createElement('h1');
        const txt = document.createTextNode(p);
        h1.style.color = cor;
        h1.appendChild(txt);
        msg.appendChild(h1);
    })
}