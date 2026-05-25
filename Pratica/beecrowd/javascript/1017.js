const [horas, velocidade] = lines.map(Number);

const distancia = horas* velocidade;
const consumo = 12;
const litros = distancia / consumo;

console.log(`${litros.toFixed(3)}`);
