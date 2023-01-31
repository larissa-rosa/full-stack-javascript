const turista = prompt('Qual o seu nome? ')

let visitou = prompt('Você já visitou alguma cidade? (S/N)')

let cidade = ''
let lista = ''
let cont = 0

while (visitou == 'S') {
  cidade = prompt('Qual o nome da cidade que você visitou? ')
  lista += cidade + ' '
  cont++
  visitou = prompt('Você visitou alguma outra cidade? (S/N)')
}

alert(`Nome do turista: ${turista}\n` +
  `Número de cidades visitadas: ${cont}\n` +
  `Nomes das cidades visitadas: ${lista}`)
