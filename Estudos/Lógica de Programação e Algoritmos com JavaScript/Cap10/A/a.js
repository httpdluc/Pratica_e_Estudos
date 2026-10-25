const frm = document.querySelector('form')
const imagem = document.querySelector('#outImg')

frm.addEventListener('submit', (e) => {
    e.preventDefault()
    
    const idade = frm.inIdade.value;

    const num = [];

    for(let i=0 ; i<idade.length ; i++){
        num.push(idade.charAt(i))
    }

    frm.inIdade.value='';
    frm.inIdade.focus();
    frm.querySelector('[type="submit"]').disabled = true;

    inserirNumeros(num)
})

const inserirNumeros = (num) => {

    for(let i=0; i<num.length ; i++){
    
        const img = document.createElement('img')
        img.src = `./img/${num[i]}.png`
        imagem.appendChild(img) 
    }
}

frm.inReset.addEventListener('click', () =>{
    window.location.reload()
})