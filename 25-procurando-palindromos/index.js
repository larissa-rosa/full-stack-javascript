const palavra = prompt('Digite uma palavra para verificar se é um palíndromo: ')
let palavraInvertida = ''

for (i = palavra.length - 1; i >= 0; i--) {
  palavraInvertida += palavra[i]
}

alert(
  `Palavra digitada: ${palavra}` +
  `\nPalavra invertida: ${palavraInvertida}`
)

if (palavra == palavraInvertida) {
  alert('A palavra digitada é um palíndromo')
} else {
  alert('A palavra digitada não é um palíndromo')
}
