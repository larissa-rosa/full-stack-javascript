const veiculo1 = prompt('Nome do primeiro veículo: ')
const vel1 = prompt('Velocidade: ')
const veiculo2 = prompt('Nome do segundo veículo: ')
const vel2 = prompt('Velocidade: ')

if (vel1 > vel2) {
  document.write(`${veiculo1} é mais rápido que ${veiculo2}`)
} else if (vel1 < vel2) {
  document.write(`${veiculo2} é mais rápido que ${veiculo1}`)
} else {
  document.write('A velocidade dos 2 veículos é a mesma')
}