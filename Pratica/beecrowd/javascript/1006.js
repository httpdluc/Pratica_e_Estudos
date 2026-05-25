const [a, b, c]  = lines;
    
const pA = 2;
const pB = 3;
const pC = 5

const res = (a * pA + b * pB + c * pC) / (pA + pB + pC);

console.log(`MEDIA = ${res.toFixed(1)}`);