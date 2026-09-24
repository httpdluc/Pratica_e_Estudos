const frm = document.querySelector('form');
const msg = document.querySelector('pre');

frm.addEventListener('submit', (e) => {
    e.preventDefault();

    const frase = frm.inFrase.value.trim();

    let texto = '';
    let verif = 0;

    for(let i=frase.length ; i>-1 ; i--){
        texto+=frase.charAt(i)
    }

    if(texto != frase){
        texto= `${frase}, não é um palíndromo`
        return
    }

    msg.innerText = `${texto}, é um palíndromo`
})