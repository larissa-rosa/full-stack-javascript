let opcao = ''

do {
  opcao = prompt('1 - Primeira opção\n' +
    '2 - Segunda opção\n' +
    '3 - Terceira opção\n' +
    '4 - Quarta opção\n' +
    '5 - Encerrar\n' +
    'Digite a opção desejada:')
  alert(`Você escolheu a ${opcao}ª opção`)
}
while (opcao != '5')

alert('O sistema está sendo encerrado.')