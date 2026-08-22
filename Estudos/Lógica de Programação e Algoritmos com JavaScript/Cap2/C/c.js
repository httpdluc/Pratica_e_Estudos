const form = document.querySelector("form");
const outTotal = document.getElementsByTagName("h4")[0];
const outUnidade = document.getElementsByTagName("h4")[1];

form.addEventListener("submit", (e) => {
    const produto = form.inProduto.value;
    const valor = Number(form.inValor.value);

    const desconto = valor*0.5;
    const total = (valor*2)+desconto;

    outTotal.innerText = `O produto: ${produto}.\n Levando 3 paga: R$ ${total}.`
    outUnidade.innerText = `O valor do terceiro: R$ ${desconto.toFixed(2)}.`
    


    
    e.preventDefault();
})