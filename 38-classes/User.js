class User {
  constructor(fullname, email, password) {
    this.fullname = fullname
    this.email = email
    this.password = password
  }
  
  login(email, password) {
    if (this.email === email && this.password === password) {
      console.log('Login realizado com sucesso!')
    } else {
      console.log('Erro ao tentar logar. Email ou senha incorretos.')
    }
  }
}

const john = new User('John Doe', 'john@email.com', 'abc123')

console.log(john)
john.login('john@email.com', 'abc123')