async function imc(weight, height) {
  if (typeof weight !== 'number' || typeof height !== 'number') {
    return Promise.reject('arguments must be of type number')
  }
  return weight / (height * height)
}

async function showImc(weight, height) {
  try {
    console.log(`Calculando o IMC para o peso ${weight} e para a altura ${height}`)

    const result = await imc(weight, height)

    console.log(`O resultado do IMC foi de ${result}.`)

    if (result < 18.5) console.log('Situação: magreza')
    else if (result < 25) console.log('Situação: normal')
    else if (result < 30) console.log('Situação: sobrepeso')
    else if (result < 40) console.log('Situação: obesidade')
    else console.log('Situação: obesidade grave')
  } catch (error) {
    console.log(error)
  }
}

showImc(71, 1.74)
showImc(48, 1.60)
showImc(71, 'texto')
showImc(82, 1.72)
showImc(120, 1.80)