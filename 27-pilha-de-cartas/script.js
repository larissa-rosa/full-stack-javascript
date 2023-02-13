const baralho = []
let opcao = ''

do {
  opcao = prompt(`Cartas no baralho: ${baralho.length}` +
    'Informe a opção desejada:' +
    '\n1 - Adicionar uma carta' +
    '\n2 - Retirar uma carta' +
    '\n3 - Sair'
  )

  switch (opcao) {
    case '1':
      const novaCarta = prompt('Qual é a carta? ')
      baralho.push(novaCarta)
      break
    case '2':
      const cartaRetirada = baralho.pop()
      if (!cartaRetirada) {
        alert('Não há nenhuma carta no baralho.')
      } else {
        alert(`Carta retirada: ${cartaRetirada}`)
      }
      break
    case '3':
      alert('Encerrando...')
      break
    case '4':
      alert('Opção inválida!')
  }

} while (opcao != '3')