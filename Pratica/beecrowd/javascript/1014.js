const consumo = (distancia, combustivel) => distancia / combustivel;
const result = consumo(...lines);

console.log(`${result.toFixed(3)} km/l`);
