const atacante = prompt('Nome do primeiro personagem: ')
const poderDeAtaque = prompt('Poder de ataque: ')

const defensor = prompt('Nome do segundo personagem: ')
let pontosDeVida = prompt('Quantidade de pontos de vida: ')
const poderDeDefesa = prompt('Poder de defesa: ')
const possuiEscudo = prompt('Possui um escudo? (S ou N) ')

if ((poderDeAtaque > poderDeDefesa) && possuiEscudo == 'N') {
  dano = poderDeAtaque - poderDeDefesa
} else if ((poderDeAtaque > poderDeDefesa) && possuiEscudo == 'S') {
  dano = (poderDeAtaque - poderDeDefesa) / 2
} else if (poderDeAtaque <= poderDeDefesa) {
  dano = 0
}

let final = pontosDeVida - dano

alert(
  `${atacante}:\n` +
  `Poder de ataque: ${poderDeAtaque}\n\n` +
  `${defensor}:\n` +
  `Pontos de vida: ${final}\n` +
  `Poder de defesa: ${poderDeDefesa}\n` +
  `Possui escudo: ${possuiEscudo}`
)