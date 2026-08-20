const digito = document.querySelector('.js-visor')

const numeros = document.querySelector('.js-numeros');
const sinais = document.querySelector('.js-sinais');
const deletar = document.querySelector('.js-deletar');

numeros.addEventListener('click', (e) => {
  const valor = e.target.value;
  valores(valor);
})

sinais.addEventListener('click', (e) => {
  const valor = e.target.value;
  valores(valor)
})

deletar.addEventListener('click', (e) => {
  const valor = e.target.value;
  valores(valor)
})

const primeiraParte = [];
const segundaParte = [];

let sinal = '';

let controle = true;
let resultado ='';

function valores(valor){
  if(valor==='ac'){
      primeiraParte.length = 0;
      segundaParte.length = 0;
      sinal='';
      resultado='';
      controle = true;
      resposta()
  }
  if(controle === true){
    if(!isNaN(valor)){
      primeiraParte.push(valor)
    }else if(valor === '.' && primeiraParte.length > 0 && !primeiraParte.includes('.')){
      primeiraParte.push(valor)
    }else if(valor==='del'){
      primeiraParte.pop()
    }else if ((valor === '+' ||
               valor === '-' ||
               valor === '*' ||
               valor === '/' ||
               valor === '%') &&
               !isNaN(primeiraParte[primeiraParte.length - 1])
              ){ 
                sinal = valor; 
                controle = false;
    }
  }else{
    if(!isNaN(valor)){
      segundaParte.push(valor)
      calculo()
    }else if(valor === '.' && segundaParte.length > 0 && !segundaParte.includes('.')){
      segundaParte.push(valor)
    }else if(valor==='del'){
      segundaParte.pop()
      if(segundaParte.length === 0){
        sinal='';
        resultado=''
        controle = true;
        resposta()
      }
    }else if(valor === '='){
      calculo()
    }
  }
  resposta()
}

function calculo(){

  const primeiroNumero = Number(primeiraParte.join(''));
  const segundoNumero = Number(segundaParte.join(''));

  if(sinal === '%'){
    resultado = primeiroNumero*(segundoNumero/100);
  }else if(sinal ==='/'){
    resultado = primeiroNumero / segundoNumero;
  }else if(sinal ==='*'){
    resultado = primeiroNumero * segundoNumero;
  }else if(sinal === '-'){
    resultado = primeiroNumero - segundoNumero;
  }else{
    resultado = primeiroNumero + segundoNumero;
  }
}

function resposta(){
  let texto = '';

  for(let i=0;i<primeiraParte.length; i++){
    texto +=primeiraParte[i]
  }

  texto += sinal;

  for(let i=0;i<segundaParte.length; i++){
    texto +=segundaParte[i]
  }

  digito.innerHTML = `<p>${texto}</p>\n <p>${resultado}</p>`;
}