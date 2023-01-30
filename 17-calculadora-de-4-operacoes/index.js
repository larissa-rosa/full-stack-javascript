const n1 = prompt('Digite o primeiro valor: ')
const n2 = prompt('Digite o segundo valor: ')

num1 = parseFloat(n1)
num2 = parseFloat(n2)

const soma = num1 + num2
const subt = num1 - num2
const mult = num1 * num2
const divi = num1 / num2

alert(
  'Resultados: ' +
  `\nSoma: ${num1} + ${num2} = ${soma}` +
  `\nSubtração: ${num1} - ${num2} = ${subt}` +
  `\nMultiplicação: ${num1} * ${num2} = ${mult}` +
  `\nDivisão: ${num1} / ${num2} = ${divi}`
)