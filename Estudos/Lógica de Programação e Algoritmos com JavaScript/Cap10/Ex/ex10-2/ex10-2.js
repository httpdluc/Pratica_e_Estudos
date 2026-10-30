const frm = document.querySelector('form');
const imagem = document.querySelector('#img')

frm.addEventListener('submit', (e) =>{
    e.preventDefault()

    const resposta = Number(frm.inResposta.value);
    const moedas = document.querySelectorAll('img');

    let totalReais = 0;

    for(const moeda of moedas){
        if(moeda.alt=='Moeda de um real'){
            totalReais+=1.0
        }else if(moeda.alt=='Moeda de cinquenta centavos'){
            totalReais+=0.50
        }else if(moeda.alt=='Moeda de vinte e cinco centavos'){
            totalReais+= 0.25
        }else if(moeda.alt=='Moeda de dez centavos'){
            totalReais+= 0.10
        }else{
            totalReais+= 0.05
        }
    }
    let mensagem='';
    
    if(resposta == totalReais){
        mensagem = 'Parabéns! Você acertou o valor!!!'
    }else{
        mensagem = 'Você errou o valor era: R$'+ totalReais.toFixed(2) +'! Tente novamente!'
    }

    const h5 = document.createElement('h5');
    const texto = document.createTextNode(mensagem)
    h5.appendChild(texto);
    frm.appendChild(h5);

    frm.inResposta.value=''

    frm.querySelector("[type='submit']").disabled=true;
    
    
    
})

frm.newGame.addEventListener('click', () => {
    window.location.reload()
})

const gerarMoedas = (num, moeda, textoAlt) => {
    for(let i=1 ; i<=num ; i++){
        const img = document.createElement('img');
        img.src= './img/'+ moeda;
        img.alt = textoAlt;
        imagem.appendChild(img)
    }
    const br = document.createElement('br')
    imagem.appendChild(br)
}

window.addEventListener('load', () => {

    const num100 = Math.ceil(Math.random()*5);
    const num50 = Math.ceil(Math.random()*5);
    const num25 = Math.ceil(Math.random()*5);
    const num10 = Math.ceil(Math.random()*5);
    const num05 = Math.ceil(Math.random()*5);

    const alt100 = 'Moeda de um real';
    const alt50 = 'Moeda de cinquenta centavos';
    const alt25 = 'Moeda de vinte e cinco centavos';
    const alt10 = 'Moeda de dez centavos';
    const alt05 = 'Moeda de cinco centavos';

    gerarMoedas(num100, '100.png', alt100);
    gerarMoedas(num50, '50.png', alt50);
    gerarMoedas(num25, '25.png', alt25);
    gerarMoedas(num10, '10.png', alt10);
    gerarMoedas(num05, '05.png', alt05);

})