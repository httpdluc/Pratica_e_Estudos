const frm = document.querySelector("form");
const msg = document.querySelector("pre");

const times = [];

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const time = frm.inClube.value;

    times.push(time)

    msg.innerText = `${times.length}º time adicionado com sucesso!`
    frm.inClube.value = ''
})

frm.btListar.addEventListener("click", () => {

    let lista = ''

    if(times.length == 0){
        lista = `Não há time para listar.`
    }else{
        for(const tabela of times){
            lista += tabela + " \n"
        }
    }

    msg.innerText = `${lista}`
})

frm.btTabela.addEventListener("click", () =>{

    let lista = '';

    if(times.length % 2 != 0){
        lista = "Por gentileza, informar mais um time!";
    }else{
        for(let i = 0;i<times.length;i++){
            lista += times[i] + ' x ' + times.pop() + '\n'
        }
    }

    msg.innerText = lista

})

frm.btLimpar.addEventListener("click", () => {

    let lista = ''
    if(times.length != 0){
        for(let i = times.length; i != 0; i--){
            times.pop()
        }
    }
    lista = 'Todos os times foram apagados!'
    msg.innerText = lista;
    
})