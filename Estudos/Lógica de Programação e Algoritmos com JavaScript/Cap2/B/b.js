const form = document.querySelector("form");
const resultado = document.querySelector("h4")

form.addEventListener("submit", (e) =>{
    const valor = Number(form.inValor.value);
    const tempo = Number(form.inTempo.value) / 15;

    const calculo = valor * tempo;

    resultado.innerText = `O valor a pagar será de: R$ ${calculo}`
    
    e.preventDefault();
})