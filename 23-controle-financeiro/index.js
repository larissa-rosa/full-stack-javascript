let opcao = ""

let saldo = parseFloat(prompt('Insira a quantidade disponível de dinheiro: '))

do {
  opcao = prompt(
    `Saldo: R$${saldo}\n` +
    '1 - Adicionar\n' +
    '2 - Remover\n' +
    '3 - Sair'
  )

  switch (opcao) {
    case "1":
      saldo += parseFloat(prompt('Insira a quantia a ser adicionada: '))
      break
    case "2":
      saldo -= parseFloat(prompt('Insira a quantia a ser removida: '))
      break
    case "3":
      alert('O programa será encerrado')
      break
    default:
      alert('Opção inválida!')
  }

}
while (opcao != "3")