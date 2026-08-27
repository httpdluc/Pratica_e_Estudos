const frm = document.querySelector('form');
const msg = document.querySelector('h3');
const ntf = document.querySelector('pre');

const numeros = [];

frm.addEventListener('submit', (e) => {
    e.preventDefault()

    let texto = '';

    const numero = Number(frm.inNumeros.value);

    if(numeros.includes(numero) == true){
        ntf.innerText = "Tentar outro número.";
        frm.inNumeros.value = '';
        return
    }else{
        numeros.push(numero);
        texto += `Números: ${numeros.join(", ")}.`
    }
    
    frm.inNumeros.value = ''
    msg.innerText = texto
    ntf.innerText = 'Atenção... Os números NÃO estão em ordem!'
})

frm.btOrdenar.addEventListener('click', () => {
    numeros.sort((a,b) => a - b)

    msg.innerText = `Números: ${numeros.join(', ')}.`
    ntf.innerText = 'Atenção... Os números estão em ordem crescente!'
})