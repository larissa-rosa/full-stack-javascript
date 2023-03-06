const imoveis = []
let opcao = ''

do {
  opcao = prompt(
    'Cadastro de Imóveis\n' +
    `Total de imóveis: ${imoveis.length}\n\n` +
    'Escolha uma opção:' +
    '\n1 - Novo imóvel' +
    '\n2 - Listar imóveis' +
    '\n3 - Sair'
  )

  switch (opcao) {
    case '1':
      const imovel = {}

      imovel.proprietario = prompt('Informe o nome do proprietário do imóvel: ')
      imovel.quartos = prompt('Quantos quartos o imóvel possui? ')
      imovel.banheiros = prompt('Quantos banheiros os imóvel possui? ')
      imovel.garagem = prompt('O imóvel possui garagem? (S/N) ')

      const confirmacao = confirm(
        'Salvar esta imóvel?\n' +
        `\nProprietário: ${imovel.proprietario}` +
        `\nQuartos: ${imovel.quartos}` +
        `\nBanheiros: ${imovel.banheiros}` +
        `\nPossui garagem? ${imovel.garagem}`
      )

      if (confirmacao) {
        imoveis.push(imovel)
      }

      break
    case '2':
      for (let i = 0; i < imoveis.length; i++) {
        alert(
          `Imóvel ${i + 1}` +
          `\nProprietário: ${imoveis[i].proprietario}` +
          `\nQuartos: ${imoveis[i].quartos}` +
          `\nBanheiros: ${imoveis[i].banheiros}` +
          `\nPossui garagem? ${imoveis[i].garagem}`
        )
      }
      break
    case '3':
      alert('Encerrando...')
      break
    default:
      alert('Opção inválida!')
  }
} while (opcao != '3')