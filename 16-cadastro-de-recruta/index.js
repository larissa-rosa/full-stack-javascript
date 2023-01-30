const nome = prompt('Primeiro nome: ')
const sobrenome = prompt('Sobrenome: ')
const campoEstudo = prompt('Campo de estudo: ')
const nasc = prompt('Ano de nascimento: ')

const idade = 2023 - nasc

alert(
  `Nome: ${nome}` +
  `\nSobrenome: ${sobrenome}` +
  `\nCampo de estudo: ${campoEstudo}` +
  `\nIdade: ${idade}`
)