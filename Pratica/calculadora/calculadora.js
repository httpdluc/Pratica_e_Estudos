const res = document.querySelector('.js-visor')

const numeros = document.querySelector('.js-numeros');
const sinais = document.querySelector('.js-sinais');
const deletar = document.querySelector('.js-deletar');

let numero='';
let sinal='';


numeros.addEventListener('click', (event) => {
  const sel = event.target.value;
  if(sel!== undefined && !isNaN(sel) || sel === '.'){
    numero += sel
    res.innerHTML = `<p>${numero}</p>`
  }
})

sinais.addEventListener('click', (event) => {
  const sin = event.target.value;
  sinal+= sin;
  res.innerHTML = `<p>${sinal}</p>`
})

function selecionado (){
  console.log('selecionado')
}