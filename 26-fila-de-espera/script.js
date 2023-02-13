let fila = []
let opcao = ''

do {
  let pacientes = ''
  for (let i = 0; i < fila.length; i++) {
    pacientes += (i + 1) + "º - " + fila[i] + '\n'
  }

  opcao = prompt(`Pacientes: ${pacientes}\n` +
    `\nInforme a opção desejada:\n` +
    '1 - Novo paciente\n' +
    '2 - Chamar paciente\n' +
    '3 - Encerrar\n'
  )

  switch (opcao) {
    case '1':
      const novoPaciente = prompt('Informe o nome do paciente: ')
      fila.push(novoPaciente)
      break
    case '2':
      const pacienteChamado = fila.shift()
      alert(pacienteChamado + ' foi removido da fila.')
      break
    case '3':
      alert('Encerrando...')
      break
    default:
      alert('Opção inválida!')
  }

} while (opcao != '3')