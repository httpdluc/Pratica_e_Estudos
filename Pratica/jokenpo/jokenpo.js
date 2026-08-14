const elemento = document.querySelector('.elements');

const res = document.querySelector('.js-res')
const placar = document.querySelector('.js-placar')

const reset = document.querySelector('.js-bt-reset');
const autoplay = document.querySelector('.js-bt-autoplay')

let placarJogador = 0;
let placarPcPlay= 0;

let parar;
let controleAutoplay = false;

const jogo = (jogada) => {
  const pcPlay = Math.floor(Math.random()*3)+1;

  if(jogada === pcPlay){
    res.innerHTML= '<p>Empate</p>'
  }else if(
    (jogada === 1 && pcPlay === 3) ||
    (jogada === 2 && pcPlay === 1) || 
    (jogada === 3 && pcPlay === 2)
  ){
    res.innerHTML='<p>Vitória</p>'
    placarJogador++;
    placar.innerHTML = `<p class="js-jogador jogador">${placarJogador}</p><p class="sinal">-</p><p class="js-pc pc">${placarPcPlay}</p>`
  }else{
    res.innerHTML='<p>Derrota</p>'
    placarPcPlay++;
    placar.innerHTML = `<p class="js-jogador jogador">${placarJogador}</p><p class="sinal">-</p><p class="js-pc pc">${placarPcPlay}</p>`
  }
}

elemento.addEventListener('click', (event) => {
  const jogada = Number(event.target.value);
  jogo(jogada);
  clearInterval(parar)
  controleAutoplay = false;
})

reset.addEventListener('click', () =>{
  res.innerHTML='<br>'
  placarJogador = 0;
  placarPcPlay=0;
  placar.innerHTML = `<p class="js-jogador jogador">${placarJogador}</p><p class="sinal">-</p><p class="js-pc pc">${placarPcPlay}</p>`
  
  clearInterval(parar)
  controleAutoplay = false;
})


autoplay.addEventListener('click', () => {
  if(!controleAutoplay){
    parar = setInterval(() => {
      const jogadaAleatoria = Math.floor(Math.random()*3)+1;
      jogo(jogadaAleatoria);
    }, 1000)
    controleAutoplay = true;
  }else{
    clearInterval(parar)
    controleAutoplay = false;
  }
})

