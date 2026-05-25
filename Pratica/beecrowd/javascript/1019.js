const tSegundos = lines[0]

const conversao = (segundos, tipo) => {
    const tempo = {
        hora:3600,
        minuto:60,
        segundo:1
    }
    const quant = Math.floor(segundos/ tempo[tipo])
    const resto = segundos % tempo[tipo]
    return {quant, resto}
} 

function formHora (segundos){
    const horas = conversao(segundos, 'hora')
    const minutos = conversao(horas.resto,'minuto')
    return `${horas.quant}:${minutos.quant}:${minutos.resto}`
}

console.log(formHora(tSegundos))
