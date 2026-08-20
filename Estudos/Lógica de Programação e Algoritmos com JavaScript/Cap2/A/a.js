const form = document.querySelector("form");
const remedio = document.getElementsByTagName("h3")[0];
const valor = document.getElementsByTagName("h3")[1];

form.addEventListener("submit", (e) => {
    const descricao = form.inMendicamento.value;
    const inValor = Number(form.inValor.value);

    const promo = Math.floor(inValor)*2;

    remedio.innerText = `O seu remédio é: ${descricao}.`;
    valor.innerText = `O valor final da compra São: R$ ${promo}.`;

    e.preventDefault();

}) 