const vagas = []

function listarVagas() {
  const vagasEmTexto = vagas.reduce(function (textoFinal, vaga, indice) {
    textoFinal += indice + '. '
    textoFinal += vaga.nome
    textoFinal += ' (' + vaga.candidatos.length + ' candidatos)\n'
    return textoFinal
  }, '')

  alert(vagasEmTexto)

}

function novaVaga() {
  const nome = prompt('Informe o nome da vaga: ')
  const descricao = prompt('Informe a descrição da vaga: ')
  const dataLimite = prompt('Informe a data limite (dd/mm/aaaa) da vaga: ')

  const confirmacao = confirm(
    'Criar uma vaga com as seguintes informações?\n' +
    `Nome: ${nome}\n` +
    `Descrição: ${descricao}\n` +
    `Data limite: ${dataLimite}`
  )


  if (confirmacao) {
    const novaVaga = { nome, descricao, dataLimite, candidatos: [] }
    vagas.push(novaVaga)
    alert('Vaga criada com sucesso')
  }

}

function exibirVaga() {
  const indice = prompt('Informe o índice correspondente à vaga desejada: ')

  if (indice >= vagas.length || indice < 0) {
    alert('Índice inválido')
    return
  }

  const vaga = vagas[indice]

  const candidatosEmTexto = vaga.candidatos.reduce(function (textoFinal, candidato) {
    return textoFinal + '\n - ' + candidato
  }, '')

  alert(`Vaga nº ${indice}\n` +
    `Nome: ${vaga.nome}\n` +
    `Descrição: ${vaga.descricao}\n` +
    `Data limite: ${vaga.dataLimite}\n` +
    `Número de candidatos: ${vaga.candidatos.length}\n` +
    `Candidatos inscritos: ${candidatosEmTexto}`
  )
}

function inscreverCandidato() {
  const candidato = prompt('Informe o nome do candidato: ')
  const indice = prompt('Informe o índice da vaga para a qual o candidato deseja se inscrever: ')
  const vaga = vagas[indice]

  const confirmacao = confirm(
    `Confirma a inscrição do candidato ${candidato} na vaga ${indice}?\n` +
    `Nome: ${vaga.nome}\n` +
    `Descrição: ${vaga.descricao}\n` +
    `Data limite: ${vaga.dataLimite}`
  )

  if (confirmacao) {
    vaga.candidatos.push(candidato)
    alert('Inscrição realizada com sucesso')
  }
}

function excluirVaga() {
  const indice = prompt('Informe o índice da vaga a ser excluída: ')
  const vaga = vagas[indice]

  const confirmacao = confirm(
    `Deseja realmente excluir a vaga ${indice}?\n` +
    `Nome: ${vaga.nome}\n` +
    `Descrição: ${vaga.descricao}\n` +
    `Data limite: ${vaga.dataLimite}`
  )

  if (confirmacao) {
    vagas.splice(indice, 1)
    alert('Vaga excluída com sucesso')
  }
}

function exibirMenu() {
  const opcao = prompt(
    'Cadastro de Vagas de Emprego\n\n' +
    'Informe a opção desejada:\n' +
    '1. Listar vagas disponíveis\n' +
    '2. Criar nova vaga\n' +
    '3. Exibir vaga\n' +
    '4. Inscrever candidato\n' +
    '5. Excluir vaga\n' +
    '6. Encerrar'
  )

  return opcao
}

function executar() {
  let opcao = ''

  do {
    opcao = exibirMenu()

    switch (opcao) {
      case '1':
        listarVagas()
        break
      case '2':
        novaVaga()
        break
      case '3':
        exibirVaga()
        break
      case '4':
        inscreverCandidato()
        break
      case '5':
        excluirVaga()
        break
      case '6':
        alert('Encerrando...')
        break
      default:
        alert('Opção inválida')
    }

  } while (opcao != '6')
}

executar()