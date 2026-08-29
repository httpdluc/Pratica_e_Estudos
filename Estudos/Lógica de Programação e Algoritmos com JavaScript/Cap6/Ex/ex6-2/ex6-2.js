const frm = document.querySelector("form")
const dica = document.querySelector("#dica")
const erros = document.querySelector("#erros")
const chances = document.querySelector("#chances")


const chute = [];
const sorteio = Math.floor(Math.random()*100)+1
const tentativas = 6;


frm.addEventListener("submit", (e) => {
    e.preventDefault();    

    const numero = Number(frm.inChute.value);

    if(numero == sorteio){
        dica.innerText = `Parabéns o número era: ${sorteio}!`;
        frm.inTentativa.disabled = true;
    }else{
        if(chute.includes(numero)){
            alert(`Você já apostou no número: ${numero}. Tente outro...`);
        }else{
            chute.push(numero);

            const nErros = chute.length;
            const tentativasRestantes = tentativas - nErros;
            chances.innerText = `O número que você chutou foi: ${chute.join(", ")}\n Número de tentativas: ${tentativasRestantes}`
            
            if(tentativasRestantes == 0){
                dica.innerText = `Suas chances acabaram, o número era: ${sorteio}.`
                frm.inTentativa.disabled = true;
            }else{
                const minMax = numero < sorteio ? "maior" : "menor";
                dica.innerText = `O número ${numero} é ${minMax} que o sorteado.`
            }
        }
    }

    console.log(numero)
    console.log (sorteio)
})

frm.recomecar.addEventListener("click",() => {
    location.reload()
})




/*const prompt = require("prompt-sync")();

const numero = Math.random()*100

const vet = [Number(numero.toFixed(0))]

const erros = [];

for(let i = 0; i < 6; i++){
    const tentativa = Number(prompt(`informe sua ${i+1}º tentativa: `));


    erros.push(tentativa);

    if(vet.includes(tentativa) == true){
        console.log(`Parabés você acertou!\n O número era: ${vet}!`)
        break;
    }else if(i==5) {
        console.log("Suas chances acabaram!")
        console.log(`O número era: ${vet} :(`)
        break;
    }else{
        if(vet < tentativa){
            console.log(`O número é menor!`)
        }else{
            console.log(`O número é maior!`)
        }
        console.log("Tente novamente.")
        console.log(`Numeros tentados: ${erros.join(", ")}`)        
    }
}*/