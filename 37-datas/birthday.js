const dayjs = require("dayjs")

//dayjs().format()

function birthday(date) {
  const birthday = dayjs(date)
  const today = dayjs()
  //date1.diff(date2)
  const ageInYears = today.diff(birthday, 'year')
  const nextBirthday = birthday.add(ageInYears + 1, 'year')
  const daysToNextBirthday = nextBirthday.diff(today, 'day') + 1

  console.log(`Idade: ${ageInYears}`)
  console.log(`Próximo aniversário: ${nextBirthday.format('DD/MM/YYYY')}`)
  console.log(`Dias até completar ${ageInYears + 1}: ${daysToNextBirthday}`)
}

birthday("1993-03-07")