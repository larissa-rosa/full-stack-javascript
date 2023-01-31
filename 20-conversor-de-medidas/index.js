const valor = prompt('Digite um valor em metros: ')
const valorNumerico = parseFloat(valor)


const opcao = prompt('Conversor de medidas\n' +
  '1 - milímetro (mm)\n' +
  '2 - centímetro (cm)\n' +
  '3 - decímetro (dm)\n' +
  '4 - decâmetro (dam)\n' +
  '5 - hectômetro (hm)\n' +
  '6 - quilômetro (km)\n' +
  'Digite o valor correspondente à opção desejada: ')

switch (opcao) {
  case '1':
    valorConvertido = valorNumerico * 1000
    alert(`O valor convertido é de ${valorConvertido} mm`)
    break
  case '2':
    valorConvertido = valorNumerico * 100
    alert(`O valor convertido é de ${valorConvertido} cm`)
    break
  case '3':
    valorConvertido = valorNumerico * 10
    alert(`O valor convertido é de ${valorConvertido} dm`)
    break
  case '4':
    valorConvertido = valorNumerico / 10
    alert(`O valor convertido é de ${valorConvertido} dam`)
    break
  case '5':
    valorConvertido = valorNumerico / 100
    alert(`O valor convertido é de ${valorConvertido} hm`)
    break
  case '6':
    valorConvertido = valorNumerico / 1000
    alert(`O valor convertido é de ${valorConvertido} km`)
    break
  default:
    alert('Opção inválida!')
}




