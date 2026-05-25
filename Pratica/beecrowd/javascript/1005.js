const [nA, nB] = lines;
    
const pA = nA;
const pB = nB;

const res = (nA * pA + nB * pB) / (pA + pB);

console.log(`MEDIA = ${res.toFixed(5)}`);
