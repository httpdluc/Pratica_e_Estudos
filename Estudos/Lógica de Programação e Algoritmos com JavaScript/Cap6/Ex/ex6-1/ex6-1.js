const frm =  document.querySelector("form");
const resLista = document.querySelector("p");
const info = document.querySelector("h5");

const pacientes = [];

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome = frm.inNome.value;
    pacientes.push(nome);

    let lista = "";

    pacientes.forEach((paciente, i) => {
        lista += `${i+1}. ${paciente}\n`
    })

    resLista.innerText = lista;
    frm.inNome.value = "";
    frm.inNome.focus()
})

frm.btUrgencia.addEventListener("click", () => {

    if(!frm.checkValidity()){
        info.innerText ="Informe o nome do paciente a ser atendido em carater de urgencia";
        frm.inNome.focus();
        return;
    }
    
    const nome = frm.inNome.value;

    pacientes.unshift(nome)
    let lista = "";

    pacientes.forEach((paciente, i) => {
        lista += `${i+1}. ${paciente}\n`
    })

    resLista.innerText = lista;
    frm.inNome.value = "";
    frm.inNome.focus()

})

frm.btAtendido.addEventListener("click", () => {
    
    if(pacientes.length == 0){
        resLista.innerText = "Não há pacientes"
        frm.inNome.focus();
        return
    }

    const atendidos = pacientes.shift()
    info.innerText = atendidos;

    let lista= "";

    atendidos.forEach((atendido, i) => {
        lista += `${i+1}. ${atendido}`
    })
    resLista.innerText = lista;

})