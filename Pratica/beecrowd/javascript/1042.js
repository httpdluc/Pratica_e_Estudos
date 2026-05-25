
const entrada = lines[0].split(' ').map(Number)

const ordem = (numeros) => [...numeros].sort((x, y) => x - y)

const res = ordem(entrada)
    
res.forEach(valor => console.log(valor))

console.log('')

entrada.forEach(valor => console.log(valor))
