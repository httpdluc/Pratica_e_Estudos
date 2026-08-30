const frm = window.document.querySelector("form");
const res = window.document.querySelector("pre");

const carros = [];

frm.addEventListener("submit", (e) => {
    e.preventDefault();

        const modelo = frm.inModelo.value;
        const preco = Number(frm.inPreco.value);

        carros.push({modelo, preco});

        frm.inModelo.value = ""
        frm.inPreco.value = ""

        frm.inModelo.focus()

        frm.btListar.dispatchEvent(new Event("click"))
        
})

frm.btListar.addEventListener("click", () =>{
    if(carros.length == 0){
        alert( "Não há carros listados");
        return
    }
        const lista = carros.reduce((acumulador, valor) =>
            acumulador + valor.modelo + " - R$: " + valor.preco.toFixed(2)+ "\n", "")
        res.innerText = `Lista dos carros Cadastrados\n${"-".repeat(40)}\n${lista}`;
})

frm.btFiltrar.addEventListener("click", () =>{
    const valor = Number(prompt("informe o valor máximo da compra?"))

    if(valor == 0 || isNaN(valor)){
        return
    }

    const carrosFilter = carros.filter(carro => carro.preco <= valor)

    if(carrosFilter.length == 0){
        alert("Não há carros com velores menores")
        return
    }

    let lista= ''
    for(const carro of carrosFilter){
        lista += `${carro.modelo} - R$: ${carro.preco.toFixed(2)}\n`
    }
    res.innerText = `Carros até R$: ${valor.toFixed(2)}\n ${"-".repeat(40)}\n ${lista}`;
        
})

frm.btSimProm.addEventListener("click", () =>{
    if(carros.length == 0){
        alert("Não há desconto")
    }
    const desconto = Number(prompt("Por favor, informar qual será a porcentagem de desconto: "))

    if(desconto == 0 || isNaN(desconto)){
        alert("Este não é um desconto válido")
        return
    }

    const carrosDesconto = carros.map(valor =>({
        modelo: valor.modelo,
        preco: valor.preco - (valor.preco*desconto / 100)

}))

    let lista = ""
    for(const carro of carrosDesconto){
        lista += `${carro.modelo} - R$: ${carro.preco.toFixed(2)}\n`
    }

    res.innerText = `Esse são os carros com desconto:\n ${"-".repeat(40)}\n${lista}`


})