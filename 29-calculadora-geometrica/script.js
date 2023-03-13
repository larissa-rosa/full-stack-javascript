function areaTriangulo() {
  const base = prompt('Informe o valor da base: ')
  const altura = prompt('\nInforme o valor da altura: ')
  return base * altura / 2
}

function areaRetangulo() {
  const base = prompt('Informe o valor da base: ')
  const altura = prompt('\nInforme o valor da altura: ')
  return base * altura
}

function areaQuadrado() {
  const lado = prompt('Informe o valor do lado: ')
  return lado * lado
}

function areaTrapezio() {
  const baseMaior = parseFloat(prompt('Informe o valor da base maior: '))
  const baseMenor = parseFloat(prompt('\nInforme o valor da base menor: '))
  const altura = prompt('\nInforme o valor da altura: ')
  return (baseMaior + baseMenor) * altura / 2
}

function areaCirculo() {
  const raio = prompt('Informe o valor do raio: ')
  return 3.14 * raio * raio
}

function exibirMenu() {
  return prompt(
    'Escolha uma forma geométrica para calcular sua área:' +
    '\n\n1 - Triângulo' +
    '\n2 - Retângulo' +
    '\n3 - Quadrado' +
    '\n4 - Trapézio' +
    '\n5 - Círculo' +
    '\n6 - Sair'
  )
}

function executar() {
  let opcao = ''
  do {
    opcao = exibirMenu()
    let resultado
    switch (opcao) {
      case '1':
        resultado = areaTriangulo()
        break
      case '2':
        resultado = areaRetangulo()
        break
      case '3':
        resultado = areaQuadrado()
        break
      case '4':
        resultado = areaTrapezio()
        break
      case '5':
        resultado = areaCirculo()
        break
      case '6':
        alert('Encerrando...')
        break
      default:
        alert('Opção inválida! Retornando ao menu...')
    }
    if (resultado) {
      alert(`Resultado: ${resultado}`)
    }
  } while (opcao != '6')
}

executar()
