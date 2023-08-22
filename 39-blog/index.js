const Author = require("./Author");

const john = new Author('John Doe')

const post = john.writePost('Título do post', '...')

post.addComment('Larissa Rosa', 'Muito bom!')
post.addComment('João Silva', 'Interessante!')

console.log(john)
console.log(post)