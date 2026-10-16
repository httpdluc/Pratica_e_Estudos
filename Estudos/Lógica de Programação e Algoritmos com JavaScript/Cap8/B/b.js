const frm = document.querySelector('form');
const msg = document.querySelector('pre');

frm.addEventListener('submit', (e) => {
    e.preventDefault();

    const nome = frm.inNome.value.trim();

    const contar = contarVogais(nome);
    const sobrenome = obterSobrenome(nome);
    const validar = validarNome(nome);

    if(validar == false){
        msg.innerText = `Nome invalido`
        return
    }
    
    msg.innerText = `Senha Inicial: ${sobrenome}${contar}`
})

const validarNome = (nome) => {
    let texto = false;
    if(nome.includes(' ')){
        texto = true;
    }
    return texto;
}

const contarVogais = (nome) => {
    let vogais = 0;

    for(let i=0 ; i< cont.length ; i++){
        if(nome.charAt(i) == 'a' ||
            nome.charAt(i) == 'e' ||
            nome.charAt(i) == 'i' ||
            nome.charAt(i) == 'o' ||
            nome.charAt(i) == 'u'){
               vogais++; 
            }
            
    }
    return vogais;
}

const obterSobrenome = (nome) => {
    const partes = nome.split(' '); 
    return partes[1];
}