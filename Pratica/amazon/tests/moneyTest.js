import { formatCurrency } from "../scripts/utils/money.js";

console.log('teste da função formatCurrency')

console.log('converte centavos em real')

if(formatCurrency(2095) === '20.95'){
  console.log('passou')
}else{
  console.log('falhou')
}

console.log('funcionamento com o valor 0')

if(formatCurrency(0) === '0.00'){
  console.log('passou')
}else{
  console.log('falhou')
}

console.log('arredondamento de centavos com mais casas decimais')

if(formatCurrency(2000.5) === '20.01'){
  console.log('passou')
}else{
  console.log('falhou')
}